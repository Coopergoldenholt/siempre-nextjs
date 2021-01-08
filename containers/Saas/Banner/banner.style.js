import styled from 'styled-components';
import {Commonpara,Commonh3,Commonbtn,Commonh4} from '../Common/common.style'
import {device} from '../Common/device'
import {PlayCircle} from 'styled-icons/boxicons-regular/PlayCircle'
import BackgroundImg from '../../../assets/saas-images/banner.jpg'


export const BannerWrapper = styled.div`
    background-image:url(${BackgroundImg});
    padding:100px 0px;
    background-size:100%;
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
        padding-right:20px;
    }
    @media ${device.tablet} {
        width:100%;
        text-align:center;
        padding-right:0px;
    }
`;

export const BannerH3 = styled(Commonh3)`
    line-height: 42px;
    margin-bottom:10px;
    color:#fff;
    font-weight:500;
`;

export const BannerH4 = styled(Commonh4)`
    font-size:30px;
    margin-bottom:30px;
    font-weight:500;
    color:#fff;
`;
export const BannerPara = styled(Commonpara)`
    color:#fff;
    margin-bottom:30px;
    opacity:0.8;
`;

export const BannerBtnsWrapper = styled.div`
    
`;

export const BannerBtn = styled(Commonbtn)`
    box-shadow: 0px 0px 13px -2px #135ad1;
    text-decoration:none;
    cursor:pointer;
    :before{
        background: #fff;
    }
    :hover
    {
        color: #000 !important;
    }
    @media ${device.tablet} {
        margin-bottom:30px;
    }
`;

export const BannerVideoBtn = styled.a`
    margin-left:25px;
    color:#fff;
    text-decoration:none;

    :hover{
        text-decoration:none;
        color:#ff850c !important;
    }

    @media ${device.tablet} {
        display:block;
        margin-left:0px;
    }
`;

export const PlayIconCustom = styled(PlayCircle)`
    position: relative;
    font-size: 50px !important;
    vertical-align: middle;
    margin-right: 10px;
    color: #fff !important;
    transition:all .5s;

    ${BannerVideoBtn}:hover &{
        color:#ff850c !important;
        transform: scale(1.1);
        transition:all .5s;
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

export const BannerImg = styled.img`
`;
