import React from "react";
import Banner from "../containers/App2/Banner";
import HeaderMenu from "../containers/App2/HeaderMenu";
import Footer from "../containers/App2/Footer";
import Features from "../containers/App2/Features";
import AppFeatures from "../containers/App2/AppFeatures";
import Pricing from "../containers/App2/Pricing";
import Services from "../containers/App2/Services";
import Download from '../containers/App2/Download';
import Faq from '../containers/App2/Faq';
import Contact from "../containers/App2/Contact";
import GlobalStyle from "../containers/App2/Common/global-styles";
import "../components/layout.css";
import SEO from "../components/seo";
import Fonts from "../containers/App2/Common/fonts";

const App = () => (
   <div>
       <Fonts/>
       <GlobalStyle />
       <HeaderMenu/>
       <main>
            <SEO 
                title="App 2 Landing Template | NextJS Templates | Zircon-Next"
                description="Zircon App 2 Landing Page Template from Reactrepo"
            />
            <Banner/>
            <Features/>
            <AppFeatures/>
            <Services/>
            <Pricing/>
            <Download/>
            <Faq/>
            <Contact/>
        </main>
       <Footer/>
   </div>

)

export default App;
