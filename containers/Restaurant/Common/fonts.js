import React from "react";
import Helmet from "react-helmet"

const Fonts = () => {
    return(
        <Helmet>
            <link 
                href="https://fonts.googleapis.com/css?family=Be+Vietnam:300,400|Noto+Sans+JP:300,400&display=swap" 
                rel="stylesheet"/>
        </Helmet>
    );
};

export default Fonts;
