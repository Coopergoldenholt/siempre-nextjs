import React from 'react';
import {BannerWrapper,
    BannerContents,
    BannerContentLeft,
    BannerContentRight,
    BannerBtn,RightArrowYellow,
    BannerPara,RightArrow,
    BannerH3,BannerH4,
    BannerImage
} from './banner.style'
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from '../../../pagedata/App2';

const BannerPage = () => {
        return (
        <BannerWrapper id="homeContainer">
            <Container>
                <BannerContents>

                    <BannerContentRight>
                            <BannerImage src={require("../../../assets/"+Banner.BannerImage)} alt=""/>
                    </BannerContentRight>
                    <BannerContentLeft>
                            <BannerH3>{Banner.BannerH3}</BannerH3>
                            <BannerH4>{Banner.BannerH4}</BannerH4>
                            <BannerPara>{Banner.BannerPara}</BannerPara>
                            <BannerBtn href="#">{Banner.BannerBtn} 
                                <RightArrow src={require("../../../assets/"+Banner.RightArrow)} alt=""/>
                                <RightArrowYellow src={require("../../../assets/"+Banner.RightArrowYellow)} alt=""/>
                            </BannerBtn>
                    </BannerContentLeft>
                </BannerContents>
            </Container>
        </BannerWrapper>
    );
}

export default BannerPage;