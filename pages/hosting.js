import React from "react";
import Banner from "../containers/Hosting/Banner";
import HeaderMenu from "../containers/Hosting/HeaderMenu";
import Footer from "../containers/Hosting/Footer";
import FeatureCards from "../containers/Hosting/FeatureCards";
import KeyFeatures from "../containers/Hosting/KeyFeatures";
import Pricing from "../containers/Hosting/Pricing";
import Contact from "../containers/Hosting/Contact";
import About from "../containers/Hosting/About";
import Faq from "../containers/Hosting/Faq";
import GlobalStyle from "../containers/Hosting/Common/global-styles";
import "../components/layout.css";
import SEO from "../components/seo";
import Fonts from "../containers/Hosting/Common/fonts";

const IndexPage = () => (
   <div>
       <Fonts/>
       <GlobalStyle />
       <HeaderMenu/>
       <main>
            <SEO 
                title="Hosting Landing Template | NextJS Templates | Zircon-Next"
                description="Zircon Hosting Landing Page Template from Reactrepo"
            />
            <Banner/>
            <FeatureCards/>
            <About/>
            <KeyFeatures/>
            <Pricing/>
            <Faq/>
            <Contact/>
        </main>
       <Footer/>
   </div>

)

export default IndexPage;
