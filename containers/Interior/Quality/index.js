import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {QualitySection,QualitySectionHeadingWrapper,QualityCustomContainer,
    QualityColBig,QualityColSmall,QualityColBigHeading,QualityColSmallImg,QualityColBigImg,
    QualityColSmallHeading,QualityColPara,QualityColBigFigure,QualityColSmallFigure} from './quality.style';
import {SectionHeading} from '../Common/common.style';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Quality } from '../../../pagedata/Interior';

const QualityPage = () => {

    return (
        <QualitySection>
            <Container>
                <Row>
                    <Col md="12">
                        <QualitySectionHeadingWrapper>
                                <SectionHeading>
                                    {Quality.SectionHeading}
                                </SectionHeading>
                        </QualitySectionHeadingWrapper>
                            <QualityCustomContainer>
                                <QualityColBig>
                                <QualityColBigFigure>
                                    <QualityColBigImg 
                                        src={require("../../../assets/"+Quality.QualityColBig.QualityColBigImg)}
                                        alt=""
                                    />
                                    </QualityColBigFigure>
                                    <QualityColBigHeading>
                                    {Quality.QualityColBig.QualityColBigHeading}
                                    </QualityColBigHeading>
                                    <QualityColPara>
                                    {Quality.QualityColBig.QualityColPara}
                                    </QualityColPara>
                                </QualityColBig>

                                <QualityColSmall marginProp="0px 40px">
                                    <QualityColSmallFigure >
                                        <QualityColSmallImg 
                                            src={require("../../../assets/"+Quality.QualityColSmall1.QualityColSmallImg)}
                                            alt=""
                                        />
                                    </QualityColSmallFigure>
                                    <QualityColSmallHeading>
                                        {Quality.QualityColSmall1.QualityColSmallHeading}
                                    </QualityColSmallHeading>
                                    <QualityColPara>
                                    {Quality.QualityColSmall1.QualityColPara}
                                    </QualityColPara>
                                </QualityColSmall>
                            
                                <QualityColSmall>
                                    <QualityColSmallFigure>
                                        <QualityColSmallImg 
                                            src={require("../../../assets/"+Quality.QualityColSmall2.QualityColSmallImg)}
                                            alt=""
                                        />
                                    </QualityColSmallFigure>
                                    <QualityColSmallHeading>
                                        {Quality.QualityColSmall2.QualityColSmallHeading}
                                    </QualityColSmallHeading>
                                    <QualityColPara>
                                    {Quality.QualityColSmall2.QualityColPara}
                                    </QualityColPara>
                                </QualityColSmall>
                            </QualityCustomContainer>
                    </Col>
                </Row>
            </Container>
        </QualitySection>
    );
}

export default QualityPage;