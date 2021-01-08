import React from "react";
import Banner from "../containers/Restaurant/Banner";
import HeaderMenu from "../containers/Restaurant/HeaderMenu";
import About from "../containers/Restaurant/About";
import About2 from "../containers/Restaurant/About2";
import Video from "../containers/Restaurant/Video";
import FeaturedItems from "../containers/Restaurant/FeaturedItems";
import BookTable from "../containers/Restaurant/Booktable";
import NewsLetter from "../containers/Restaurant/SubscribeLetter";
import Footer from "../containers/Restaurant/Footer";
import Faq from "../containers/Restaurant/Faq";
import GlobalStyle from "../containers/Restaurant/Common/global-styles"
import DishSlider from "../containers/Restaurant/DishesSlider";
import "../components/layout.css";
import SEO from "../components/seo";
import Fonts from "../containers/Restaurant/Common/fonts";

const IndexPage = () => (
   <div>
       <Fonts/>
       <GlobalStyle />
       <HeaderMenu/>
       <main>
            <SEO 
                title="Restaurant Landing Template | NextJS Templates | Zircon-Next"
                description="Reactrepo Restaurant Landing Page Template from Reactrepo"
            />
            <Banner/>
            <About/>
            <About2/>
            <Video/>
            <FeaturedItems/>
            <DishSlider/>
            <BookTable/>
            <Faq/>
            <NewsLetter/>
        </main>
       <Footer/>
   </div>

)

export default IndexPage;
