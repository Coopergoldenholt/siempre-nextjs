import React, { Component } from "react";
import {
	BannerSection,
	BannerWrapper,
	BannerContents,
	BannerContentLeft,
	BannerContentRight,
	BannerBtn,
	BannerPara,
	RightArrowIcon,
	LeftArrowIcon,
	BannerH3,
	BannerH4,
	NextPrev,
	BannerImage,
} from "./banner.style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./banner.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "../../../pagedata/Interior2";

class BannerPage extends Component {
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
		var settings = {
			arrows: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						initialSlide: 1,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						initialSlide: 1,
					},
				},
			],
		};

		return (
			<BannerSection id="homeContainer">
				<BannerWrapper>
					<BannerContents>
						<BannerContentLeft>
							<div>
								<BannerH3>Siempre</BannerH3>
								<BannerH4>Always & Forever</BannerH4>
								<BannerPara>
									Siempre is Utah's newest and most stunning wedding and event
									venue that you've always dreamed of. Nestled perfectly on the
									hillside of the Wasatch Mountains in Draper, just 5 minutes
									from I-15, Siempre has panoramic views that will take your
									breath away as you say... I Do!
								</BannerPara>

								<BannerBtn href="#">{Banner.BannerBtn}</BannerBtn>
							</div>
						</BannerContentLeft>

						<BannerContentRight>
							<Slider ref={(c) => (this.slider = c)} {...settings}>
								<BannerImage
									src={require("../../../assets/other-photos/WeddingPhoto.jpeg")}
									// imgStyle={{
									// 	filter: "brightness(45%)",
									// }}
									className="carousel-image"
								/>
								<BannerImage
									src={require("../../../assets/other-photos/WeddingPhoto2.jpeg")}
									className="carousel-image"
								/>
								<BannerImage
									src={require("../../../assets/other-photos/WeddingPhoto3.jpg")}
									className="carousel-image"
								/>
							</Slider>
							<NextPrev>
								<LeftArrowIcon
									onClick={this.previous}
									src={require("../../../assets/" + Banner.PrevImg)}
								/>
								<RightArrowIcon
									onClick={this.next}
									src={require("../../../assets/" + Banner.NextImg)}
								/>
							</NextPrev>
						</BannerContentRight>
					</BannerContents>
				</BannerWrapper>
			</BannerSection>
		);
	}
}

export default BannerPage;
