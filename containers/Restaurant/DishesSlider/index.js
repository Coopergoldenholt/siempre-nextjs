import React,{Component} from 'react';
import {DishSliderSection,SliderCustomContainer,SliderCol,SliderHover,SliderHoverText,SliderColWrapper,PrevImg,NextImg,
    SliderWrapper,SliderWrapperHeading,NextPrev,ImgButton,SliderImg,SliderHoverIcon} from './dishslider.style'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { DishesSlider } from '../../../pagedata/Restaurant';


class DishSliderPage extends Component{
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

    render(){
        const settings = {
            dots: false,
            arrows:true,
            infinite: false,
            speed: 500,
            slidesToShow: 4.2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        dots: false,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        dots: false,
                        slidesToScroll: 1,
                        infinite: true,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        dots: false,
                        infinite: true,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return(
            <DishSliderSection>
                <SliderCustomContainer>
                    <SliderWrapperHeading>{DishesSlider.SliderWrapperHeading}</SliderWrapperHeading>
            
                    <SliderWrapper>
                        <Slider ref={c => (this.slider = c)} {...settings}>
                        {
                            DishesSlider.SliderColWrapper.map((item,idx) => {
                            return <SliderColWrapper>
                                <SliderCol>
                                    <SliderImg 
                                        src={require("../../../assets/"+item.SliderImg)} 
                                        alt=""
                                    />
                                    <SliderHover>
                                        <SliderHoverText>
                                        {item.SliderHoverText}
                                        </SliderHoverText>
                                        <SliderHoverIcon 
                                            src={require("../../../assets/"+item.SliderHoverIcon)} 
                                            alt=""
                                        />
                                    </SliderHover>
                                </SliderCol>
                            </SliderColWrapper>
                            })
                        }
                        </Slider>
                    </SliderWrapper>
                    <NextPrev>
                        <ImgButton onClick={this.previous} aria-label="Prev Button">
                            <PrevImg 
                                src={require("../../../assets/"+DishesSlider.PrevImg)} 
                                alt=""
                            />
                        </ImgButton>
                        <ImgButton onClick={this.next} aria-label="Next Button">
                            <NextImg 
                                src={require("../../../assets/"+DishesSlider.NextImg)} 
                                alt=""
                            />
                        </ImgButton>
                    </NextPrev>
                </SliderCustomContainer>
            </DishSliderSection>
        )
    }
}
export default DishSliderPage;