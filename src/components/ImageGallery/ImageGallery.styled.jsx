import styled from '@emotion/styled';

export const ImageGalleryWrapper = styled.ul`
display: grid;
max-width: calc(100vw - 64px);
grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
grid-gap: 16px;
margin-top: 0;
margin-bottom: 0;
padding: 0;
list-style: none;
margin-left: auto;
margin-right: auto;
`;