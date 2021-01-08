import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=DM+Sans:400,500&display=swap');
   
    body{
        font-family: 'DM Sans', sans-serif;
        font-weight:400;
        overflow:hidden;
        line-height:1.45em;
    }
    h1,h2,h3,h4,h5,h6{
        font-family: 'DM Sans', sans-serif;
        font-weight: 500;
        color:#424345;
    }
    a{
        font-family: 'DM Sans', sans-serif;
        font-weight:500;
        font-size:16px;
    }
    img{
        vertical-align:unset;
        margin-bottom:0px;
    }
    
`;

export default GlobalStyle;