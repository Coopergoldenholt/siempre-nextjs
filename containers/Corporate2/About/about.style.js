import styled from 'styled-components';
import {Commonpara,SectionHeading,CommonRedbtn} from '../Common/common.style';
import {device} from '../Common/device';
import {Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const AboutSection = styled.section`
    padding:70px 0px;
    
    @media ${device.tablet} {
        padding-left:10px;
        padding-right:10px;
    }
`;

export const AboutRow = styled(Row)`
    align-items:center;
`;

export const AboutLeft = styled.div`

`;

export const AboutCardImg = styled.div`
    text-align: center;
    .AboutCardIcon{
        margin-bottom:10px;
    }
`;

export const AboutRight = styled.div`
    padding-left:40px;

    @media ${device.laptop} {
        padding-left:0px;
        padding-top:40px;
    }
    @media ${device.tablet} {
        padding-left:0px;
    }
`;

export const AboutRightH3 = styled(SectionHeading)`
    text-align: left;
`;

export const AboutRightPara = styled(Commonpara)`
    text-align:left;
    font-size:14px;
`;

export const AboutRightBtn = styled(CommonRedbtn)`

`;

export const AboutImg = styled.img`
`;
