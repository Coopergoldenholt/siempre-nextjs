import styled from 'styled-components';
import {Commonpara,Commonh3,Commonh4,Commonbtn} from '../Common/common.style'
import {device} from '../Common/device'
import {RightArrow} from "styled-icons/boxicons-solid/RightArrow"
import {LeftArrow} from "styled-icons/boxicons-solid/LeftArrow"

export const BannerSection = styled.section`
    background:#f9fafc;
    background-size:cover;
    height:100vh;

    @media ${device.tablet} {
        min-height:100vh;
        height:auto;
        padding-right: 0px;
        padding-left: 0px;
    }
`;

export const BannerWrapper = styled.div`
    @media ${device.minlaptopL} {
        max-width:1140px;
        margin:0px auto;
    }
`;

export const BannerContents = styled.div`
    display:flex;
    align-items:center;

    @media ${device.tablet} {
        display:block;
        padding-top:70px;
    }
    
`;

export const BannerContentLeft = styled.div`
    width:40%;
    padding-left: 15px;
    padding-right: 30px;
    padding-top: 30px;

    // @media (min-width:1440px){
    //     margin-left: calc(50% - 570px);
    // }

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
        text-align:center;
        margin:auto;
        padding:50px 20px 0px;
    }
`;

export const BannerH3 = styled(Commonh3)`
    color:#353535;
    font-size:48px;
    line-height: 58px;
    margin-bottom:0px;

    @media ${device.laptop} {
        font-size:40px;
        line-height: 48px;
    }
    @media ${device.tablet} {
        font-size:40px;
        line-height: 48px;
    }
`;

export const BannerH4 = styled(Commonh4)`
    line-height: 50px;
    color:#353535;
    font-size:40px;

    @media ${device.laptop} {
        line-height: 40px;
        font-size:35px;
    }
    @media ${device.tablet} {
        line-height: 40px;
        font-size:35px;
    }
`;

export const BannerPara = styled(Commonpara)`
    color:#484848;
    font-size:16px;
`;

export const BannerBtn = styled(Commonbtn)`
    box-shadow: 0px 0px 13px -2px #eaeaea;
    text-decoration:none;
`;

export const BannerContentRight = styled.div`
    width:60%;
    text-align:right;
    position:relative;
    height:auto;

    @media ${device.laptop} {
        width:55%;
    }
    @media ${device.tablet} {
        width:100%;
        text-align:center;
        padding-top:45px;
    }
    
    .slick-list{
        @media ${device.tablet} {
            height:380px;
        }
    }
`;


export const BannerImage = styled.img`
    height:100vh;

    @media ${device.tablet} {
        height:380px;
    }
`;

export const NextPrev = styled.div`
    text-align:left;
    position:absolute;
    bottom:20px;
    left:20px;
    button{
        border:none;
        background:none;
        outline:none;
    }
`;

export const RightArrowIcon = styled(RightArrow)`
    height:40px
    color:#fff;
`;

export const LeftArrowIcon = styled(LeftArrow)`
    height:40px
    color:#fff;
`;