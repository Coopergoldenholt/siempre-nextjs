import {createGlobalStyle} from 'styled-components';
const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600&display=swap');

    body{
        font-family: 'Source Sans Pro', sans-serif;
        line-height:1.45em;
    }
    h1,h2,h3,h4,h5,h6{
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 600;
    }
    a{
        font-size:16px;
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