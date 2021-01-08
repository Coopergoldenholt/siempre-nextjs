import styled from 'styled-components';
import {Commonpara} from '../Common/common.style';
import {Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {device} from '../Common/device'

export const ContactSection = styled.section`
    padding:70px 0px;
    background:#f8f8f8;
    @media ${device.tablet} {
        padding-right: 10px;
        padding-left: 10px;
    }
    form{
        margin-bottom:0px;
    }
`;

export const ContactInner = styled.div`
    margin-top:45px;
    background:#fff;
    box-shadow: 0px 0px 12px #e4e4e4;
    padding:80px 60px;

    @media ${device.tablet} {
        padding:30px;
        margin-top:25px;
    }
`;

export const ContactRow = styled(Row)`
    align-items:center;
`;

export const ContactLeft = styled.div`
    padding-right:50px;

    @media ${device.laptop} {
        padding-right:30px;
    }
    @media ${device.tablet} {
        padding-bottom:50px;
        padding-right:0px;
    }
`;

export const FormGroup = styled.div`
    margin-bottom:30px;
`;

export const InputField = styled.input`
    width:100%;
    border:none;
    padding:8px 10px;
    outline:0;
    font-size:14px;
    background:#f6f6f6;
    ::placeholder
    {
        font-size:14px;
        color: #000;
    }
`;

export const ContactSpanErr = styled.span`
    color:red;
    font-size:14px;
`;

export const TextArea = styled.textarea`
    width:100%;
    border:none;
    padding:8px 10px;
    outline:0;
    font-size:14px;
    background:#f6f6f6;
    height:180px;
    outline:0;
    ::placeholder
    {
        font-size:14px;
        color: #000;
    }
`;

export const ContactSpanSuccess = styled.span`
    color:green;
    font-size:14px;
`;

export const SubmitBtn = styled.button`
    display:block;
    width:100%;
    font-size:16px;
    color:#fff;
    outline:0;
    cursor:pointer;
    border:none;
    padding:8px 15px;
    transition:all .5s;
    background:#f26522;
    :hover
    {
        background: #d44d0d;
    }
`;

export const ContactRight = styled.div`
`;

export const ContactRightRow = styled.div`
    margin:25px 0px;
    display:flex;
    align-items:center;
`;

export const ContactRightImgHolder = styled.div`
    width:22%;
    @media ${device.tablet} {
        width:30px;
        margin-right: 10px;
    }
`;

export const ContactRightImg = styled.img`
    margin-right:15px;
    margin-bottom: 0px;
    vertical-align: middle;
    height:62px;
`;

export const ContactRightTextHolder = styled.div`
    width:78%;
    
    @media ${device.laptop} {
        padding-left:10px;
    }
    @media ${device.tablet} {
        padding-left:0px;
        width:78%;
    }
`;

export const ContactRightText = styled(Commonpara)`
    margin-bottom:0px;
    color: #313131;
    font-weight: bold;
    font-size: 15px;
`;