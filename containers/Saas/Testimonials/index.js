import React,{Component} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {TestimonialsSection,TestimonialsContainer,CardOuterWrapper,Card,CardProfileLayout,
    ProfilePicLayout,ProfileNameLayout,ProfileName,Designation,LeftQuote,ProfilePic,
    Testimonial,ImgButton,PrevImg,NextImg,NextPrev,HeadingWrapper} from './testimonials.style';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {SectionHeading,SectionSubHeading} from "../Common/common.style";
import { Testimonials } from '../../../pagedata/Saas';
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
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                      slidesToShow: 2,
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
                            <HeadingWrapper>
                                <SectionHeading>{Testimonials.TestimonialHeading}</SectionHeading>
                                <SectionSubHeading>{Testimonials.TestimonialSubHeading}</SectionSubHeading>
                            </HeadingWrapper>
                        </Col>
                    </Row>
                </Container>
                    <TestimonialsContainer>
                        <Slider ref={c => (this.slider = c)} {...settings}>
                        {
                                Testimonials.CardProfileLayout.map((item,idx) => {
                                return <CardOuterWrapper>
                                <Card>
                                    <LeftQuote/>
                                    <Testimonial>
                                        {item.Testimonial}
                                    </Testimonial>
                                </Card>
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
                            </CardOuterWrapper>
                                })
                            }
                        </Slider>
                    </TestimonialsContainer>
                <NextPrev>
                    <ImgButton onClick={this.previous} aria-label="Prev Button">
                        <PrevImg src={require("../../../assets/"+Testimonials.PrevImg)} alt=""/>
                    </ImgButton>
                    <ImgButton onClick={this.next} aria-label="Next Button">
                        <NextImg src={require("../../../assets/"+Testimonials.NextImg)} alt=""/>
                    </ImgButton>
                </NextPrev>
            </TestimonialsSection>
        );
    }
}

export default TestimonialsPage;