import React from "react";
import GlobalStyle from "../containers/ShowcasePage/Common/global-styles"
import Banner from "../containers/ShowcasePage/Banner"
import HeaderMenu from "../containers/ShowcasePage/HeaderMenu"
import Demos from "../containers/ShowcasePage/Demos"
import Features from "../containers/ShowcasePage/Features"
import KeyFeatures from "../containers/ShowcasePage/KeyFeatures"
import Download from "../containers/ShowcasePage/Download"
import Footer from "../containers/ShowcasePage/Footer"
import SEO from "../components/seo";
import "../components/layout.css";
import Fonts from "../containers/ShowcasePage/Common/fonts";
const IndexPage = () => (
   <div>
       <Fonts/>
       <GlobalStyle />
       <HeaderMenu/>
       <Banner/>
       <main>
            <SEO 
                title="NextJS Templates | NextJS Landing Templates | Zircon-Next"
                description="NextJS Templates built with NextJS, Bootstrap V4 and Styled-Components by React Crystal."
            />
            <Demos/>
            <Features/>
            <KeyFeatures/>
            <Download/>
        </main>
       <Footer/>
   </div>

)

export default IndexPage;
