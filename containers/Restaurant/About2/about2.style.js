import styled from 'styled-components';
import {SectionHeading} from '../Common/common.style'
import {Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {device} from '../Common/device'

export const About2Section = styled.section`
    padding:80px 0px;
    background: #f9f9f9;
    @media ${device.tablet} {
        padding-right:10px;
        padding-left: 10px;
    }
`;

export const About2CustomRow = styled(Row)`
    align-items:center;
`;

export const About2LeftCol = styled.div`
`;

export const About2LeftImage = styled.img`
    width:100%;
    margin-bottom:0px;
`;

export const About2RightCol = styled.div`
    padding-right:100px;
    @media ${device.laptop} {
        padding-right:0px;
    }
    @media ${device.tablet} {
        padding-right:0px;
        margin-bottom: 140px;
    }
`;

export const About2RightColHeading = styled(SectionHeading)`
    text-align:left;
    font-size:35px;
    margin-bottom:30px;
`;

export const About2RightPara = styled.p`
    text-align:left;
    font-size:16px;
    margin-bottom:30px;
`;