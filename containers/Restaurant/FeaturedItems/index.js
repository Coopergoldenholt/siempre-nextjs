import React from 'react';
import {FeaturesSection,FeaturesHeadingWrapper,FeaturesListWrapper,FeaturesLeftImg,
    FeaturesRightCol,FeaturesContent,FeaturesContentTitle,FeaturesContentPara,FeaturesContentPrice} 
    from './featuredItems.style';
import {SectionHeading} from '../Common/common.style'
import {Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Features } from '../../../pagedata/Restaurant';
const FeaturesPage =()=>{
   return (
            <FeaturesSection id="featuresContainer">
                <Container>
                    <Row>
                        <Col md="12">
                            <FeaturesHeadingWrapper>
                                <SectionHeading>{Features.SectionHeading}</SectionHeading>
                            </FeaturesHeadingWrapper>
                        </Col>
                    </Row>

                    <FeaturesListWrapper>
                        <Row>
                        {
                            Features.FeaturesListWrapper.map((item,idx) => {
                            return <Col md="12" lg="6">
                                <FeaturesRightCol>
                                    <FeaturesLeftImg 
                                        src={require("../../../assets/"+item.FeaturesLeftImg)} 
                                        alt=""
                                    />
                                    <FeaturesContent>
                                        <FeaturesContentTitle>
                                            {item.FeaturesContentTitle}
                                        </FeaturesContentTitle>
                                        <FeaturesContentPara>
                                            {item.FeaturesContentPara}
                                        </FeaturesContentPara>
                                        <FeaturesContentPrice>
                                            {item.FeaturesContentPrice}
                                        </FeaturesContentPrice>
                                    </FeaturesContent>
                                </FeaturesRightCol>
                            </Col>
                            })
                        }
                        </Row>
                    </FeaturesListWrapper>
                </Container>
            </FeaturesSection>
        )
    }
export default FeaturesPage;