import React from 'react';
import {FeaturesSection,FeaturesRight,FeaturesCard,
FeaturesCardImg,FeaturesCardIcon,FeaturesCardHeading,FeaturesCardPara,FeaturesRow
} from './featurecards.style';
import {Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Features } from '../../../pagedata/Hosting';
const FeaturesPage = () => {  
    return(
        <FeaturesSection id="featuresContainer">
            <Container>
                <FeaturesRow>
                    <Col md="12" lg="12">
                        <FeaturesRight>
                            <Row>
                            { 
                                Features.FeaturesRight.map((item,idx) => {
                                return <Col lg="6" md="6" sm="12">
                                            <FeaturesCard topMargin= {(idx === 2 || idx === 3)?"50px":"0px"}>
                                                <FeaturesCardImg>
                                                    <FeaturesCardIcon src={require("../../../assets/"+item.FeaturesCardIcon)} alt=""/>
                                                </FeaturesCardImg>
                                                <FeaturesCardHeading>{item.FeaturesCardHeading}</FeaturesCardHeading>
                                                <FeaturesCardPara>{item.FeaturesCardPara}</FeaturesCardPara>
                                            </FeaturesCard>
                                    </Col>
                                })
                            }
                            </Row>
                        </FeaturesRight>
                    </Col>
                </FeaturesRow>
            </Container>
        </FeaturesSection>
)
}
export default FeaturesPage;