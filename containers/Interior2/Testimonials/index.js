import React,{Component} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import {SectionHeadingCustom,TestimonialsSection,TestimonialsContainer,CardOuterWrapper,CardProfileLayout,
    QuoteImg,ProfilePicLayout,ProfileNameLayout,ProfileName,Designation,ProfileLayoutWrapper,ProfilePic,
    SliderWrapper,TestimonialHeading,Testimonial,PrevImg,NextImg,NextPrev} from './testimonials.style';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Testimonials } from '../../../pagedata/Interior2';

class TestimonialsPage extends Component{

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
            arrows:false,
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
        
        return(
            <TestimonialsSection id="testimonialsContainer">
                <Container>
                    <Row>
                        <Col md="12">
                                <SectionHeadingCustom>{Testimonials.TestimonialHeading}</SectionHeadingCustom>
                        </Col>
                    </Row>
                </Container>

                    <TestimonialsContainer>
                        <SliderWrapper>
                            {/* <QuoteImg src={require("../../../assets/"+Testimonials.QuoteImg)} alt=""/> */}
                            <Slider ref={c => (this.slider = c)} {...settings}>
                            {
                                Testimonials.CardProfileLayout.map((item,idx) => {
                                    return <CardOuterWrapper>
                                        <TestimonialHeading>
                                            {item.TestimonailHeading}
                                        </TestimonialHeading>
                                        <Testimonial>
                                            {item.Testimonial}
                                        </Testimonial>
                                        <ProfileLayoutWrapper>
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
                                                <Designation>
                                                    {item.Designation}
                                                </Designation>
                                            </ProfileNameLayout>
                                        </CardProfileLayout>
                                        </ProfileLayoutWrapper>
                                    </CardOuterWrapper>
                                })
                            }
                            </Slider>
                            <NextPrev>
                                <button onClick={this.previous} aria-label="Prev Button">
                                    <PrevImg src={require("../../../assets/"+Testimonials.PrevImg)} alt=""/>
                                </button>
                                <button onClick={this.next} aria-label="Next Button">
                                    <NextImg src={require("../../../assets/"+Testimonials.NextImg)} alt=""/>
                                </button>
                            </NextPrev>
                        </SliderWrapper>
                    </TestimonialsContainer>
                
            </TestimonialsSection>
        );
    }
}

export default TestimonialsPage;
