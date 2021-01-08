import styled from 'styled-components';
import {SectionHeading,Commonpara, Commonh4} from '../Common/common.style';
import {device} from '../Common/device'

export const TestimonialsSection = styled.section`
    padding:80px 0px;
    background:#007dcc;
    .slick-current {
        transition:all 1s;
        transform:scale(1) !important;
    }
    .slick-slide
    {
        transform:scale(0.80);
        transition:all 1s;
    }
    .slick-current div{
        opacity:1;
    }
    @media ${device.tablet} {
        padding-right: 25px;
        padding-left: 25px;
    }
`;

export const TestimonialWrapper = styled.div`
    display:flex;
    align-items: center;

    @media ${device.minlaptopL} {
        max-width:1140px;
        margin:0px auto;
    }

    @media ${device.tablet} {
        flex-direction:column;
        max-width: 540px;
        margin:auto;
    }
`;

export const TestimonialsLeftCol = styled.div`
    padding-left: 15px;
    width:40%;
    
    @media ${device.laptopL} {
        margin-left: calc(50% - 570px);
    }

    @media ${device.laptopM} {
        margin-left: calc(50% - 480px);
    }

    @media ${device.laptop} {
        margin-left: calc(50% - 360px);
    }

    @media ${device.tablet} {
        width:100%;
        margin:0px auto;
        padding-left:10px;
        padding-right:10px;
    }
`;

export const TestimonialHeading = styled(SectionHeading)`
    color:#fff;
    text-align:left;
`;

export const TestimonialPara = styled(Commonpara)`
    color:#fff;
    text-align:left;
    margin-top:40px;
`;

export const TestimonialsRightCol = styled.div`
    width:60%;
    padding-left: 70px;

    .slick-dots li{
        margin-right:5px;
        margin-left:5px;
        width:auto;
        height:auto;
    }

    .slick-active span{
        height:5px !important;
        opacity:1 !important;
        width:30px !important;
    }
    @media ${device.tablet} {
        width:100%;
        padding-left:0px;
        padding-right:0px;
    }
`;

export const CardOuterWrapper = styled.div`
    padding-right: 40px;
    padding-bottom: 40px;
    outline:0;
    @media ${device.tablet} {
        width:100%;
        padding-left:0px;
        padding-right:0px;
    }
`;

export const Card = styled.div`
    background:#fff;
    border-radius:10px;
    padding: 30px;
    opacity: .4;
    @media ${device.tablet} {
        padding: 20px 20px;
    }
`;

export const CardProfileLayout = styled.div`
    display:flex;
    align-items:center;
`;

export const ProfilePicLayout = styled.div`
    img{
        border-radius:100%;
    }
`;

export const ProfilePic = styled.img`
    width:70px;
    height:70px;
    margin-right:15px;
    margin-bottom:20px;

    @media ${device.tablet} {
        width:50px;
        margin-right:10px;
    }
`;

export const ProfileNameLayout = styled.div``;

export const ProfileName = styled(Commonh4)`
    color:#3a3a3a;
    font-size: 27px;
    @media ${device.tablet} {
        font-size:20px;
    }
`;

export const Testimonial = styled(Commonpara)`
    margin-bottom: 6px;
    font-size:17px;
`;
