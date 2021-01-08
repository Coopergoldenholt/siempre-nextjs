import styled from 'styled-components';
import {Commonpara,Commonbtn,SectionHeading,Commonh4} from '../Common/common.style';
import {device} from '../Common/device';

export const PricingWrapper = styled.div`
    padding:70px 0px;
    background:#f9fafc;

    @media ${device.tablet} {
        padding-left:10px;
        padding-right:10px;
    }
`;

export const PricingHeadingWrapper = styled.div`
    max-width:600px;
    margin:auto;
    text-align:center;
    margin-bottom:50px;
`;
export const PricingSubHeading = styled(Commonh4)`

`;
export const PricingHeading = styled(SectionHeading)`
`;

export const PricingPlanCol = styled.div`
    background:#fff;
    border-radius: 4px;
    text-align:center;
    padding:50px 25px;
    margin-top:40px;
    border-top:3px solid #0071e3;
    box-shadow: 0px 0px 10px 0px #d8d8d8;

    @media ${device.tablet} {
        margin-top:0px;
    }
`;

export const PricingPlanColCenter = styled.div`
    background:#363636;
    border-radius: 4px;
    text-align:center;
    padding:60px 25px;
    border-top:3px solid #ffff00;
    box-shadow: 0px 0px 10px 0px #d8d8d8;
    padding-top:70px;
    padding-bottom:70px;

    h3
    {
        color:#fff;
    }
    hr
    {
        background: #0071e3;
    }
    p{
        color:#fff;
    }

    @media ${device.tablet} {
        margin:30px 0px;
    }
`;

export const PricingPlanHeading = styled(SectionHeading)`
    color:#0071e3;
    margin-bottom:30px;

    @media ${device.laptop} {
        font-size:32px;
    }
    @media ${device.tablet} {
        font-size:36px;
    }
`;

export const PricingPlanImg = styled.img`
    width:80px;    
    margin-bottom:25px;
`;
export const PricingPlanPrice = styled.h3`
    margin-bottom:35px;
    font-size:35px;
    span
    {
        font-size:30px;
    }

    @media ${device.laptop} {
        font-size:32px;
        span
        {
            font-size:28px;
        }
    }
    @media ${device.tablet} {
        font-size:35px;
        span
        {
            font-size:30px;
        }
    }
`;
export const PricingPlanLine = styled.hr`
    background: #ddd;
`;
export const PricingPlanDarkText = styled(Commonpara)`
    color:#565759;
    font-weight:500;
    margin-bottom:5px;
    font-size:14px;
`;
export const PricingPlanLightText = styled(Commonpara)`
    color:#b8b8b8;
    margin-bottom:5px;
    font-weight:500;
    font-size:14px;
`;
export const ButtonWrapper = styled.div`
    display:inline-flex;
`;

export const PricingPlanBtn = styled(Commonbtn)`
    margin-top: 30px;
`;
export const PricingPlanBtnCenter = styled(Commonbtn)`
    margin-top: 30px;
    background:#0071e3;
    ::before{
        background:#5e5e5e;
    }
`;
