import React from 'react';
import {BannerWrapper,
    BannerContents,
    BannerContentLeft,
    BannerContentRight,
    BannerBtn,
    BannerPara,
    BannerH3,
    BannerImageHolder
} from './banner.style'
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from '../../../pagedata/Corporate';

const BannerPage = () => {
    return (
        <BannerWrapper id="homeContainer">
            <Container>
                <BannerContents>
                    <BannerContentLeft>
                        <div>
                            <BannerH3>{Banner.BannerH3}</BannerH3>
                            <BannerPara>{Banner.BannerPara}</BannerPara>
                            <BannerBtn href="#">{Banner.BannerBtn}</BannerBtn>
                        </div>
                    </BannerContentLeft>

                    <BannerContentRight>
                            <BannerImageHolder 
                                src={require("../../../assets/"+Banner.BannerImage)} 
                                alt=""
                            />
                    </BannerContentRight>

                </BannerContents>
            </Container>
        </BannerWrapper>
    )
}

export default BannerPage;