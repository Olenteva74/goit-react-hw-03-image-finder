import React, {Component} from "react";
import { AppWrapper } from "./App.styled";
import { Searchbar } from "components/Searchbar";
import { Gallery } from "components/Gallery";
import { Modal } from "components/Modal";

export class App  extends Component {
  state = {
    searchQuery: "",
    showModal: false,
    imgUrl: "",
    alt: ""
  }

toggleModal = () => {
  this.setState(({showModal}) => ({
    showModal: !showModal
  }))
}

  getSearchQuery = ({searchQuery}) => {
    this.setState({searchQuery});
  }

  getImgUrl = ({imgUrl, alt}) => {
    this.setState({imgUrl, alt})
  }

  render(){
    const {searchQuery, showModal, imgUrl, alt} = this.state;
    const {getSearchQuery, toggleModal, getImgUrl} = this;

   return (
    <AppWrapper>
    <Searchbar onSubmit={getSearchQuery}/>
    <Gallery searchQuery={searchQuery} 
    onClose={toggleModal}
    getImgUrl={getImgUrl}/>
    {showModal &&  <Modal onClose={toggleModal} imgUrl={imgUrl} alt={alt}/>}
  </AppWrapper>
   )
  }
};
