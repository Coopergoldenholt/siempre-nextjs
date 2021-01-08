import styled from 'styled-components';
import {device} from '../Common/device'
import {SectionHeading} from '../Common/common.style';
import BackgroundImg from '../../../assets/restaurant-images/newletter-bg.jpg'

export const NewsletterSection = styled.section`
    padding:80px 0px;
    background-image: url(${BackgroundImg});
    @media ${device.tablet} {
        padding:100px 10px;
    }
`;

export const NewsletterHeading = styled(SectionHeading)`
   color:#fff;
`;

export const NewsletterInner = styled.div`
    margin-top:45px;
    @media ${device.tablet} {
        margin-top:30px;
    }
`;
export const Form = styled.form`
    margin-bottom:0px;
`;
export const FormGroup = styled.div`
    margin-bottom:10px;
`;

export const NewsletterForm = styled.div`
    max-width:800px;
    margin:auto;
`;

export const NewsletterInput = styled.input`
    width:100%;
    box-shadow: 0px 0px 2px #e4e4e4;
    border-radius: 4px;
    border:none;
    outline:0;
    margin-bottom:50px;
    padding:15px;
    ::placeholder{
        font-size:16px;
    }
    @media ${device.tablet} {
        width:100%;
    }
`;

export const NewsLetterBtnCol = styled.div`
    width:180px;
    margin: auto;
    padding-bottom: 30px;
`;

export const SubscribeSpanErr = styled.span`
    color: red;
    font-size: 14px;
    max-width: 800px;
    margin: auto;
    display: block;
`;
export const SubscribeSpanSuccess = styled.span`
    color:green;
    font-size: 14px;
    max-width: 800px;
    margin: auto;
    display: block;
`;