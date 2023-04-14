import styled from '@emotion/styled';
import {BiLoaderCircle} from 'react-icons/bi';

export const Preloader = styled.div`
position: fixed;
left: 0;
top: 0;
right: 0;
bottom: 0;
overflow: hidden;
background: #cbd6ee;
z-index: 1001;
fill: #3f51b5;
`;

export const PreloaderImg = styled(BiLoaderCircle)`
position: relative;
top: 20%;
left: 50%;
width: 70px;
height: 70px;
margin-top: -35px;
margin-left: -35px;
text-align: center;
fill: #3f51b5;
animation: preloader-rotate 2s infinite linear;
@keyframes preloader-rotate {
    100% {
      transform: rotate(360deg);
    }
`;

export const ErrorWrapper = styled.h1`
margin: 0 auto;
`;

export const Button = styled.button`
margin: 0 auto;
padding: 8px 16px;
border-radius: 2px;
background-color: #3f51b5;
transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
text-align: center;
display: block;
color: #fff;
border: 0;
text-decoration: none;
cursor: pointer;
font-family: inherit;
font-size: 18px;
line-height: 24px;
font-style: normal;
font-weight: 500;
min-width: 180px;
box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
  0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
:hover,
:focus {
  background-color: #303f9f;
}
`;