import React from 'react';
import {BannerSection,
    BannerContents,
    BannerContentLeft,
    BannerContentRight,
    BannerBtn,
    BannerPara,BannerBtnsWrapper,
    BannerH3,
    BannerH4,
    BannerImage
} from './banner.style'
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from '../../../pagedata/Hosting';
const BannerPage = () => {
    return (
        <BannerSection id="homeContainer">
            <Container>
                <BannerContents>
                    <BannerContentLeft>
                            <BannerH4>{Banner.BannerH4}</BannerH4>
                            <BannerH3>{Banner.BannerH3}</BannerH3>
                            <BannerPara>{Banner.BannerPara}</BannerPara>
                            <BannerBtnsWrapper>
                                <BannerBtn href="#">{Banner.BannerBtn}</BannerBtn>
                            </BannerBtnsWrapper>
                    </BannerContentLeft>


                    <BannerContentRight>
                            <BannerImage 
                                src={require("../../../assets/"+Banner.BannerImage)} 
                                alt=""
                            />
                    </BannerContentRight>
                    
                </BannerContents>
            </Container>
        </BannerSection>
    );
}

export default BannerPage;