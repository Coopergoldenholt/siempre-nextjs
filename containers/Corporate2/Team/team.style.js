import styled from 'styled-components';
import {Commonh4,Commonpara} from '../Common/common.style';
import {device} from '../Common/device'
import {SocialFacebook} from 'styled-icons/typicons/SocialFacebook'
import {SocialTwitter} from 'styled-icons/typicons/SocialTwitter'
import {SocialLinkedin} from 'styled-icons/typicons/SocialLinkedin'
import {SocialInstagram} from 'styled-icons/typicons/SocialInstagram'

export const TeamSection = styled.section`
    padding:70px 0px;

    .slick-prev:before, .slick-next:before{
        color:#ef5350;
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
        margin: 20px 10px
        box-shadow: 0px 0px 10px 0px #d0d0d0;
    }
`;

export const TeamDesc = styled.div`
    text-align:center;
    padding: 20px;
`;

export const TeamImgFigure = styled.figure`
    height: 200px;
    width: 200px;
    overflow: hidden;
    margin:20px auto;
    border-radius: 100%;
    :hover img{
        -webkit-transform: scale(1.12);
        transform: scale(1.12);
    }
    @media ${device.tablet} {
        height: 120px;
        width: 120px;
    }

    img{
        width:100%;
        height:100%;
        object-fit:cover;
        backface-visibility: hidden;
        -webkit-transform: scale(1);
        transform: scale(1);
        transition: transform .5s ease-in-out !important;
        -webkit-transition: -webkit-transform .5s ease-in-out !important;
    }
`;

export const TeamName = styled(Commonh4)`
    text-align: center;
    font-size: 30px;
    color:#333;
    margin-bottom:15px;
`;

export const TeamDesignation = styled(Commonpara)`
    text-align: center;
    font-size: 20px;
    color:#565759;
    margin-bottom:15px;
`;

export const TeamSocial = styled.a`
    display: inline-block;
    margin-bottom:20px;
`;

export const InstaIcon = styled(SocialInstagram)`
    width: 32px;
    color: #ef5350;
    padding: 6px;
    border-radius:100%;
    margin: 0px 8px;
    background: rgba(239, 83, 80, 0.2);
    transition:all .5s;
    :hover{
        background: #ef5350;
        color: #fff;
        transform:rotate(45deg);
    }
`;
export const LinkedinIcon = styled(SocialLinkedin)`
    width: 32px;
    color: #ef5350;
    padding: 6px;
    border-radius:100%;
    margin: 0px 8px;
    background: rgba(239, 83, 80, 0.2);
    transition:all .5s;
    :hover{
        background: #ef5350;
        transform:rotate(45deg);
        color: #fff;
    }
`;
export const TwitterIcon = styled(SocialTwitter)`
    width: 32px;
    color: #ef5350;
    padding: 6px;
    border-radius:100%;
    margin: 0px 8px;
    background: rgba(239, 83, 80, 0.2);
    transition:all .5s;
    :hover{
        background: #ef5350;
        color: #fff;
        transform:rotate(45deg);
    }
`;
export const FbIcon = styled(SocialFacebook)`
    width: 32px;
    color: #ef5350;
    padding: 6px;
    border-radius:100%;
    margin: 0px 8px;
    background: rgba(239, 83, 80, 0.2);
    transition:all .5s;
    :hover{
        background: #ef5350;
        color: #fff;
        transform:rotate(45deg);
    }
`;

export const NextPrev = styled.div`
    text-align:center;
    margin-top:20px;
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

export const TeamSliderImg = styled.img`
`;