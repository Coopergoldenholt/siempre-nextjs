import styled from "styled-components"
import {Commonh3,CommonSubmitbtn} from "../Common/common.style"
import Modal from "react-bootstrap/Modal";
import 'bootstrap/dist/css/bootstrap.min.css';
import { TabList } from 'react-tabs';
import {SocialFacebook} from 'styled-icons/typicons/SocialFacebook'
import {Google} from 'styled-icons/boxicons-logos/Google'
import {SocialTwitter} from 'styled-icons/typicons/SocialTwitter'
import {device} from '../Common/device'
import {Close} from 'styled-icons/material/Close'
import BackgroundImg from '../../../assets/saas-images/login_vector-bg.png'

export const ModalSection = styled.section`
    display:flex;
`;

export const ModalDialog = styled(Modal)`
    z-index: 9999;

    .modal-dialog{
        max-width: 850px;
        margin: 30px auto;
        overflow: hidden;
        border-radius: 10px;

        @media ${device.laptop} {
            margin:20px auto;
            max-width: 720px;
        }

        @media ${device.tablet} {
            margin:20px;
        }
    }

    .modal-body{
        padding: 50px 70px 40px 70px;

        @media ${device.laptop} {
            padding: 30px 30px 20px 30px;
        }
    }
`;

export const ModalLeft = styled.div`
    width:35%;
    background: #f4edff;
    background-image: url(${BackgroundImg});
    background-repeat: no-repeat;
    background-position: -230px 250px;
    background-size: 600px;

    @media ${device.tablet} {
        display:none;
    }
`;

export const ModalLeftHeading = styled(Commonh3)`
    font-size:24px;
    padding:40px;
    color:#424345;
    line-height: 30px;
`;

export const ModalForm = styled.div`
    width:65%;
    @media ${device.tablet} {
        width:100%;
    }
`;

export const CustomTabList = styled(TabList)`
    margin:0px;
    .react-tabs__tab--selected {
        background: transparent;
        border-color: transparent;
        color: #ff850c;
        border-radius: 0;
        border: none;
        border-bottom: 2px solid #ff8a16 !important;
    }
    .react-tabs__tab{
        border: none;
        border-bottom: 2px solid #ebebeb;
        width: 50%;
        text-align: center;
        font-size: 22px;
    }
    .react-tabs__tab:focus {
        box-shadow:none;
        border-color: #ff8a16;
        outline: none;
        border-bottom: 2px solid #ff8a16 !important;
    }
    .react-tabs__tab{
        position:inherit !important;
    }

    @media ${device.tablet} {
        .react-tabs__tab{
            font-size: 20px;
        }
    }

    @media ${device.tablet} {
        .react-tabs__tab{
            font-size: 18px;
        }
    }
`;

export const LoginWrapper = styled.div`
    padding-top:30px;
`;

export const FormGroup = styled.div`
    margin-bottom:25px;
`;

export const LoginName = styled.input`
    width:100%;
    background:#f5f5f5;
    border:1px solid #ebebeb;
    outline:0;
    font-size:15px;
    padding: 15px 20px;
    border-radius:4px;
    ::placeholder{
        font-size:15px;
    }
`;

export const LoginPassword = styled.input`
    width:100%;
    background:#f5f5f5;
    border:1px solid #ebebeb;
    outline:0;
    font-size:15px;
    border-radius:4px;
    padding: 15px 20px;
    ::placeholder{
        font-size:15px;
    }
`;

export const ForgotPasswordLink = styled.a`
    color:#565759;
    text-decoration:none;
    :hover{
        color: #ff850c;
    }

    @media ${device.mobileXL} {
        font-size:14px;
    }
`;

export const TextRight = styled.div`
    text-align:right;
    
    @media ${device.tablet} {
        text-align:right;    
    }

    @media ${device.mobileL} {
        text-align:left; 
    }
`;

export const SignupLink = styled.a`
    color:#565759;
    text-decoration:none;
    :hover{
        color: #ff850c;
    }

    @media ${device.mobileXL} {
        font-size:14px;
    }
`;

export const LoginSubmit = styled(CommonSubmitbtn)`
    width:100%;
    background: #ff850c;
    border: none;
    padding: 15px;
    border-radius: 5px;
    text-transform:uppercase;
    color:#fff;
    cursor:pointer;
`;

export const OrLogin = styled.p`
    text-align: center;
    color: #565759;
    font-size: 16px;
`;

export const RegisterSocialUl = styled.ul`
    display:flex;
    margin:0px;
`;

export const RegisterSocialLi = styled.li`
    flex: 1;
    list-style:none;
    margin: 0px 8px;
    text-align:center;
`;

export const RegisterSocialLink = styled.a`
    
`;

export const SignupWrapper = styled.div`
    padding-top:30px;
`;

export const CloseIcon = styled(Close)`
    height: 20px;
    color: #666;
    position:absolute;
    transition:all .5s;
    top: 15px;
    right: 15px;
    cursor:pointer;
    :hover{
        color:#111;
    }
`;

export const GoogleIcon = styled(Google)`
    width: 80%;
    height: 40px;
    color: #fff;
    padding: 6px;
    border-radius:4px;
    background: #9d0b0e;
    transition:all .5s;
    :hover{
        opacity:.7;
    }
`;

export const TwitterIcon = styled(SocialTwitter)`
    width: 80%;
    height: 40px;
    color: #fff;
    padding: 6px;
    border-radius:4px;
    background: #00adef;
    transition:all .5s;
    :hover{
        opacity:.7;
    }
`;

export const FbIcon = styled(SocialFacebook)`
    width: 80%;
    height: 40px;
    color: #fff;
    padding: 6px;
    border-radius:4px;
    background: #3949ab;
    transition:all .5s;
    :hover{
        opacity:.7;
    }
`;
