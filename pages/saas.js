import React from "react";
import Banner from "../containers/Saas/Banner";
import HeaderMenu from "../containers/Saas/HeaderMenu";
import Footer from "../containers/Saas/Footer";
import Features from "../containers/Saas/Features";
import KeyFeatures from "../containers/Saas/KeyFeatures";
import OurProduct from "../containers/Saas/OurProduct";
import Performance from '../containers/Saas/Performance';
import Pricing from '../containers/Saas/Pricing';
import Faq from '../containers/Saas/Faq';
import Testimonials from '../containers/Saas/Testimonials';
import GlobalStyle from "../containers/Saas/Common/global-styles";
import "../components/layout.css";
import SEO from "../components/seo";
import Fonts from "../containers/Saas/Common/fonts";

const IndexPage = () => (
   <div>
       <Fonts/>
        <GlobalStyle />
        <HeaderMenu/>

        <main>
            <SEO 
                title="Saas Landing Template | NextJS Templates | Zircon-Next"
                description="Zircon Saas Landing Page Template from Reactrepo"
            />
            <Banner/>
            <Features/>
            <KeyFeatures/>
            <OurProduct/>
            <Performance/>
            <Pricing/>
            <Faq/>
            <Testimonials/>
        </main>

        <Footer/>
   </div>

)

export default IndexPage;
