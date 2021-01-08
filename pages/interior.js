import React from 'react'
import HeaderMenu from "../containers/Interior/HeaderMenu";
import Footer from "../containers/Interior/Footer";
import Banner from '../containers/Interior/Banner';
import Quality from '../containers/Interior/Quality';
import Features from '../containers/Interior/Features';
import KeyServices from '../containers/Interior/KeyServices';
import Gallery from '../containers/Interior/Gallery';
import Testimonials from '../containers/Interior/Testimonials';
import Contact from '../containers/Interior/Contact';
import GlobalStyle from "../containers/Interior/Common/global-styles";
import "../components/layout.css";
import SEO from "../components/seo";
import Fonts from "../containers/Interior/Common/fonts";
const Home = () => (
  <div>
      <Fonts/>
        <GlobalStyle />
       <HeaderMenu/>
       <main>
            <SEO 
                title="Interior Landing Template | NextJS Templates | Zircon-Next"
                description="Zircon Interior Landing Page Template from Reactrepo"
            />
            <Banner/>
            <Quality/>
            <Features/>
            <KeyServices/>
            <Gallery/>
            <Testimonials/>
            <Contact/>
        </main>
        <Footer/>
  </div>
)

export default Home
