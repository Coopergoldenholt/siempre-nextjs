import styled from 'styled-components';
import {Commonpara,Commonh3,Commonh4} from '../Common/common.style'
import {device} from '../Common/device'
import BackgroundImg from '../../../assets/restaurant-images/banner.jpg'

export const BannerSection = styled.section`
    background-image:url(${BackgroundImg});
    padding:80px 0px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    min-height:100vh;
    display:flex;

    @media ${device.laptop} {
        padding:100px 0px;
    }

    @media ${device.tablet} {
        background-size:cover;
        padding:100px 10px;
    }
`;

export const BannerWrapper = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    
    @media ${device.minlaptopL} {
        max-width:1140px;
        margin:0px auto;
    }
`;


export const BannerCustomContainer = styled.div`
    display:flex;
    align-items:center;
    width:100%;
    margin-top:30px;

    @media ${device.tablet} {
        display:block;
        max-width: 540px;
        padding-right: calc(30px / 2);
        padding-left: calc(30px / 2);
        width: 100%;
        margin-right: auto;
        margin-left: auto;
    }
`;

export const BannerLeft = styled.div`
    width:55%;
    padding-left:30px;
    padding-right:50px;

    @media ${device.laptopL} {
        margin-left: calc(50% - 570px);
    }

    @media ${device.laptopM} {
        margin-left: calc(50% - 480px);
    }

    @media ${device.laptop} {
        width:45%;
        margin-left: calc(50% - 360px);
    }

    @media ${device.tablet} {
        width:100%;
        max-width: 540px;
        margin:auto;
        margin-bottom:100px;
        padding:50px 0px 0px;
    }
    
`;

export const BannerHeading = styled(Commonh3)`
    color:#fff;
    line-height: 65px;
    font-size: 48px;
    @media ${device.laptop} {
        font-size: 37px;
        line-height: 51px;
    }
    @media ${device.tablet} {
        line-height: 51px;
        font-size: 37px;
    }
    
`;

export const BannerPara = styled(Commonpara)`
    color:#fff; 
    margin-bottom:30px;
`;

export const BannerRight = styled.div`
    width:45%;
    .slick-slide
    {
       padding-right:60px;
       transition:all .5s;
       @media ${device.tablet} {
            padding-right:0px;
       }
    }
    .slick-current
    {
        transform:scale(1.16) !important;
        transition:all .5s;

        @media ${device.tablet} {
            transform:none !important;
        }

    }
    .slick-current img
    {
        transition:all .5s;
    }
    .slick-list
    {
        padding-top: 40px;
        padding-bottom: 40px;
        padding-left:40px;
        @media ${device.tablet} {
            padding-left:0px;
        }
    }
    .slick-active span{
        height:5px !important;
        opacity:1 !important;
        width:30px !important;
    }
    .slick-dots li{
        margin-right:5px;
        margin-left:5px;
        width:auto;
    }

    @media ${device.tablet} {
        width:100%;
        padding-left: 0px;
        padding-right: 0px;
    }
`;

export const Slidercol = styled.div`
    background:#fff;
    outline:0;
`;

export const SliderImg = styled.img`
    width: 100%;
    height: 200px;
    margin-bottom:0px;
    object-fit: cover;

    @media ${device.tablet} {
        height: 250px;
    }
`;

export const Caption = styled.div`
    padding:15px;
`;

export const CaptionHeading = styled(Commonh4)`
    margin-bottom:0px;
    color:#202020;
    font-size:18px;
`;

export const CaptionPara = styled(Commonpara)`
    margin-bottom:0px;
    color:#5c5c5c;
    font-size:14px;
`;
