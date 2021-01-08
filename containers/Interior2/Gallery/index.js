import React,{Component} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import  {PorfolioSlider,GallerySection,GallerySliderCol,GallerySliderImg,
    GalleryInnerContainer,PrevImg,NextImg,NextPrev,ImgButton} from './gallery.style';
import {SectionHeading} from '../Common/common.style';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Gallery } from '../../../pagedata/Interior2';

class GalleryPage extends Component{

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
            infinite: true,
            arrows:true,
            slidesToShow: 3,
            rows: 2,
            slidesPerRow: 1,
            speed: 1000,
            responsive: [
               
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
                <GallerySection id="galleryContainer">
                    <Container>
                        <Row>
                            <Col md="12">
                                    <SectionHeading>{Gallery.SectionHeading}</SectionHeading>
                            </Col>
                        </Row>

                    </Container>
                    <Container>
                        <PorfolioSlider>
                            <Slider ref={c => (this.slider = c)} {...settings}>
                            {
                                Gallery.Slider.map((item,idx) => {
                                return <GallerySliderCol>
                                        <GalleryInnerContainer>
                                            <GallerySliderImg 
                                                src={require("../../../assets/"+item.GallerySliderImg)} 
                                                alt=""
                                            />
                                        </GalleryInnerContainer>
                                    </GallerySliderCol>
                                })
                            }
                            </Slider>
                        </PorfolioSlider>
                        <NextPrev>
                            <ImgButton onClick={this.previous} aria-label="Prev Button">
                                <PrevImg src={require("../../../assets/"+Gallery.PrevImg)} alt=""/>
                            </ImgButton>
                            <ImgButton onClick={this.next} aria-label="Next Button">
                                <NextImg src={require("../../../assets/"+Gallery.NextImg)} alt=""/>
                            </ImgButton>
                        </NextPrev>
                    </Container>
                </GallerySection>
        );
    }
}
export default GalleryPage;

