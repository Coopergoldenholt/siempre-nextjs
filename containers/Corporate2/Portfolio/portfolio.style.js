import styled from 'styled-components';
import {device} from '../Common/device'

export const PortfolioSection = styled.section`
    padding:70px 0px;
    background:#f9f9f9;
    transition:all 0.5s;
`;

export const PorfolioSlider = styled.div`
    margin-top:45px;
    .slick-slide img{
        width:100%;
    }
    @media ${device.tablet} {
        width:100%;
        padding:0px 0px;
    }
`;

export const PorfolioSliderCol = styled.div`
    outline:0;
    transition:all 0.5;
`;

export const PortfolioInnerContainer = styled.div`
    margin:0px 30px;
    position:relative;

    @media ${device.laptop} {
        margin:0px 20px;
    }

    @media ${device.tablet} {
        margin:0px 10px;
    }

`;

export const PorfolioSliderImg = styled.img`
    transition:all 0.5s;

    @media ${device.tablet} {
        width:100%;
        padding:0px 0px;
    }
`;

export const PortfolioHover = styled.div`
    background: rgba(0,0,0,.7);
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    border-radius: 10px;
    visibility:hidden;
    text-align:center;
    padding: 120px 40px;
    opacity: 0;
    -webkit-transition: visibility 0s,opacity 0.5s linear;
    transition: visibility 0s,opacity 0.5s linear;

    ${PorfolioSliderCol}:hover &{
        visibility:visible;
        opacity: 1;
    }

    @media ${device.laptopM} {
        padding: 80px 40px;
    }

    @media ${device.laptop} {
        padding: 30px 30px;
    }

    @media ${device.tablet} {
        padding:15px 15px;
    }
    @media ${device.mobileXL} {
        padding: 80px 30px;
    }
    
`;
export const PortfolioHoverHeading = styled.h3`
    color:#fff;
    margin-bottom:10px;
    font-size:24px;

    @media ${device.tablet} {
        font-size:20px;
    }

    @media ${device.mobileXL} {
        font-size:24px;
    }
`;

export const PortfolioHoverPara = styled.p`
    color:#fff;
    font-size: 16px;
    line-height: 28px;
    
    @media ${device.tablet} {
        font-size: 14px;
        line-height: 22px;
    }

    @media ${device.mobileXL} {
        font-size: 16px;
        line-height: 24px;
    }
`;

export const NextPrev = styled.div`
    text-align:center;
    margin-top:40px;
    line-height:0px;
    button{
        border:none;
        background:none;
        outline:none;
    }
`;

export const ImgButton = styled.button`
    line-height:0px;
    padding-bottom:0px;
`;

export const PrevImg = styled.img`
    width: 50px;
    height:24px;
    margin:0px 0px;
    cursor:pointer;
    transition:all .4s;
    
    :hover
    {
        transform:scale(1.1);
        transition:all .4s;
    }
`;

export const NextImg = styled.img`
    width: 50px;
    height:24px;
    margin:0px 0px;
    cursor:pointer;
    transition:all .4s;
    
    :hover
    {
        transform:scale(1.1);
        transition:all .4s;
    }
`;