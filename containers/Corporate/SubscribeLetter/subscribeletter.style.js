import styled from 'styled-components';
import {device} from '../Common/device'
import {Send} from 'styled-icons/material/Send'

export const NewsletterSection = styled.section`
    padding:100px 0px;
    background:#f9f9f9;
    @media ${device.tablet} {
        padding:100px 10px;
    }
`;

export const NewsletterInner = styled.div`
    margin-top:45px;
`;

export const Form = styled.form`
    margin-bottom:0px;
`;

export const FormGroup = styled.div`
`;

export const NewsletterForm = styled.div`
    display:flex;
    max-width:800px;
    margin:auto;
`;

export const NewsletterInput = styled.input`
    width:75%;
    box-shadow: 0px 0px 12px #e4e4e4;
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
    width:25%;
    border:none;
    background:#007dcc;
    line-height: 32px;
    color:#fff;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    cursor:pointer;
    :hover
    {
        background:#317eff;
    }
    @media ${device.tablet} {
        width:30%;
    }
    
    @media ${device.mobileM} {
        svg{
            display:none;
        }
    }
`;

export const SendIcon = styled(Send)`
    width: 25px;
    left: 10px;
    position: relative;
    transition:all .5s;

    ${NewsletterSubmit}:hover &{
        left:20px;
        transition:all .5s;
    }
    @media ${device.tablet} {
        left: 5px;
        width:25px;
        ${NewsletterSubmit}:hover &{
            left:15px;
        }
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