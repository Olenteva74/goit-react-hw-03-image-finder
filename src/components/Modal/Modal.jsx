import React, {Component} from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import { Overlay, ModalWrapper, Img } from "./Modal.styled";


export class Modal extends Component {

    static propTypes = {
        onClose: PropTypes.func.isRequired,
        imgUrl: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
      }

    componentDidMount() {
       window.addEventListener("keydown", this.closeModalOnEsc);
    }

    componentWillUnmount() {
      window.removeEventListener("keydown", this.closeModalOnEsc);
    }

    closeModalOnEsc = event => {
        if (event.code === 'Escape') {
            this.props.onClose();
        }
    }

    closeModalOnClickBackdrop = event => {
        if (event.target === event.currentTarget) {
            this.props.onClose();
        }
    }

    render() {
        const {imgUrl, alt} = this.props;
        return createPortal(
            <Overlay onClick={this.closeModalOnClickBackdrop}>
                <ModalWrapper>
                <Img src={imgUrl} alt={alt} />
                </ModalWrapper>
            </Overlay>,
           document.getElementById('modal-root')
        )
    }
}