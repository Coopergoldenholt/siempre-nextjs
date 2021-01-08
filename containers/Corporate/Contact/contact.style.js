import styled from 'styled-components';
import {Commonh4,Commonpara} from '../Common/common.style';
import {Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {device} from '../Common/device'
import {Send} from 'styled-icons/material/Send'

export const ContactSection = styled.section`
    padding:80px 0px;
    background:#f9f9f9;
    @media ${device.tablet} {
        padding-right: 10px;
        padding-left: 10px;
    }
`;

export const ContactInner = styled.div`
    margin-top:45px;
`;

export const ContactRow = styled(Row)`
    align-items:center;
`;

export const ContactLeft = styled.div`
    padding-right:100px;

    @media ${device.laptop} {
        padding-right:50px;
    }
    @media ${device.tablet} {
        padding-bottom:50px;
        padding-right:0px;
    }
`;

export const Form = styled.form`
    margin-bottom:0px;
`;

export const FormGroup = styled.div`
    margin-bottom:30px;
`;

export const InputField = styled.input`
    width:100%;
    border:none;
    border-radius:6px;
    box-shadow: 0px 0px 12px #e4e4e4;
    padding:15px;
    outline:0;
    ::placeholder
    {
        font-size:16px;
        color: #7a7f83;
    }
`;

export const ContactSpanErr = styled.span`
    color:red;
    font-size:14px;
`;

export const TextArea = styled.textarea`
    width:100%;
    border:none;
    border-radius:6px;
    box-shadow: 0px 0px 12px #e4e4e4;
    padding:15px;
    height:180px;
    outline:0;
    ::placeholder
    {
        font-size:16px;
        color: #7a7f83;
    }
`;
export const SubmitBtn = styled.button`
    display:block;
    width:100%;
    font-size:18px;
    color:#fff;
    outline:0;
    cursor:pointer;
    border:none;
    padding:15px;
    border-radius:6px;
    transition:all .5s;
    background:#007dcc;
    :hover
    {
        background:#317eff;
    }
`;

export const SendIcon = styled(Send)`
    width: 25px;
    left: 10px;
    position: relative;
    transition:all .5s;

    ${SubmitBtn}:hover &{
        left:20px;
        transition:all .5s;
    }
`;

export const ContactSpanSuccess = styled.span`
    color:green;
    font-size:14px;
`;

export const ContactRight = styled.div`
`;

export const ContactRightHeading = styled(Commonh4)`
    font-size:34px;
    margin-bottom:25px;
    text-transform:uppercase;
`;  

export const ContactRightPara = styled(Commonpara)`
`;

export const ContactRightRow = styled.div`
    margin:25px 0px;
    display:flex;
    align-items:center;
`;

export const ContactRightImgHolder = styled.div`
    width:12%;
    @media ${device.tablet} {
        width:15%;
    }
`;

export const ContactRightImg = styled.img`
    margin-right:15px;
    margin-bottom: 0px;
    vertical-align: middle;
`;

export const ContactRightTextHolder = styled.div`
    width:88%;
    @media ${device.tablet} {
        width:85%;
    }
`;

export const ContactRightText = styled(Commonpara)`
    margin-bottom:0px;
`;
