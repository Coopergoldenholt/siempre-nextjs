import styled from 'styled-components';
import {Commonh4,Commonpara,SectionHeading} from '../Common/common.style';
import {Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {device} from '../Common/device'

export const ContactWrapper = styled.section`
    padding:70px 0px;
    background:#f9fafc;
    @media ${device.tablet} {
        padding-left:10px;
        padding-right:10px;
    }
`;
export const ContactRow = styled(Row)`
    align-items:center;
    box-shadow: 0px 0px 12px #e4e4e4;
    background:#fff;
    padding:55px 40px;
    border-radius:10px;
    margin-right:0px !important;
    margin-left:0px !important;

    @media ${device.tablet} {
        padding: 30px 0px 5px;
    }
`;

export const ContactInner = styled.div`
    margin-top:10px;
`;

export const ContactLeft = styled.div`
    padding-right:100px;

    @media ${device.laptop} {
        padding-right:20px;
    }
    @media ${device.tablet} {
        padding-right:10px;
        padding-left:10px;
        padding-bottom:30px;
    }
`;
export const InputField = styled.input`
    width:100%;
    border:none;
    border-radius:6px;
    background:#f6f6f6;
    padding:15px;
    outline:0;
    ::placeholder
    {
        font-size:16px;
        color: #7a7f83;
    }
`;
export const TextArea = styled.textarea`
    width:100%;
    border:none;
    border-radius:6px;
    padding:15px;
    height:180px;
    font-size:16px;
    background:#f6f6f6;
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
    padding:11px;
    border-radius:25px;
    transition:all .5s;
    background: #0071e3;
    :hover
    {
        background: #363636;
    }
    
`;
  
export const ContactRight = styled.div`
    @media ${device.tablet} {
        padding-right:10px;
        padding-left:10px;
    }
`;
export const ContactRightRow = styled.div`
    margin:25px 0px;
    display:flex;
    align-items:center;

`;
export const ContactRightImgHolder = styled.div`
    width:17%;
    @media ${device.tablet} {
        margin-right:10px;
    }
`;
export const ContactRightImg = styled.img`
    margin-right:15px;
    margin-bottom: 0px;
    vertical-align: middle;
`;
export const ContactRightTextHolder = styled.div`
    width:83%;
`;
export const ContactRightText = styled(Commonpara)`
    margin-bottom:0px;
    font-weight:600;
`;
export const ContactSpanErr = styled.span`
    color:red;
    font-size:14px;
`;

export const FormGroup = styled.div`
    margin-bottom:30px;
`;

export const ContactSpanSuccess = styled.span`
    color:green;
    font-size:14px;
`;

export const ContactHeadingWrapper = styled.div`
    margin-bottom:40px;
`;

export const Heading = styled(SectionHeading)`

`;

export const SubHeading = styled(Commonh4)`

`;
