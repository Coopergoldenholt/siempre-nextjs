import React from "react";
import Banner from "../containers/Saas2/Banner";
import HeaderMenu from "../containers/Saas2/HeaderMenu";
import ProductOverview from "../containers/Saas2/ProductOverview";
import OurProduct from "../containers/Saas2/OurProduct";
import Performance from "../containers/Saas2/Performance";
import Pricing from "../containers/Saas2/Pricing";
import Footer from "../containers/Saas2/Footer";
import Faq from "../containers/Saas2/Faq";
import Testimonials from "../containers/Saas2/Testimonials";
import GlobalStyle from "../containers/Saas2/Common/global-styles";
import "../components/layout.css";
import SEO from "../components/seo";
import Fonts from "../containers/Saas2/Common/fonts";
const IndexPage = () => (
   <div>
       <Fonts/>
       <GlobalStyle />
       <HeaderMenu/>
       <main>
            <SEO 
                title="Saas 2 Landing Template | NextJS Templates | Zircon-Next"
                description="Zircon Saas 2 Landing Page Template from Reactrepo"
            />
            <Banner/>
            <ProductOverview/>
            <OurProduct/>
            <Performance/>
            <Faq/>
            <Pricing/>
            <Testimonials/>
        </main>
       <Footer/>
   </div>

)

export default IndexPage;
