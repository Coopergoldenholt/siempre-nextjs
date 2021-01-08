import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:300,400|Noto+Sans+JP:300,400&display=swap');    

    body{
        font-family: 'Be Vietnam', sans-serif;
        font-weight: 100;
        line-height:1.45em;
    }
    h1,h2,h3,h4,h5,h6{
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 300;
        color:#424345;
    }
    a{
        font-family: 'Be Vietnam', sans-serif;
        font-weight: 300;
    }
    img{
        vertical-align:unset;
        margin-bottom:0px;
    }
`;

export default GlobalStyle;