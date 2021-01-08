import React from 'react';
import {BannerSection,
    BannerContents,
    BannerContentLeft,
    BannerBtn,
    BannerH3,
    BannerH4
} from './banner.style'
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from '../../../pagedata/Corporate2';
const BannerPage = () => {
    return (
        <BannerSection id="homeContainer">
            <Container>
                <BannerContents>
                    <BannerContentLeft>
                            <BannerH3>{Banner.BannerH3}</BannerH3>
                            <BannerH4>{Banner.BannerH4}</BannerH4>
                            <BannerBtn href="#">{Banner.BannerBtn}</BannerBtn>
                    </BannerContentLeft>
                </BannerContents>
            </Container>
        </BannerSection>
    );
}

export default BannerPage;