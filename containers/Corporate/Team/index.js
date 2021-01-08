import React,{Component} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {TeamSlider,TeamSection,TeamSliderCol,TeamImgFigure,TeamImg,
    TeamDesc,TeamName,TeamDesignation,TeamSocial,FbIcon,TwitterIcon,LinkedinIcon,
    InstaIcon,TeamSliderDiv,NextPrev,ImgButton,PrevImg,NextImg} from './team.style';
import {SectionHeading} from '../Common/common.style';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Team } from '../../../pagedata/Corporate';
class TeamComponent extends Component{

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

        var settings = {
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 992,
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
            <TeamSection id="teamContainer">
                <Container>
                    <Row>
                        <Col md="12">
                            <SectionHeading>{Team.SectionHeading}</SectionHeading>
                        </Col>
                    </Row>

                </Container>
                <Container>
                        <TeamSlider>
                            <Slider ref={c => (this.slider = c)}  {...settings}>

                            {
                                Team.TeamSlider.map((item,idx) => {
                                return <TeamSliderCol>
                                    <TeamSliderDiv>
                                        <TeamImgFigure>
                                            <TeamImg 
                                                src={require("../../../assets/"+item.TeamSliderImg)} 
                                                alt=""
                                            />
                                        </TeamImgFigure>
                                        <TeamDesc>
                                            <TeamName>{item.TeamName}</TeamName>
                                            <TeamDesignation>{item.TeamDesignation}</TeamDesignation>
                                            <TeamSocial href="#" aria-label="Facebook Link">
                                                <FbIcon/>
                                            </TeamSocial>
                                            <TeamSocial href="#" aria-label="Twitter Link">
                                                <TwitterIcon/>
                                            </TeamSocial>
                                            <TeamSocial href="#" aria-label="LinkedIn Link">
                                                <LinkedinIcon/>
                                            </TeamSocial>
                                            <TeamSocial href="#" aria-label="Instagram Link">
                                                <InstaIcon/>
                                            </TeamSocial>
                                        </TeamDesc>
                                        </TeamSliderDiv>
                                </TeamSliderCol>
                                })
                            }
                            </Slider>
                        </TeamSlider>
                        <NextPrev>
                                <ImgButton onClick={this.previous} aria-label="Prev Button">
                                    <PrevImg src={require("../../../assets/"+Team.PrevImg)} alt=""/>
                                </ImgButton>
                                <ImgButton onClick={this.next} aria-label="Next Button">
                                    <NextImg src={require("../../../assets/"+Team.NextImg)} alt=""/>
                                </ImgButton>
                        </NextPrev>
                </Container>
            </TeamSection>
        );
    }
}
export default TeamComponent;