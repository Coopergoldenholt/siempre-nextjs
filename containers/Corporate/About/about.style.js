import styled from 'styled-components';
import {SectionHeading,Commonpara,Commonbtn} from '../Common/common.style';
import {Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {device} from '../Common/device'

export const AboutSectionSection = styled.section`
    padding:80px 0px;
    background:#f9f9f9;

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
    box-shadow: 0px 0px 16px 0px #d0d0d0;
    text-align: center;
    border-radius: 6px;
    background:#fff;
    margin-right:50px;
    padding: 70px 50px;
`;

export const AboutRight = styled.div`
    padding-left:80px;

    @media ${device.laptop} {
        padding-left:40px;
    }
    @media ${device.tablet} {
        width:100%;
        padding-left:0px;
        padding-top:50px;
    }
`;
export const AboutHeading = styled(SectionHeading)`
    text-align:left;
    margin-bottom:40px;
`;

export const AboutDesc = styled(Commonpara)`
    margin-bottom:30px;
`;

export const AboutBtn = styled(Commonbtn)`
    color: #fff;
    background:#007dcc;
    box-shadow: 0px 0px 13px -2px #b1b1b1;
    text-decoration:none;
`;

export const AboutLeftImage = styled.img`
`;

