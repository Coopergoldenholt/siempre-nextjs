import React from 'react';
import {AppFeaturesSectionWrapper,AppFeaturesHeadingWrapper,AppFeaturesMobile,
    AppFeaturesHeading,AppFeaturesSubHeading,AppFeaturesInner,AppFeaturesWrapper,AppFeaturesText,
    AppFeaturesBold,AppFeaturesLeftIcon,AppFeaturesImg,AppFeaturesCenter,CenterCol,AppFeaturesTextNormal
} from './appfeatures.style';
import {Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppFeatures } from '../../../pagedata/App2';

const AppFeaturesPage = () => {
        return (
        <AppFeaturesSectionWrapper>
            <Container>
                <Row>
                    <Col md="12">
                            <AppFeaturesHeadingWrapper>
                                <AppFeaturesHeading>{AppFeatures.AppFeaturesHeading}</AppFeaturesHeading>
                                <AppFeaturesSubHeading>{AppFeatures.AppFeaturesSubHeading}</AppFeaturesSubHeading>
                            </AppFeaturesHeadingWrapper>
                    </Col>
                </Row>

                <AppFeaturesInner>
                    <Col lg="4" md="6">
                    {
                        AppFeatures.AppFeaturesInner1.map((item,idx) => {
                        return <AppFeaturesWrapper bottomMargin = {idx === 2 ? "0px":"30px"}>
                            <AppFeaturesLeftIcon>
                                    <AppFeaturesImg src={require("../../../assets/"+item.AppFeaturesImg)} alt=""/>
                            </AppFeaturesLeftIcon>
                            <AppFeaturesText  paddingLeft={"0px"}>
                                <AppFeaturesBold>{item.AppFeaturesLeftBold}</AppFeaturesBold> 
                                <AppFeaturesTextNormal>{item.text}</AppFeaturesTextNormal>
                            </AppFeaturesText>
                        </AppFeaturesWrapper>
                        })
                    }
                    </Col>

                    <CenterCol lg="4">
                        <AppFeaturesCenter>
                            <AppFeaturesMobile 
                                src={require("../../../assets/"+AppFeatures.AppFeaturesInner2.AppFeaturesMobile)} 
                                alt=""
                            />
                        </AppFeaturesCenter>
                    </CenterCol>
                    
                    <Col lg="4" md="6">
                    {
                        AppFeatures.AppFeaturesInner3.map((item,idx) => {
                        return <AppFeaturesWrapper bottomMargin = {idx === 2 ? "0px":"30px"}>
                            <AppFeaturesLeftIcon>
                                    <AppFeaturesImg src={require("../../../assets/"+item.AppFeaturesImg)} alt=""/>
                            </AppFeaturesLeftIcon>
                            <AppFeaturesText paddingLeft={"10px"}>
                                    <AppFeaturesBold>{item.AppFeaturesLeftBold}</AppFeaturesBold> 
                                    <AppFeaturesTextNormal>{item.text}</AppFeaturesTextNormal>
                            </AppFeaturesText>
                            </AppFeaturesWrapper>
                        })
                    }
                    </Col>
                </AppFeaturesInner>
            </Container>
        </AppFeaturesSectionWrapper>
    );
}

export default AppFeaturesPage;