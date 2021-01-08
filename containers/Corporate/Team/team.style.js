import styled from 'styled-components';
import {Commonh4,Commonpara} from '../Common/common.style';
import {device} from '../Common/device'
import {SocialFacebook} from 'styled-icons/typicons/SocialFacebook'
import {SocialTwitter} from 'styled-icons/typicons/SocialTwitter'
import {SocialLinkedin} from 'styled-icons/typicons/SocialLinkedin'
import {SocialInstagram} from 'styled-icons/typicons/SocialInstagram'

export const TeamSection = styled.section`
    padding:80px 0px;
    background:#f9f9f9;
    .slick-prev:before, .slick-next:before{
        color:#007dcc;
        font-size:40px;
        opacity:1;
    }
    .slick-prev{
        left:-40px;
    }
    .slick-next{
        right:-20px;
    }
    @media ${device.tablet} {
        .slick-prev{
            left:-7px;
        }
        .slick-next{
            right:12px;
        }
    }
`;

export const TeamSlider = styled.div`
    margin-top:25px;
`;

export const TeamSliderCol = styled.div`
    outline:0;
`;

export const TeamSliderDiv = styled.div`
    box-shadow: 0px 0px 16px 0px #d0d0d0;
    background: #fff;
    border-radius: 10px;
    margin: 20px 15px;
    @media ${device.tablet} {
        margin: 20px 10px;
        box-shadow: 0px 0px 6px 0px #d0d0d0;
    }
`;

export const TeamImgFigure = styled.figure`
    overflow: hidden;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    margin-bottom:30px;

    :hover img{
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
    }

    img{
        width:100%;
        height:320px;
        object-fit:cover;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        backface-visibility: hidden;
        -webkit-transform: scale(1);
        transform: scale(1);
        transition: transform .3s ease-in-out !important;
        -webkit-transition: -webkit-transform .3s ease-in-out !important;
    }
`;

export const TeamDesc = styled.div`
    text-align:center;
    padding-bottom: 30px;
`;

export const TeamName = styled(Commonh4)`
    text-align: center;
    font-size: 24px;
    line-height:24px;
    color:#333;
    margin-bottom:10px;
`;

export const TeamDesignation = styled(Commonpara)`
    text-align: center;
    font-size: 18px;
    color:#007dcc;
    margin-bottom:10px;
`;

export const TeamSocial = styled.a`
    display: inline-block;
    :hover svg{
        transform:rotate(30deg);
        transition:all .5s;
    }
`;

export const InstaIcon = styled(SocialInstagram)`
    width: 32px;
    color: #007dcc;
    padding: 6px;
    border-radius: 100%;
    margin: 0px 8px;
    background: #007dcc33;
    transition:all .5s;
`;

export const LinkedinIcon = styled(SocialLinkedin)`
    width: 32px;
    color: #007dcc;
    padding: 6px;
    border-radius: 100%;
    margin: 0px 8px;
    background: #007dcc33;
    transition:all .5s;
`;

export const TwitterIcon = styled(SocialTwitter)`
    width: 32px;
    color: #007dcc;
    padding: 6px;
    border-radius: 100%;
    margin: 0px 8px;
    background: #007dcc33;
    transition:all .5s;
`;

export const FbIcon = styled(SocialFacebook)`
    width: 32px;
    color: #007dcc;
    padding: 6px;
    border-radius: 100%;
    margin: 0px 8px;
    background: #007dcc33;
    transition:all .5s;
`;

export const NextPrev = styled.div`
    text-align:center;
    margin-top:30px;
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
    margin:0px 0px;
    cursor:pointer;
    transition:all .4s;
    height:24px;
    :hover
    {
        transform:scale(1.1);
        transition:all .4s;
    }
`;

export const NextImg = styled.img`
    width: 50px;
    margin:0px 0px;
    cursor:pointer;
    transition:all .4s;
    height:24px;
    :hover
    {
        transform:scale(1.1);
        transition:all .4s;
    }
`;

export const TeamImg = styled.img`
`;