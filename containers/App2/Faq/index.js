import React from 'react';
import { Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaqWrapper,FaqHeadingWrapper,FaqSectionHeading,FaqPara,FaqContainer,
    FaqAccordianWrapper} from './faq.style'
import AccordianCustom from './AccordianCustom';
import { FAQ } from '../../../pagedata/App2';
  
const FaqPage =()=>{
    
    return (
        <FaqWrapper>
            <FaqContainer>
                <FaqHeadingWrapper>
                    <Row>
                        <Col md="12">
                                <FaqSectionHeading>{FAQ.FaqSectionHeading}</FaqSectionHeading>
                                <FaqPara>{FAQ.FaqSectionSubHeading}</FaqPara>
                        </Col>
                    </Row>
                </FaqHeadingWrapper>
                    <FaqAccordianWrapper>
                        <Row>
                            <Col md="12">
                            {
                                FAQ.AccordianCustom.map((item,idx) => {
                                return <AccordianCustom 
                                    title={item.title}
                                    description= {item.description} 
                                />
                                })
                            }
                            </Col>
                        </Row>
                    </FaqAccordianWrapper>
            </FaqContainer>
        </FaqWrapper>
    );
}
export default FaqPage;