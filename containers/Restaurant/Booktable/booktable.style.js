import styled from 'styled-components';
import {Commonpara,SectionHeading} from '../Common/common.style';
import {Row} from "react-bootstrap";
import {device} from '../Common/device';
import DatePicker from 'react-datepicker';
import 'bootstrap/dist/css/bootstrap.min.css';

export const BookTableSection = styled.section`
    padding:80px 0px;
    @media ${device.tablet} {
        padding-right:10px;
        padding-left: 10px;
    }
`;

export const BookTableCustomRow = styled(Row)`
    align-items:center;
`;

export const BookTableLeft = styled.div`
    margin-right:50px;
    @media ${device.laptop} {
        margin-right:0px;
    }
    @media ${device.tablet} {
        margin-right:0px;
    }
`;

export const BookTableLeftHeading = styled(SectionHeading)`
    text-align:left;
    font-size: 70px;
    margin-bottom:30px;
`;

export const BookTableLeftPara = styled(Commonpara)`

`;

export const BookTableRight = styled.div`
    margin-left:50px;
    padding:40px;
    background:#fff;
    box-shadow: 0px 0px 17px 1px #ececec;
    border-radius:10px;

    .rc-time-picker{
        width:100%;
    }

    .rc-time-picker-input{
        padding: 23px 20px !important;
        background: #f7f7f7 !important;
        font-size: 14px !important;
        color: #000000de !important;
        border:none !important;
        border-radius:0px;
    }
    @media ${device.laptop} {
        margin-left:0px;
        padding:30px;
    }
    @media ${device.tablet} {
        margin-left:0px;
        padding:20px;
    }
`;

export const FormGroup = styled.div`
    margin-bottom:30px;

    .react-datepicker-wrapper{
        width:100%;
    }
`;

export const NameInput = styled.input`
    width: 100%;
    outline:0;
    background:#f7f7f7;
    padding: 10px 20px;
    border: none;
    border-radius:2px;
    font-size:14px;
    ::placeholder
    {
        font-size:14px;
    }
`;

export const BookTableSpanErr = styled.span`
    color:red;
    font-size:14px;
`;

export const DateInput = styled(DatePicker)`
    width: 100%;
    outline:0;
    border-radius:2px;
    padding: 10px 20px;
    background:#f7f7f7;
    font-size:14px;
    border: none;   
    ::placeholder{
        font-size:14px;
    }
`;

export const TextareaMsg = styled.textarea`
    width: 100%;
    outline:0;
    border-radius:2px;
    padding: 10px 20px;
    background:#f7f7f7;
    font-size:14px;
    border: none;
    height:150px;
    ::placeholder{
        font-size:14px;
    }
`;

export const BookTableSpanSuccess = styled.span`
    color:green;
    font-size:14px;
`;