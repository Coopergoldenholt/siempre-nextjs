import React,{Component} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import  {PorfolioSlider,PortfolioSection,PorfolioSliderCol,PortfolioHover,PortfolioHoverHeading,PortfolioHoverPara,
    PortfolioInnerContainer,PrevImg,NextImg,NextPrev,ImgButton,PorfolioSliderImg} from './portfolio.style';
import {SectionHeading} from '../Common/common.style';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Portfolio } from '../../../pagedata/Corporate2';

class PortfolioPage extends Component{

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
            className: "center-portfolio",
            centerMode: false,
            infinite: true,
            arrows:false,
            centerPadding:"0px",
            slidesToShow: 2,
            speed: 1000,
            responsive: [
               
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                  }
                }
            ]
        };

        return(
                <PortfolioSection id="portfolioContainer">
                    <Container>
                        <Row>
                            <Col md="12">
                                <SectionHeading>{Portfolio.SectionHeading}</SectionHeading>
                            </Col>
                        </Row>

                    </Container>
                    <Container>
                        <PorfolioSlider>
                            <Slider ref={c => (this.slider = c)} {...settings}>
                            {
                                Portfolio.PorfolioSlider.map((item,idx) => {
                                return  <PorfolioSliderCol>
                                                <PortfolioInnerContainer>
                                                    <PorfolioSliderImg 
                                                        src={require("../../../assets/"+item.PorfolioSliderImg)} 
                                                        alt=""
                                                    />
                                                    <PortfolioHover>
                                                        <PortfolioHoverHeading>
                                                        {item.PorfolioSliderTitle}
                                                        </PortfolioHoverHeading>
                                                        <PortfolioHoverPara>
                                                        {item.PorfolioSliderHoverText}
                                                        </PortfolioHoverPara>
                                                    </PortfolioHover>
                                                </PortfolioInnerContainer>
                                            </PorfolioSliderCol>
                                })
                            }
                        </Slider>
                        </PorfolioSlider>
                        <NextPrev>
                            <ImgButton onClick={this.previous} aria-label="Prev Button">
                                <PrevImg src={require("../../../assets/"+Portfolio.PrevImg)} alt=""/>
                            </ImgButton>
                            <ImgButton onClick={this.next} aria-label="Next Button">
                                <NextImg src={require("../../../assets/"+Portfolio.NextImg)} alt=""/>
                            </ImgButton>
                        </NextPrev>
                    </Container>
                </PortfolioSection>
        );
    }
}

export default PortfolioPage;