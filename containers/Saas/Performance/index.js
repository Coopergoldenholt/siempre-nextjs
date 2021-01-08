import React from 'react';
import {PerformanceSection,PerformanceHeadingWrapper,PerformanceSectionHeading,
    PerformanceHeadingPara,PerformanceHolder,PerformanceCount,PerformanceDetails
} from './performance.style';
import {Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Performance } from '../../../pagedata/Saas';
const PerformancePage =() => {
    return (
        <PerformanceSection id="performanceContainer">
            <Container>
                <Row>
                    <Col md="12">
                        <PerformanceHeadingWrapper>
                                <PerformanceSectionHeading>{Performance.PerformanceSectionHeading}</PerformanceSectionHeading>
                                <PerformanceHeadingPara>
                                {Performance.PerformanceHeadingPara}
                                </PerformanceHeadingPara>
                        </PerformanceHeadingWrapper>
                    </Col>
                </Row>
                <Row>
                { 
                    Performance.Row.map((item,idx) => {
                    return <Col md="3" sm="6">
                            <PerformanceHolder>
                                <PerformanceCount>
                                    {item.PerformanceCount}
                                </PerformanceCount>
                                <PerformanceDetails>
                                    {item.PerformanceDetails}
                                </PerformanceDetails>
                            </PerformanceHolder>
                    </Col>
                    })
                }
                </Row>
            </Container>
        </PerformanceSection>
    );
}
    
export default PerformancePage;