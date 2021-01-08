import React from 'react';
import {Row, Col } from "react-bootstrap";
import {FaqWrapper,FaqHeadingWrapper,FaqSectionHeading,FaqContainer,
    FaqAccordianWrapper,FaqSubHeading} from './faq.style'
import AccordianCustom from './AccordianCustom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { FAQ } from '../../../pagedata/App';


  
const FaqPage =()=>{
    return (
        <FaqWrapper>
            <FaqContainer>
                <FaqHeadingWrapper>
                    <Row>
                        <Col md="12">
                                <FaqSectionHeading>{FAQ.FaqSectionHeading}</FaqSectionHeading>
                                <FaqSubHeading>{FAQ.FaqSectionSubHeading}</FaqSubHeading>
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