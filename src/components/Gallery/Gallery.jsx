import React, {Component} from "react";
import PropTypes from 'prop-types';
import { ImageGallery } from "components/ImageGallery";
import { Preloader, PreloaderImg, ErrorWrapper, Button } from "./Gallery.styled";
import { fetchImg } from "services";


export class Gallery extends Component {

    static propTypes = {
        searchQuery: PropTypes.string.isRequired,
        onClose: PropTypes.func.isRequired,
        getImgUrl: PropTypes.func.isRequired
    }

    state = {
        images: [],
        page: 1,
        error: null,
        status: null,
        isLoadButton: true
    }

   async componentDidUpdate(prevProps, prevState) {

    const {searchQuery} = this.props;
    const {page} = this.state;
   
   if (prevProps.searchQuery !== searchQuery) {

     this.setState({page: 1, status: "pending"});
     try {
        const response = await fetchImg(searchQuery, 1);

        if (response.totalHits === 0) {
            this.setState({status: "rejected", error: `Sorry, there are no images ${searchQuery}. Please try again.`})
          } else {
            this.setState({images: response.hits, status: "resolved"}); 
            if (response.totalHits <= 12) {
                this.setState({isLoadButton: false});
              } else {
                this.setState({isLoadButton: true});
              }
          }  

     } catch (error) {
        this.setState({error: error.message, status: "rejected"});
     }
     
   } else if (prevState.page !== page && page !== 1) {

        try {
           const response = await fetchImg(searchQuery, page);
           this.setState(prevState => ({
            images: [...prevState.images, ...response.hits], status: "resolved"
        })); 
        if (Math.ceil(response.totalHits / 12) === page) {
            this.setState({isLoadButton: false});
          } else {
            this.setState({isLoadButton: true});
          } 
          
        } catch (error) {
            this.setState({error: error.message, status: "rejected"});
         }
    }

    document.getElementById('root').scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
 
  }

  addPage = () => {
    this.setState(prevState => ({
        page: prevState.page + 1
    }))
  }
  openModal = (event) => {
    const {source, alt} = event.target.dataset;
    this.props.onClose();
    this.props.getImgUrl({imgUrl: source, alt});
   
  }

  render() {
    const {images, error, status, isLoadButton} = this.state;
    if (status === "pending") {
        return (
            <Preloader>
                <PreloaderImg/>
            </Preloader>
        )
    }
    if (status === "rejected") {
        return <ErrorWrapper>{error}</ErrorWrapper>
    }
    if (status === "resolved") {
        return (
           <>
             <ImageGallery images={images} closeModal={this.openModal}/>
                {isLoadButton && (<Button type="button" onClick={this.addPage}>Load more</Button>)}
           </>
        )
    }
   
  }

}