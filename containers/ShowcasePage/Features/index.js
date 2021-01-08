import React from "react";
import {FeaturesWrapper,FeatureCol,FeatureTxtCol,FeatureHeading,FeaturePara,FeatureImgCol,
    RowDirection,UlCustom,LiCustom,FeatureImg} from "./features.style";
import {Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Features } from '../../../pagedata/Showcase';

const FeaturesPage =()=>{
    return (
        <FeaturesWrapper>
            <Container>
                <FeatureCol>
                    <Row>
                        <Col md="5">
                            <FeatureTxtCol>
                                <FeatureHeading>
                                {Features.Row1.FeatureHeading}
                                </FeatureHeading>
                                <FeaturePara>
                                {Features.Row1.FeaturePara}
                                </FeaturePara>
                                <UlCustom>
                                    {
                                        Features.Row1.FeaturesList.map((item,idx) => {
                                            return <LiCustom>
                                                {item.feature}
                                            </LiCustom>
                                        })
                                    }
                                    
                                </UlCustom>

                            </FeatureTxtCol>
                        </Col>
                        <Col md="7">
                                <FeatureImgCol>
                                    <FeatureImg 
                                        src={require("../../../assets/"+Features.Row1.FeatureImg)} 
                                        alt=""
                                    />
                                </FeatureImgCol>
                        </Col>
                    </Row>
                    <RowDirection>
                        <Col md="5">
                            <FeatureTxtCol>
                                    <FeatureHeading>
                                    {Features.Row2.FeatureHeading}
                                    </FeatureHeading>
                                    <FeaturePara>
                                    {Features.Row2.FeaturePara}
                                    </FeaturePara>
                            </FeatureTxtCol>
                        </Col>
                        <Col md="7">
                                <FeatureImgCol>
                                    <FeatureImg 
                                        src={require("../../../assets/"+Features.Row2.FeatureImg)} 
                                        alt=""
                                    />
                                </FeatureImgCol>
                        </Col>
                    </RowDirection>
                </FeatureCol>
            </Container>
        </FeaturesWrapper>
    );
}
export default FeaturesPage;