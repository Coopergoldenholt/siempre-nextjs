import styled from 'styled-components';
import {Commonpara,Commonh3,Commonbtn,Commonh4} from '../Common/common.style'
import {device} from '../Common/device'
import BackgroundImg from '../../../assets/hosting-images/banner.jpg'

export const BannerSection = styled.section`
    background-image:url(${BackgroundImg});
    padding:100px 0px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    min-height:100vh;
    display:flex;
    align-items:center;

    @media ${device.tablet} {
        background-size:cover;
        padding-top:50px;
    }
`;

export const BannerContents = styled.div`
    padding-top:20px;
    display:flex;
    align-items:center;
    @media ${device.laptop} {
        padding-top:10px;
    }
    @media ${device.tablet} {
        display:block;
        padding-top:70px;
    }
`;

export const BannerContentLeft = styled.div`
    width:50%;
    padding-right:100px;
    @media ${device.laptop} {
        width:60%;
        padding-right:10px;
    }
    @media ${device.tablet} {
        width:100%;
        text-align:center;
        padding-right:0px;
    }
`;

export const BannerH4 = styled(Commonh4)`
    font-size:30px;
    margin-bottom:10px;
    font-weight:500;
    color:#fff;
`;

export const BannerH3 = styled(Commonh3)`
    line-height: 42px;
    margin-bottom:30px;
    color:#fff;
    font-weight:500;
`;

export const BannerPara = styled(Commonpara)`
    color:#fff;
    margin-bottom:30px;
    opacity:0.8;
`;

export const BannerBtnsWrapper = styled.div`
    
`;

export const BannerBtn = styled(Commonbtn)`
    box-shadow: none;
    text-decoration:none;
    background:#fff;
    color:#000;
    :hover{
        
    }
    @media ${device.tablet} {
        margin-bottom:30px;
    }
`;

export const BannerContentRight = styled.div`
    width:50%;

    @media ${device.tablet} {
        width:100%;
        text-align:center;
        padding-top:45px;
    }

`;

export const BannerImage = styled.img`
    max-height:410px;
`;