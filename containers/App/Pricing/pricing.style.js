import styled from 'styled-components';
import {Commonpara,Commonbtn,SectionHeading,Commonh4} from '../Common/common.style';
import {device} from '../Common/device';
import BackgroundPattern from '../../../assets/app-images/download-section-effect.png'

export const PricingSection = styled.section`
    padding:100px 0px;
    background: #f9fafc;
    background-size:100%;
    position:relative;

    @media ${device.tablet} {
        padding: 80px 0px;
    }
`;

export const PricingInner = styled.div`
    content:"";
    background-image: url(${BackgroundPattern});
    background-repeat: no-repeat;
    background-position: -300px;
    background-size: 600px;

    @media ${device.tablet} {
        background-size: 500px;
        background-position: -250px 0px;
        padding-left:10px;
        padding-right:10px;
    }
`;

export const PricingHeadingWrapper = styled.div`
    max-width:600px;
    margin:auto;
    text-align:center;
    margin-bottom:75px;

    @media ${device.tablet} {
        margin-bottom:60px;
    }
`;

export const PricingSubHeading = styled(Commonh4)`
    margin-bottom:0px;
`;

export const PricingHeading = styled(SectionHeading)`
`;

export const PricingCustomRow = styled.div`
    display:flex;
    @media ${device.tablet} {
        display:block;
    }
`;

export const PricingCol = styled.div`
    width:33.33%;

    @media ${device.tablet} {
        width:100%;
    }
`;

export const PricingPlanCol = styled.div`
    background:#fff;
    border-radius: 15px;
    text-align:center;
    padding: 60px 25px;
    box-shadow: 0px 0px 30px 0px #d8d8d8;
    margin:20px 0px;

    border-top-left-radius: ${props => props.index === 2 ? "0px ":"15px"};
    border-bottom-left-radius: ${props => props.index === 2 ? "0px ":"15px"};

    border-top-right-radius: ${props => props.index === 0 ? "0px ":"15px"};
    border-bottom-right-radius: ${props => props.index === 0 ? "0px ":"15px"};

    @media ${device.tablet} {
        border-radius:15px;
        margin:0px 0px;
    }
    
`;

export const PricingPlanColCenter = styled.div`
    border-radius:15px;
    text-align: center;
    padding: 80px 25px;
    box-shadow: 0px 0px 30px 0px #d8d8d8;
    background: #fff;
    position: relative;
    z-index: 9;

    @media ${device.laptop} {
        padding-top: 40px 15px 40px 15px;
    }

    @media ${device.tablet} {
        transform: none;
        padding-top: 40px 25px;
        margin:20px 0px;
    }
`;

export const PricingPlanHeading = styled(SectionHeading)`
    color:#5ce59b;
    margin-bottom:30px;
    font-size: 18px;
    font-weight:bold;
    text-transform:uppercase;
`;

export const PricingPlanImg = styled.img`
    width:80px;    
    margin-bottom:25px;
`;

export const PricingPlanLine = styled.hr`
    background: #5ce59b;
    max-width: 50%;
    margin: 30px auto;
`;

export const PricingPlanPrice = styled.h3`
    font-size: 43px;

    span
    {
        font-size: 18px;
        text-transform: uppercase;
        margin-top: 15px;
        display: block;
        color: #6c6c6c;
        text-align: center;
    }

    @media ${device.laptop} {
        font-size: 32px;
        span
        {
            font-size: 16px;
        }
    }
    
    @media ${device.tablet} {
        font-size: 43px;
        span
        {
            font-size: 18px;
        }
    }
`;

export const PricingPlanDarkText = styled(Commonpara)`
    color:#595959;
    font-weight:500;
    margin-bottom:5px;
    font-size:16px;

    @media ${device.laptop} {
        font-size:14px;
    }
    @media ${device.tablet} {
        font-size:16px;
    }
`;

export const PricingPlanLightText = styled(Commonpara)`
    color:#b2b2b2;
    margin-bottom:5px;
    font-weight:500;
    font-size:16px;

    @media ${device.laptop} {
        font-size:14px;
    }

    @media ${device.tablet} {
        font-size:16px;
    }
`;

export const PricingPlanBtn = styled(Commonbtn)`
    margin-top: 30px;
`;

export const PricingPlanBtnCenter = styled(Commonbtn)`
    margin-top: 30px;
`;
