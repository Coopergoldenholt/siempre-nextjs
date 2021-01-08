import React from 'react';
import {TestimonialsSection,TestimonialWrapper,TestimonialsLeftCol,TestimonialHeading,ProfilePic,
    TestimonialPara,TestimonialsRightCol,CardOuterWrapper,Card,CardProfileLayout,
    ProfilePicLayout,ProfileNameLayout,ProfileName,Testimonial} from './testimonials.style';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Testimonials } from '../../../pagedata/Corporate';
var settings = {
    dots: true,
    arrows:false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.4,
    slidesToScroll: 1,
    appendDots: dots => (
        <div
          style={{
            textAlign:"left",
            position: "relative",
            bottom:0
          }}
        >
          <ul style={{ margin: "0px",lineHeight:"0px"}}> {dots} </ul>
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
            breakpoint: 900,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
    ]
};

const Team = () => {
    return (
        
        <TestimonialsSection id="testimonialsContainer">
            <TestimonialWrapper>

                <TestimonialsLeftCol>
                        <TestimonialHeading>{Testimonials.TestimonialHeading}</TestimonialHeading>
                        <TestimonialPara>{Testimonials.TestimonialPara}</TestimonialPara>
                </TestimonialsLeftCol>

                <TestimonialsRightCol>
                        <Slider {...settings}>
                        {
                            Testimonials.CardProfileLayout.map((item,idx) => {
                                return <CardOuterWrapper>
                                    <Card>
                                        <CardProfileLayout>
                                            <ProfilePicLayout>
                                                <ProfilePic 
                                                src={require("../../../assets/"+item.ProfilePic)} 
                                                alt=""
                                            />
                                            </ProfilePicLayout>
                                            <ProfileNameLayout>
                                                <ProfileName>
                                                    {item.ProfileName}
                                                </ProfileName>
                                            </ProfileNameLayout>
                                        </CardProfileLayout>
                                        <Testimonial>
                                        {item.Testimonial}
                                        </Testimonial>
                                    </Card>
                                </CardOuterWrapper>
                                })
                            }
                        </Slider>
                </TestimonialsRightCol>
            </TestimonialWrapper>
        </TestimonialsSection>
        
    );
}

export default Team;