import React from "react";
import Helmet from "react-helmet"

const Fonts = () => {
    return(
        <Helmet>
            <link 
                href="https://fonts.googleapis.com/css?family=Lato:300,400|Nunito:400,600&display=swap" 
                rel="stylesheet"/>
        </Helmet>
    );
};

export default Fonts;
