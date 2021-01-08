import styled from 'styled-components';
import {Commonpara,Commonh3,Commonbtn} from '../Common/common.style'
import {device} from '../Common/device'
import BannerBg from '../../../assets/corporate-images/banner-bg.jpg'

export const BannerWrapper = styled.div`
    background-image:url(${BannerBg});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    min-height:100vh;
    display:flex;
    align-items:center;

    @media ${device.mobileS} {
        padding-top:50px;
    }
    @media ${device.mobileL} {
        padding-top:50px;
    }
    @media ${device.tablet} {
        background-size:cover;
        padding-top:80px;
        padding-right: 10px;
        padding-left: 10px;
        padding-bottom:80px;
    }
`;

export const BannerContents = styled.div`
    display:flex;
    align-items:center;
    padding-top:30px;
    @media ${device.tablet} {
        display:block;
        padding-top:70px;
    }
    
`;

export const BannerContentLeft = styled.div`
    width:50%;
    padding-right:30px;

    @media ${device.tablet} {
        width:100%;
        text-align:center;
        padding-right:0px;
    }
`;

export const BannerH3 = styled(Commonh3)`
    line-height: 58px;
    color:#fff;
    font-size:48px;

    @media ${device.laptop} {
        line-height: 44px;
        font-size:34px;
    }
`;

export const BannerPara = styled(Commonpara)`
    color:#fff;
    font-size:16px;
`;

export const BannerBtn = styled(Commonbtn)`
    box-shadow: 0px 0px 13px -2px #135ad1;
    text-decoration:none;
`;

export const BannerContentRight = styled.div`
    width:50%;
    text-align:center;
    padding-left:30px;

    @media ${device.tablet} {
        img{
            right:0px !important;
            left:0px !important;
            text-align:center !important;
            margin: AUTO;
        }
        width:100%;
        text-align:center;
        padding-left:0px;
        padding-top:45px;
    }
`;

export const BannerImageHolder = styled.img`
    max-height:430px;
`;