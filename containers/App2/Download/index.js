import React from 'react';
import {Container,Row,Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {DownloadSection,DownloadInner,DownloadCol1,DownloadTitle,DownloadSubTitle,
    DownloadPara,DownloadLinkWrapper,DownloadLeftCol,DownloadContentBg,
    DownloadCol2,DownloadImage,DownloadDemo
} from './download.style';
import { Download } from '../../../pagedata/App2';
const DownloadPage =()=>{
    return (
        <DownloadSection id="downloadContainer">
            <DownloadContentBg>
                <Container>
                <Row>
                    <Col md="12">
                        <DownloadInner>
                            
                            <DownloadCol1>
                                    <DownloadTitle>
                                        {Download.DownloadTitle}
                                    </DownloadTitle>
                                    <DownloadSubTitle>
                                    {Download.DownloadSubTitle}
                                    </DownloadSubTitle>
                                    <DownloadPara>
                                    {Download.DownloadPara}
                                    </DownloadPara>
                               
                                    <DownloadLinkWrapper>
                                        <DownloadLeftCol>
                                            <DownloadImage 
                                                src={require("../../../assets/"+Download.DownloadLinkImgApple)} 
                                                alt=""
                                            />
                                        </DownloadLeftCol>
                                        <DownloadLeftCol>
                                            <DownloadImage 
                                                src={require("../../../assets/"+Download.DownloadLinkImgGoogle)} 
                                                alt=""
                                            />
                                        </DownloadLeftCol>
                                    </DownloadLinkWrapper>
                            </DownloadCol1>

                            <DownloadCol2>
                                    <DownloadDemo 
                                        src={require("../../../assets/"+Download.DownloadDemo)} 
                                        alt=""
                                    />
                            </DownloadCol2>
                        </DownloadInner>
                    </Col>
                </Row>
            </Container>
            </DownloadContentBg>
        </DownloadSection>
    );
}
export default DownloadPage;