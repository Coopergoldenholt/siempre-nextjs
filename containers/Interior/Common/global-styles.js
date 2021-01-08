import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css?family=Muli:400,600,700|Noto+Sans:400,700&display=swap');
    
    body{
        font-family: 'Noto Sans', sans-serif;
        font-weight:500;
        line-height:1.45em;
    }
    
    h1,h2,h3,h4,h5,h6{
        font-family: 'Muli', sans-serif;
        font-weight: 700;
    }
    img{
        vertical-align:unset;
        margin-bottom:0px;
    }
`;

export default GlobalStyle;