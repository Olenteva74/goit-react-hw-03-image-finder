import PropTypes from 'prop-types';
import { ImageGalleryItem } from "components/ImageGalleryItem";
import { ImageGalleryWrapper } from './ImageGallery.styled';

export const ImageGallery = ({images, closeModal}) => {
    return (
        <ImageGalleryWrapper onClick={closeModal}>
              {images.map(image => {
                return <ImageGalleryItem key={image.id}
                tags={image.tags}
                webformatURL={image.webformatURL}
                largeImageURL={image.largeImageURL}
                />
            })}
        </ImageGalleryWrapper>
    )
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        tags: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired
    })),
    closeModal: PropTypes.func.isRequired
}