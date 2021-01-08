import React from 'react';
import {BannerSection,
    BannerContents,
    BannerContentLeft,
    BannerContentRight,
    BannerBtn,
    BannerPara,
    BannerH3,
    BannerH3Line2,
    BannerImage
} from './banner.style'
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from '../../../pagedata/App';

const BannerPage = () => {
    return (
            <BannerSection id="homeContainer">
                <Container>
                        <BannerContents>
                            <BannerContentLeft>
                                    <div>
                                        <BannerH3>{Banner.BannerH3Line1}</BannerH3>
                                        <BannerH3Line2>{Banner.BannerH3Line2}</BannerH3Line2>
                                        <BannerPara>{Banner.BannerPara}</BannerPara>
                                        <BannerBtn href="#">{Banner.BannerBtn}</BannerBtn>
                                    </div>
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
    )
}

export default BannerPage;