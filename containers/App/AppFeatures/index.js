import React from 'react';
import {AppFeaturesSection,AppFeaturesHeadingWrapper,
    AppFeaturesHeading,AppFeaturesSubHeading,AppFeaturesContent,AppFeaturesWrapper,
    AppFeaturesText,AppFeaturesImgHolder,AppFeaturesBoldText,AppFeaturesLeftIcon,
    AppFeaturesImg,AppFeaturesCenter,CenterCol,AppFeaturesTextNormal,AppFeaturesMobile
} from './appfeatures.style';
import {Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppFeatures } from '../../../pagedata/App';
const AppFeaturesPage = () => {
    return (
        <AppFeaturesSection id="featuresContainer">
            <Container>
                <Row>
                    <Col md="12">
                        <AppFeaturesHeadingWrapper>
                            <AppFeaturesHeading>{AppFeatures.AppFeaturesHeading}</AppFeaturesHeading>
                            <AppFeaturesSubHeading>{AppFeatures.AppFeaturesSubHeading}</AppFeaturesSubHeading>
                        </AppFeaturesHeadingWrapper>
                    </Col>
                </Row>

                <AppFeaturesContent>
                    <Col md="6" lg="4">
                    {
                        AppFeatures.AppFeaturesContent1.map((item,idx) => {
                        return <AppFeaturesWrapper bottomMargin = {idx === 2 ? "0px":"30px"}>
                                <AppFeaturesLeftIcon>
                                    <AppFeaturesImgHolder>
                                        <AppFeaturesImg src={require("../../../assets/"+item.AppFeaturesImg)} alt=""/>
                                    </AppFeaturesImgHolder>
                                </AppFeaturesLeftIcon>
                                <AppFeaturesText>
                                    <AppFeaturesBoldText>{item.AppFeaturesLeftBold}</AppFeaturesBoldText> 
                                    <AppFeaturesTextNormal>{item.text}</AppFeaturesTextNormal>
                                </AppFeaturesText>
                                
                            </AppFeaturesWrapper>
                        })
                    }
                    </Col>

                    <CenterCol md="0" lg="4">
                        <AppFeaturesCenter>
                            <AppFeaturesMobile 
                                src={require("../../../assets/"+AppFeatures.AppFeaturesContent2.AppFeaturesMobile)} 
                                alt=""
                            />
                        </AppFeaturesCenter>
                    </CenterCol>

                    <Col md="6" lg="4">
                    {
                        AppFeatures.AppFeaturesContent3.map((item,idx) => {
                            return <AppFeaturesWrapper bottomMargin = {idx === 2 ? "0px":"30px"}>
                                <AppFeaturesLeftIcon>
                                    <AppFeaturesImgHolder>
                                        <AppFeaturesImg src={require("../../../assets/"+item.AppFeaturesImg)} alt=""/>
                                    </AppFeaturesImgHolder>
                                </AppFeaturesLeftIcon>
                                <AppFeaturesText>
                                    <AppFeaturesBoldText>{item.AppFeaturesLeftBold}</AppFeaturesBoldText>
                                    <AppFeaturesTextNormal>{item.text}</AppFeaturesTextNormal>
                                </AppFeaturesText>
                            </AppFeaturesWrapper>
                        })
                    }
                    </Col>
                </AppFeaturesContent>
            </Container>
        </AppFeaturesSection>
    );
}

export default AppFeaturesPage;