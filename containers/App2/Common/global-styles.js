import {createGlobalStyle} from 'styled-components';
const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Lato:300,400|Nunito:400,600&display=swap');

    body{
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        line-height:1.45em;
    }
    h1,h2,h3,h4,h5,h6{
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
    }
    a{
        font-size:16px;
        font-weight:400;
    }
    form{
        margin-bottom:0px;
    }
    img{
        vertical-align:unset;
        margin-bottom:0px;
    }
`;

export default GlobalStyle;