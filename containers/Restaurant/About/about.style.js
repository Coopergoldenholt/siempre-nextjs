import styled from 'styled-components';
import {SectionHeading} from '../Common/common.style'
import {Row} from "react-bootstrap";
import {device} from '../Common/device'
import 'bootstrap/dist/css/bootstrap.min.css';

export const AboutSection = styled.section`
    padding:80px 0px;
    @media ${device.tablet} {
        padding-right:10px;
        padding-left: 10px;
    }
`;

export const AboutCustomRow = styled(Row)`
    align-items:center;
`;

export const AboutLeftCol = styled.div`
`;

export const AboutLeftImage = styled.img`
    height:550px;
    width:100%;
    object-fit:cover;
    margin-bottom:0px;

    @media ${device.tablet} {
        height:250px;
        margin-bottom:50px;
    }
`;

export const AboutRightCol = styled.div`
    padding-left:100px;
    @media ${device.laptop} {
        padding-left:0px;
    }
    @media ${device.tablet} {
        padding-left:0px;
    }
`;

export const AboutRightColHeading = styled(SectionHeading)`
    text-align:left;
    font-size:35px;
    margin-bottom:30px;
`;

export const AboutRightPara = styled.p`
    text-align:left;
    font-size:16px;
    margin-bottom:30px;
`;