import React from 'react';
import {VideoSection,VideoCol,VideoColHeading,VideoColItem,VideoPlay} from './video.style';
import {Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Video } from '../../../pagedata/Restaurant';
const VideoPage =()=>{
    return (
            <VideoSection>
                <Container>
                    <Row>
                        <Col md="12">
                            <VideoCol>
                                <VideoColItem>
                                    <VideoColHeading>{Video.VideoColHeading}</VideoColHeading>
                                    <VideoPlay/>
                                </VideoColItem>
                            </VideoCol>
                        </Col>
                    </Row>
                </Container>
            </VideoSection>
        )
    }
export default VideoPage;