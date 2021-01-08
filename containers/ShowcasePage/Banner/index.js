import React from 'react';
import {BannerWrapper,BannerCol,BannerHeading,BannerBtn,
    BannerBtnsWrapper,BannerSubHeading,BannerBtnDemos} from './banner.style'
import {Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from '../../../pagedata/Showcase';
const BannerPage = () => {
    return (
        <BannerWrapper id="homeContainer">
            <Container>
                <Row>
                    <Col md="12">
                        <BannerCol>
                                <BannerHeading>{Banner.BannerHeading}</BannerHeading>
                                <BannerSubHeading>{Banner.BannerSubHeading}</BannerSubHeading>
                                <BannerBtnsWrapper>
                                    <BannerBtn target="_blank" href={Banner.BannerBtnHref}>{Banner.BannerBtn}</BannerBtn>
                                    {/* <BannerBtnDemos href="#">{Banner.BannerBtnDemos}</BannerBtnDemos> */}
                                </BannerBtnsWrapper>
                        </BannerCol>
                    </Col>
                </Row>
            </Container>
        </BannerWrapper>
    );
}

export default BannerPage;