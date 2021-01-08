import styled from 'styled-components';
import {Commonh4,Commonpara} from '../Common/common.style';
import {device} from '../Common/device'
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const TestimonialsSection = styled.section`
    padding:70px 0px;
    background:#f5f5f5;
    @media ${device.tablet} {
        display:block;
        padding-left:0px;
        padding-right:0px;
        padding-top:50px;
        padding-bottom:50px;
    }
`;

export const TestimonialsContainer = styled(Container)`
    .slick-dots li{
        margin-right:5px;
        margin-left:5px;
        width:auto;
    }

    .slick-active span{
        height:5px !important;
        opacity:1 !important;
        width:30px !important;
    }
    @media ${device.tablet} {
        width:100%;
    }
`;

export const CardOuterWrapper = styled.div`
    padding-right: 40px;
    padding-top: 45px;
    padding-left: 40px;
    padding-bottom: 45px;
    outline:0;

    @media ${device.tablet} {
        width:100%;
        padding-left:10px;
        padding-right:10px;
        padding-top: 25px;
    }
`;

export const Card = styled.div`
    background:#fff;
    padding: 35px 35px;
    box-shadow: 0px 0px 10px 0px #d0d0d0;

    @media ${device.tablet} {
        padding: 20px 20px;
    }
`;

export const TestimonialHeading = styled(Commonh4)`
    color:#3a3a3a;
    margin-bottom:5px;
    text-align:left;
    margin-bottom:20px;
`;

export const Testimonial = styled(Commonpara)`
    font-size:14px;
    margin-bottom: 6px;
`;

export const CardProfileLayout = styled.div`
    display:flex;
    align-items:center;
    margin-top: 20px;
`;

export const ProfilePicLayout = styled.div`
`;

export const ProfilePic = styled.img`
    width:50px;
    margin-right:10px;
    margin-bottom: 10px;
    @media ${device.tablet} {
        width:40px;
    }
`;

export const ProfileNameLayout = styled.div``;

export const ProfileName = styled(Commonh4)`
    color:#3a3a3a;
    margin-bottom:5px;
    text-align:left;
    @media ${device.tablet} {
        font-size:18px;
    }
`;

export const Designation = styled(Commonpara)`
    font-size:14px;
    margin-bottom:5px;
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
    margin:0px 5px;
    cursor:pointer;
    height:24px;
    transition:all .4s;
    :hover
    {
        transform:scale(1.1);
        transition:all .4s;
    }

    @media ${device.tablet} {
        height:20px;
    }
`;

export const NextImg = styled.img`
    margin:0px 5px;
    cursor:pointer;
    transition:all .4s;
    height:24px;
    :hover
    {
        transform:scale(1.1);
        transition:all .4s;
    }
    @media ${device.tablet} {
        height:20px;
    }   
`;