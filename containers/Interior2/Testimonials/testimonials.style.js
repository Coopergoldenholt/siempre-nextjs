import styled from 'styled-components';
import {Commonh4,Commonpara} from '../Common/common.style';
import {device} from '../Common/device'
import {Container} from "react-bootstrap";
import {SectionHeading} from "../Common/common.style";
import BackgroundImg from "../../../assets/interior2-images/testimonial-bg.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
export const TestimonialsSection = styled.section`
    background-image:url(${BackgroundImg});
    padding:80px 0px;
    @media ${device.tablet} {
        display:block;
        padding:80px 10px;
    }
`;

export const SectionHeadingCustom = styled(SectionHeading)`
    color:#fff;
    margin-bottom:60px;
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

export const SliderWrapper = styled.div`
    max-width: 740px;
    margin: auto;
    border-radius: 10px;
    background: #fff;
    padding-right: 40px;
    padding-top: 20px;
    padding-left: 40px;
    padding-bottom: 20px;
    text-align:center;
`;

export const QuoteImg = styled.img`

`;

export const CardOuterWrapper = styled.div`
    outline:0;
    text-align:center;
`;

export const TestimonialHeading = styled(Commonh4)`
    color:#3a3a3a;
    margin-bottom:5px;
    margin-bottom:20px;
    text-align:center;
`;

export const Testimonial = styled(Commonpara)`
    font-size:14px;
    margin-bottom: 6px;
    text-align:center;
`;

export const ProfileLayoutWrapper = styled.div`
    display:inline-block;
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
    border-radius: 100%;
    @media ${device.tablet} {
        width:40px;
    }
`;

export const ProfileNameLayout = styled.div``;

export const ProfileName = styled(Commonh4)`
    color:#3a3a3a;
    font-size:20px;
    margin-bottom:2px;
    text-align:left;
    @media ${device.tablet} {
        font-size:18px;
    }
`;

export const Designation = styled(Commonpara)`
    font-size:14px;
    margin-bottom:5px;
    text-align:left;
`;


export const NextPrev = styled.div`
    text-align:center;
    button{
        border:none;
        background:none;
        outline:none;
    }
`;

export const PrevImg = styled.img`
    margin:20px 0px;
    width: 40px;
    cursor:pointer;
    transition:all .4s;
    :hover
    {
        transform:scale(1.1);
        transition:all .4s;
    }
`;

export const NextImg = styled.img`
    margin:20px 0px;
    width: 40px;
    cursor:pointer;
    transition:all .4s;
    :hover
    {
        transform:scale(1.1);
        transition:all .4s;
    }
`;