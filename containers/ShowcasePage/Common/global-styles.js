import {createGlobalStyle} from 'styled-components';
const GlobalStyle = createGlobalStyle`

    body{
        font-family: 'Quicksand', sans-serif;
        font-weight:400;
        overflow:hidden;
        line-height:1.45em;
    }
    h1,h2,h3,h4,h5,h6{
        font-family: 'Quicksand', sans-serif;
        font-weight: 500;
    }
    a{
        font-size:16px;
    }
    img{
        vertical-align:unset;
        margin-bottom:0px;
    }
`;

export default GlobalStyle;