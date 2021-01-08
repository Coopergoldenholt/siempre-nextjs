import React from "react";
import { Container, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { About } from "../../../pagedata/Interior2";

import {
	AboutSection,
	AboutLeft,
	AboutLeftImage,
	AboutRight,
	AboutHeading,
	AboutDesc,
	AboutBtn,
	AboutRow,
} from "./about.style";

const AboutPage = () => {
	return (
		<AboutSection id="aboutContainer">
			<Container>
				<AboutRow>
					<Col md="6">
						<AboutLeft>
							<AboutLeftImage
								src={require("../../../assets/other-photos/fairwayPicTwo.jpg")}
								alt=""
							/>
						</AboutLeft>
					</Col>
					<Col md="6">
						<AboutRight>
							<AboutHeading>Inspiration</AboutHeading>
							<AboutDesc>
								Siempre (syehm-preh) - meaning “Always”, “Forever”
								<p>
									Welcome to Siempre - Utah’s most elegant and prestigious
									wedding destination. Nestled in the foothills at the south end
									of the Salt Lake valley, Siempre will be where fairytale
									weddings become reality. Breathtaking views and brilliant
									sunsets create the backdrop for the perfect venue in the
									perfect location. Inspired by the vistas at Pelican Hills, the
									“Siempre Rotunda” will whisper, if a single photo is worth a
									thousand words - Siempre will inspire a million memories.
								</p>
							</AboutDesc>
							<AboutDesc></AboutDesc>
							<AboutBtn href="#contactContainer">{About.AboutBtn}</AboutBtn>
						</AboutRight>
					</Col>
				</AboutRow>
			</Container>
		</AboutSection>
	);
};

export default AboutPage;
