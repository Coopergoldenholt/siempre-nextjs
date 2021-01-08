import {createGlobalStyle} from 'styled-components';
const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Barlow:600,700|Hind:400,500&display=swap');

    body{
        font-family: 'Hind', sans-serif;
        font-weight:400;
        overflow:hidden;
        line-height:1.45em;
    }
    h1,h2,h3,h4,h5,h6{
        font-family: 'Barlow', sans-serif;
        font-weight: 700;
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