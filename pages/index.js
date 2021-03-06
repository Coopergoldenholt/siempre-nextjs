import React from "react";
import GlobalStyle from "../containers/Interior2/Common/global-styles";
import Banner from "../containers/Interior2/Banner";
import HeaderMenu from "../containers/Interior2/HeaderMenu";
import About from "../containers/Interior2/About";
import FeaturesSlider from "../containers/Interior2/FeaturesSlider";
import KeyServices from "../containers/Interior2/KeyServices";
import Gallery from "../containers/Interior2/Gallery";
import Testimonials from "../containers/Interior2/Testimonials";
import SubscribeLetter from "../containers/Interior2/SubscribeLetter";
import Contact from "../containers/Interior2/Contact";
import Footer from "../containers/Interior2/Footer";
import "../components/layout.css";
import SEO from "../components/seo";
import Fonts from "../containers/Interior2/Common/fonts";
const IndexPage = () => (
	<div>
		<Fonts />
		<GlobalStyle />
		<HeaderMenu />
		<main>
			<SEO
				title="Simepre| Utah Wedding Venue | Coming Soon"
				description="Siempre is the best up and coming event venue for all high class events. With gorgoues views and drop dead infastructure. Book your next event today!"
			/>
			<Banner />
			<About />
			<FeaturesSlider />
			<KeyServices />
			{/* <Gallery /> */}
			<Testimonials />
			{/* <SubscribeLetter /> */}
			<Contact />
		</main>
		<Footer />
	</div>
);

export default IndexPage;
