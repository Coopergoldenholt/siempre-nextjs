import styled from 'styled-components';
import {Commonh4,Commonpara} from '../Common/common.style';
import {device} from '../Common/device'
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {QuoteAltLeft} from 'styled-icons/boxicons-solid/QuoteAltLeft';


export const TestimonialsSection = styled.section`
    padding:70px 0px;
    background:#f9f9f9;
    
    @media ${device.tablet} {
        display:block;
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
    padding-right: 30px;
    padding-top: 45px;
    padding-left: 30px;
    padding-bottom: 40px;
    outline:0;

    @media ${device.tablet} {
        width:100%;
        padding-left:30px;
        padding-right:30px;
        padding-top: 45px;
    }
`;

export const Card = styled.div`
    background:#fff;
    padding: 25px 25px;
    border-radius:10px;
    box-shadow: 0px 7px 38px 0px #d0d0d0;

    @media ${device.tablet} {
        box-shadow: 0px 7px 38px 0px #d0d0d0;
    }

    ::after{
        content: "";
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 30px 42px 0 1px;
        border-color: #ffffff transparent transparent transparent;
        position: relative;
        top: 70px;
    }

    @media ${device.tablet} {
        padding: 20px 20px;
    }
`;

export const LeftQuote = styled(QuoteAltLeft)`
    width: 40px;
    color:#565658;
`;

export const Testimonial = styled(Commonpara)`
    font-size:14px;
    margin-bottom: 6px;
`;

export const CardProfileLayout = styled.div`
    display:flex;
    align-items:center;
    margin-top: 40px;
`;

export const ProfilePicLayout = styled.div`
`;

export const ProfilePic = styled.img`
    width:50px;
    margin-right:10px;
    margin-bottom: 10px;
    border-radius:100%;
    @media ${device.tablet} {
        width:40px;
    }
`;

export const ProfileNameLayout = styled.div``;

export const ProfileName = styled(Commonh4)`
    color:#3a3a3a;
    margin-bottom:5px;
    line-height:15px;
    text-align:left;
    @media ${device.tablet} {
        font-size:18px;
        line-height:12px;
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
    width: 50px;
    cursor:pointer;
    transition:all .4s;
    :hover
    {
        transform:scale(1.1);
        transition:all .4s;
    }
`;

export const NextImg = styled.img`
    margin:0px 5px;
    width: 50px;
    cursor:pointer;
    transition:all .4s;
    :hover
    {
        transform:scale(1.1);
        transition:all .4s;
    }
`;