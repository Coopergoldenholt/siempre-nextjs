import React from "react";
import {DownloadWrapper,BuyBtn,DownloadHeading} from "./download.style";
import {Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Download } from '../../../pagedata/Showcase';

const DownloadPage =()=>{
    return (
        <DownloadWrapper id="downloadContainer">
            <Container>
                <Row>
                    <Col md="12">
                            <DownloadHeading>
                            {Download.DownloadHeading}
                            </DownloadHeading>
                            <BuyBtn target="_blank" href={Download.BuyBtnHref}>{Download.BuyBtn}</BuyBtn>
                    </Col>
                </Row>
            </Container>
        </DownloadWrapper>
    );
}
export default DownloadPage;