import React, { Component } from "react";
import {
	FeaturesSliderSection,
	SliderCol,
	SliderHover,
	SliderHoverText,
	SliderColWrapper,
	SliderWrapperHeading,
	NextPrev,
	PrevImg,
	NextImg,
	ImgButton,
	SliderImg,
} from "./featuresslider.style";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { AlwaysRoomSlider } from "../../../pagedata/Interior2";

class FeaturesSliderPage extends Component {
	constructor(props) {
		super(props);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
	}

	next() {
		this.slider.slickNext();
	}

	previous() {
		this.slider.slickPrev();
	}

	render() {
		const settings = {
			dots: false,
			arrows: true,
			infinite: true,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						dots: false,
						slidesToScroll: 1,
						infinite: true,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						dots: false,
						slidesToScroll: 1,
						infinite: true,
						initialSlide: 1,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						dots: false,
						infinite: true,
						slidesToScroll: 1,
					},
				},
			],
		};
		return (
			<FeaturesSliderSection id="featuresContainer">
				<SliderWrapperHeading>Always Room</SliderWrapperHeading>
				<Container>
					<Slider ref={(c) => (this.slider = c)} {...settings}>
						{AlwaysRoomSlider.SliderColWrapper.map((item, idx) => {
							return (
								<SliderColWrapper>
									<SliderCol>
										<SliderImg
											src={require("../../../assets/" + item.SliderImg)}
											alt=""
										/>
										<SliderHover>
											<SliderHoverText>{item.SliderHoverText}</SliderHoverText>
										</SliderHover>
									</SliderCol>
								</SliderColWrapper>
							);
						})}
					</Slider>
				</Container>
				<NextPrev>
					<ImgButton onClick={this.previous} aria-label="Prev Button">
						<PrevImg
							src={require("../../../assets/" + AlwaysRoomSlider.PrevImg)}
							alt=""
						/>
					</ImgButton>
					<ImgButton onClick={this.next} aria-label="Next Button">
						<NextImg
							src={require("../../../assets/" + AlwaysRoomSlider.NextImg)}
							alt=""
						/>
					</ImgButton>
				</NextPrev>
			</FeaturesSliderSection>
		);
	}
}

export default FeaturesSliderPage;
