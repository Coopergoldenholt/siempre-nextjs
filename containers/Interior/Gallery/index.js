import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {SectionHeading} from '../Common/common.style';
import {GallerySection,GalleryImageWrapper,GalleryImage} from './gallery.style';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Gallery } from '../../../pagedata/Interior';

const GalleryPage = () => {
    return (
        <GallerySection id="galleryContainer">
            <Container>
                <Row>
                    <Col md="12">
                        <SectionHeading>
                            {Gallery.SectionHeading}
                        </SectionHeading>
                    </Col>
                </Row>
            </Container>
            <GalleryImageWrapper>
            {
                Gallery.GalleryImageWrapper.map((item,idx) => {
                    return <GalleryImage 
                        src={require("../../../assets/"+item.GalleryImage)} 
                        alt=""
                    />
                })
            }
            </GalleryImageWrapper>
        </GallerySection>
    );
}

export default GalleryPage;