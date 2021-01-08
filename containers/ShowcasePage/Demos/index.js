import React from "react";
import {DemoWrapper,SectionHeadingWrapper,Heading,DemoHref,DemoImgWrapper,DemoImgFigure,
        DemoColHeading,DemoCol,SubHeading,DemoColImg} from "./demo.style";
import {Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Demos } from '../../../pagedata/Showcase';
const DemosPage = () => {
    return (
        <DemoWrapper id="demosContainer">
            <Container>
                <Row>
                    <Col md="12">
                        <SectionHeadingWrapper>
                                <Heading>
                                {Demos.Row1.Heading}
                                </Heading>
                                <SubHeading>
                                {Demos.Row1.SubHeading}
                                </SubHeading>
                        </SectionHeadingWrapper>
                    </Col>
                </Row>

                <Row>
                {
                    Demos.Row2.map((item,idx) => {
                    return <Col md="4" sm="6">
                        <DemoCol>
                                <DemoImgWrapper>
                                    <DemoHref href={item.url} target="_blank" aria-label={"app-link"+idx}>
                                        <DemoImgFigure>
                                            <DemoColImg 
                                                src={require("../../../assets/"+item.DemoColImg)} 
                                                alt=""
                                            />
                                        </DemoImgFigure>
                                    </DemoHref>
                                </DemoImgWrapper>
                                <DemoColHeading>
                                    {item.DemoColHeading}
                                </DemoColHeading>
                        </DemoCol>
                    </Col>
                    })
                }
                </Row>
            </Container>
        </DemoWrapper>
    );
}
export default DemosPage;