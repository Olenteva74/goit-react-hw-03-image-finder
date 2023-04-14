import PropTypes from 'prop-types';
import { GalleryItem, Img } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({tags, webformatURL, largeImageURL}) => {
    return (
        <GalleryItem>
            <Img src={webformatURL} alt={tags} data-source={largeImageURL} data-alt={tags}
            />   
        </GalleryItem>
    )
}

ImageGalleryItem.propTypes = {
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired
}