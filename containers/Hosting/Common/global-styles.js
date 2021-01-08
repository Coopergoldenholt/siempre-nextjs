import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Oxygen:400,700|Rubik&display=swap');
   
    body{
        font-family: 'Rubik', sans-serif;
        overflow:hidden;
        line-height:1.45em;
    }

    h1,h2,h3,h4,h5,h6{
        font-family: 'Oxygen', sans-serif;
        font-weight: 700;
        color:#424345;
    }

    a{
        font-family: 'Rubik', sans-serif;
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