import styled from 'styled-components';
import {Commonh4,Commonpara} from '../Common/common.style';
import {device} from '../Common/device'
import BackgroundImg from '../../../assets/corporate-images/bg-pattern.png'

export const PortfolioSection = styled.section`
    padding:80px 0px;
    position:relative;
    transition:all 1s;

    ::before{
        content:"";
        background-image:url(${BackgroundImg});
        display: block;
        background-repeat: no-repeat;
        position: absolute;
        left: -110px;
        height: 200px;
        width: 200px;
        background-size: 100%;
        top: 30px;
    }

    .center-portfolio .slick-center {
        opacity: 1;
        transform: scale(1) !important;
        transition:all 1s;
    }

    .slick-track{
        padding-top:15px;
    }

    .slick-slide
    {
        transform:scale(0.90);
        transition:all 1s;

        @media ${device.laptop} {
            transform:scale(1);
        }
    }
`;

export const PorfolioSlider = styled.div`
    margin-top:30px;
    margin-bottom:30px;

    @media ${device.tablet} {
        width:100%;
        padding:0px 0px;
    }
`;

export const PorfolioSliderCol = styled.div`
    outline:0;
    transition:all 1s;
    margin-bottom: 20px;
`;

export const PortfolioInnerContainer = styled.div`
    margin: 0px 20px;
    box-shadow: 0px 0px 16px 0px #d0d0d0;
    background: #fff;
    position:relative;
    outline:0;
    overflow: hidden;
    border-radius: 10px;

    @media ${device.tablet} {
        margin: 0px 15px;
    }
`;

export const PorfolioSliderImg = styled.img`
    transition:all 1s;
    position:relative;
    border-radius:10px;
    margin-bottom: 0px;

    @media ${device.tablet} {
        width:100%;
        padding:0px 15px;
    }
`;

export const SliderHover = styled.div`
    text-align:center;
    background: rgba(0, 0, 0, .7);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding:20px;
    visibility:hidden;
    opacity: 0; 
    transition: visibility 0s, opacity 0.3s linear; 

    ${PortfolioInnerContainer}:hover &{
        visibility:visible;
        opacity: 1;
    }
`;

export const SliderHoverTitle = styled(Commonh4)`
    color:#fff;
    margin-top:50px;

    @media ${device.laptopM} {
        margin-top:40px;
    }

    @media ${device.tablet} {
        line-height: 10px;
        margin-bottom: 0px;
        font-weight: 500;
        color: #fff;
        margin-top: 0px;
    }

    @media ${device.mobileXL} {
        margin-top: 40px;
    }
`;

export const SliderHoverText = styled(Commonpara)`
    margin-top:20px;
    color:#fff;

    @media ${device.tablet} {
        font-size:14px;
    }
`;

export const NextPrev = styled.div`
    text-align:center;
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