import styled from 'styled-components';
import {Commonpara,Commonbtn,SectionHeading} from '../Common/common.style';
import {device} from '../Common/device';

export const PricingSection = styled.div`
    padding:100px 0px;
    background:#f9fafc;

    @media ${device.tablet} {
        padding:80px 10px;
    }
`;

export const PricingHeadingWrapper = styled.div`
    max-width:600px;
    margin:auto;
    text-align:center;
    margin-bottom:80px;

    @media ${device.tablet} {
        margin-bottom:60px;
    }
`;
export const PricingSubHeading = styled(Commonpara)`
    font-size:16px;
`;

export const PricingHeading = styled(SectionHeading)`
    line-height:30px;
`;

export const PricingPlanCol = styled.div`
    background:#fff;
    border-radius: 10px;
    text-align:center;
    padding:50px 25px;
    border-top:3px solid #5f27fa;
    box-shadow: 0px 0px 10px 0px #d8d8d8;
    margin:40px 0px 0px;

    @media ${device.tablet} {
        margin:0px;
    }
`;

export const PricingPlanColCenter = styled.div`
    background:#5f27fa;
    border-radius: 10px;
    text-align:center;
    padding:60px 25px;
    border-top:3px solid #5f27fa;
    box-shadow: 0px 0px 10px 0px #d8d8d8;
    padding-top:70px;
    padding-bottom:70px;

    h3
    {
        color:#fff;
    }
    hr
    {
        background: #7e50ff;
    }
    p{
        color:#fff;
    }

    @media ${device.tablet} {
        margin:30px 0px;
    }
`;

export const PricingPlanHeading = styled(SectionHeading)`
    color:#5f27fa;
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
    height:80px;
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
    background: #ece5ff;
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

export const PricingPlanBtn = styled(Commonbtn)`
    margin-top: 30px;
`;

export const PricingPlanBtnCenter = styled(Commonbtn)`
    border:1px solid #fff;
    margin-top: 30px;
    background:none;
    :before{
        background:#fff;
    }
    :hover{
        color:#000 !important;
    }
`;