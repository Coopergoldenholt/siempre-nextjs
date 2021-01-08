import React from "react";
import Helmet from "react-helmet"

const Fonts = () => {
    return(
        <Helmet>
            <link 
                href="https://fonts.googleapis.com/css?family=Muli:400,600,700|Noto+Sans:400,700&display=swap" 
                rel="stylesheet"/>
        </Helmet>
    );
};

export default Fonts;
