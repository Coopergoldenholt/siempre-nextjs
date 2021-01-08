import styled from 'styled-components';
import {Commonpara,Commonbtn,SectionHeading} from '../Common/common.style';
import {Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {device} from '../Common/device';

export const PricingSection = styled.section`
    padding:100px 0px 70px;
    background-size:100%;

    @media ${device.tablet} {
        padding:80px 10px;
    }
`;

export const PricingHeadingWrapper = styled.div`
    max-width:600px;
    margin:auto;
    text-align:center;
`;

export const PricingHeading = styled(SectionHeading)`
    
`;

export const PricingCustomRow = styled(Row)`
    margin-top: 20px;
    @media ${device.tablet} {
        margin-top: 20px;
    }
`;

export const PricingPlanCol = styled.div`
    background:#fff;
    border-radius: 15px;
    text-align:center;
    padding: 60px 25px;
    box-shadow: 0px 0px 50px 0px #d8d8d8;
    margin:30px 0px;
`;

export const PricingPlanColCenter = styled.div`
    border-radius:15px;
    text-align: center;
    padding: 60px 25px;
    box-shadow: 0px 0px 50px 0px #d8d8d8;
    margin: 30px 0px;
    background: #fff;
    position: relative;
    z-index: 9;
    @media ${device.tablet} {
        transform: none;
    }
`;

export const PricingPlanHeading = styled(SectionHeading)`
    color:#f26522;
    margin-bottom:30px;
    font-size: 18px;
    font-weight:bold;
    text-transform:uppercase;
`;

export const PricingPlanImg = styled.img`
    width:80px;    
    margin-bottom:25px;
`;

export const PricingPlanPrice = styled.h3`
    font-size: 42px;
    font-family: 'Lato',sans-serif !important;
    span
    {
        font-size: 18px;
        text-transform: uppercase;
        margin-top: 15px;
        display: block;
        font-weight:bold;
        color: #7a7f83;
        text-align: center;
    }

    @media ${device.laptop} {
        font-size: 32px;
    }
    @media ${device.tablet} {
        font-size: 42px;
    }
`;

export const PricingPlanLine = styled.hr`
    background: #f26522;
    max-width: 50%;
    margin: 30px auto;
`;

export const PricingPlanDarkText = styled(Commonpara)`
    color:#7a7f83;
    font-weight:500;
    margin-bottom:5px;
    font-size:16px;
`;

export const PricingPlanLightText = styled(Commonpara)`
    color:#c3c3c3;
    margin-bottom:5px;
    font-weight:500;
    font-size:16px;
`;
export const PricingPlanBtn = styled(Commonbtn)`
    margin-top: 30px;

`;
export const PricingPlanBtnCenter = styled(Commonbtn)`
    margin-top: 30px;
`;