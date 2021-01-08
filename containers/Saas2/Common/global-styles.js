import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Lato|Raleway:500&display=swap');
   
    body{
        font-family: 'Lato', sans-serif;
        overflow:hidden;
        line-height:1.45em;
    }
    h1,h2,h3,h4,h5,h6{
        font-family: 'Raleway', sans-serif;
        font-weight: 500;
        color:#424345;
    }
    a{
        font-family: 'Lato', sans-serif;
        font-size:16px;
    }
    img{
        vertical-align:unset;
        margin-bottom:0px;
    }
`;

export default GlobalStyle;