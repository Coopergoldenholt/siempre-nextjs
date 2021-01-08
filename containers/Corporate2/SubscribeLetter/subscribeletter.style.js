import styled from 'styled-components';
import {device} from '../Common/device'
import {SectionHeading} from '../Common/common.style';
import BackgroundImg from '../../../assets/corporate2-images/newsletter-bg.jpg'

export const NewsletterSection = styled.section`
    padding:70px 0px;
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
`;

export const Form = styled.form`
    margin-bottom:0px;
`;

export const FormGroup = styled.div`
    margin-bottom:0px;
`;

export const NewsletterForm = styled.div`
    display:flex;
    max-width:800px;
    margin:auto;
`;

export const NewsletterInput = styled.input`
    width:85%;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border:none;
    outline:0;
    padding:15px;
    ::placeholder{
        font-size:16px;
    }
    @media ${device.tablet} {
        width:70%;
    }
`;

export const NewsletterSubmit = styled.button`
    width:15%;
    border:none;
    background:#ef5350;
    color:#fff;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    cursor:pointer;
    transition:all .3s;
    :hover
    {
        background:#f53733;
        transition:all .3s;
    }
    @media ${device.tablet} {
        width:30%;
    }
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