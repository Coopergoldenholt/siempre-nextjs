import React from "react";
import HeaderMenu from "../containers/Corporate2/HeaderMenu";
import Banner from "../containers/Corporate2/Banner";
import Footer from "../containers/Corporate2/Footer";
import KeyServices from "../containers/Corporate2/KeyServices";
import About from "../containers/Corporate2/About";
import Contact from "../containers/Corporate2/Contact";
import Services from "../containers/Corporate2/Services";
import Team from "../containers/Corporate2/Team";
import Portfolio from "../containers/Corporate2/Portfolio";
import SubscribeLetter from "../containers/Corporate2/SubscribeLetter";
import GlobalStyle from "../containers/Corporate2/Common/global-styles";
import Testimonials from "../containers/Corporate2/Testimonials";
import "../components/layout.css";
import SEO from "../components/seo";
import Fonts from "../containers/Corporate2/Common/fonts";
const Corporate = () => (
   <div>
       <Fonts/>
       <GlobalStyle />
       <HeaderMenu/>
       <main>
       <SEO 
                title="Corporate 2 Landing Template | NextJS Templates | Zircon-Next"
                description="Zircon Corporate 2 Landing Page Template from Reactrepo"
            />
            <Banner/>
            <KeyServices/>
            <About/>
            <Services/>
            <Portfolio/>
            <Team/>
            <Testimonials/>
            <SubscribeLetter/>
            <Contact/>
        </main>
       <Footer/>
   </div>

)

export default Corporate;
