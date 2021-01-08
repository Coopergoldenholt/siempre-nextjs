import {createGlobalStyle} from 'styled-components';
const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

    body{
        font-family:'Roboto', sans-serif;;
        overflow:hidden;
        line-height:1.45em;
    }
    h1,h2,h3,h4,h5,h6{
        font-family:'Roboto', sans-serif;;
        font-weight: 600;
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