import React from "react";
import Banner from "../containers/Corporate/Banner";
import HeaderMenu from "../containers/Corporate/HeaderMenu";
import KeyServices from "../containers/Corporate/KeyServices";
import Portfolio from "../containers/Corporate/Portfolio";
import AboutSection from "../containers/Corporate/About";
import KeyFeatures from "../containers/Corporate/KeyFeatures";
import Contact from "../containers/Corporate/Contact";
import ClientsSection from "../containers/Corporate/Clients";
import NewsLetter from "../containers/Corporate/SubscribeLetter";
import Footer from "../containers/Corporate/Footer";
import Team from "../containers/Corporate/Team";
import Testimonials from "../containers/Corporate/Testimonials";
import GlobalStyle from "../containers/Corporate/Common/global-styles";
import "../components/layout.css";
import SEO from "../components/seo";
import Fonts from "../containers/Corporate/Common/fonts";

const Corporate = () => (
   <div>
       <Fonts/>
        <GlobalStyle />
        <HeaderMenu/>

        <main>
            <SEO 
                title="Corporate Landing Template | NextJS Templates | Zircon-Next"
                description="Zircon Corporate Landing Page Template from Reactrepo"
            />
            <Banner/>
            <KeyServices/>
            <AboutSection/>
            <Portfolio/>
            <KeyFeatures />
            <Team/>
            <Testimonials />
            <Contact />
            <ClientsSection />
            <NewsLetter />
        </main>

        <Footer/>
   </div>

)

export default Corporate;
