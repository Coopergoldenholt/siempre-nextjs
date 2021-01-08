import styled from 'styled-components';
import {SectionHeading,Commonpara,Commonbtn} from '../Common/common.style';
import {Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {device} from '../Common/device'

export const AboutSection = styled.section`
    padding:100px 0px;

    @media ${device.tablet} {
        padding-right: 10px;
        padding-left: 10px;
    }
`;

export const AboutRow = styled(Row)`
    align-items:center;
`;

export const AboutLeft = styled.div`
    width: 100%;
    text-align: center;
    margin-right:50px;
`;

export const AboutRight = styled.div`
    padding-left:80px;

    @media ${device.laptop} {
        padding-left:50px;
    }

    @media ${device.tablet} {
        width:100%;
        padding-left:0px;
        padding-top:50px;
    }
`;
export const AboutHeading = styled(SectionHeading)`
    text-align:left;
    margin-bottom:30px;
`;
export const AboutDesc = styled(Commonpara)`
    margin-bottom:30px;
`;
export const AboutBtn = styled(Commonbtn)`

`;

export const AboutLeftImage = styled.img`
`;