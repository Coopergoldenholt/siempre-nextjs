import React from 'react';
import {CommonBtn} from '../Common/common.style'
import {BannerSection,BannerWrapper,BannerLeft,BannerCustomContainer,BannerRight,BannerHeading,BannerPara,
    Slidercol,Caption,CaptionHeading,CaptionPara,SliderImg} from './banner.style';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Banner } from '../../../pagedata/Restaurant';
var settings = {
    dots: true,
    arrows:false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    appendDots: dots => (
        <div
            style={{
                textAlign:"left",
                position:"relative",
                bottom:"0px"
            }}
        >
            <ul style={{ 
                margin: "0px",
                position:"relative",
                lineHeight:"0px"
            }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div style={{paddingTop:10}}>
        <span
          style={{
            display:"inline-block",
            width: "20px",
            height:"3px",
            background:"#fff",
            borderRadius: "3px",
            opacity:0.6
          }}
        >
        </span>
        </div>
      ),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                dots: true,
                infinite: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                initialSlide: 1,
                infinite: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                dots: true,
                slidesToScroll: 1,
                initialSlide: 1,
                infinite: true
            }
        }
      ]
    };

const BannerPage = () => {
        return (
                <BannerSection id="homeContainer">
                    <BannerWrapper>
                        <BannerCustomContainer>
                            <BannerLeft>
                                <BannerHeading>{Banner.BannerHeading}</BannerHeading>
                                <BannerPara>{Banner.BannerPara}</BannerPara>
                                <CommonBtn background="#fff" buttonText={Banner.CommonBtnLabel} link="#">{Banner.CommonBtnLabel}</CommonBtn>
                            </BannerLeft>
                            <BannerRight>
                            <Slider {...settings}>
                            {
                                Banner.Slider.map((item,idx) => {
                                    return <Slidercol>
                                        <SliderImg 
                                            src={require("../../../assets/"+item.SlideImg)} 
                                            alt=""
                                        />

                                        <Caption>
                                            <CaptionHeading>
                                            {item.CaptionHeading}
                                            </CaptionHeading>
                                            <CaptionPara>
                                            {item.CaptionPara}
                                            </CaptionPara>
                                        </Caption>
                                    </Slidercol>
                                })
                            }
                            </Slider>
                            </BannerRight>
                        </BannerCustomContainer>
                    </BannerWrapper>
                </BannerSection>
            )
        }

export default BannerPage;

