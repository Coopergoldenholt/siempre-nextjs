import React from 'react';
import {BannerSection,DownArrow,
    BannerContents,ArrowCol,
    BannerContentLeft,
    BannerBtn,
    BannerH3,
} from './banner.style'
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from '../../../pagedata/Interior';


const BannerPage = () => {
    return (
        <BannerSection id="homeContainer">
            <Container>
                <BannerContents>
                    <BannerContentLeft>
                        <BannerH3>{Banner.BannerH3}</BannerH3>
                        <BannerBtn href="#">{Banner.BannerBtn}</BannerBtn>
                    </BannerContentLeft>
                    <ArrowCol>
                        <DownArrow/>
                    </ArrowCol>
                </BannerContents>
            </Container>
        </BannerSection>
    );
}

export default BannerPage;