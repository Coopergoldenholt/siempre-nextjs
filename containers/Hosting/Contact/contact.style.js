import styled from 'styled-components';
import {Commonpara,SectionHeading,Commonbtn} from '../Common/common.style'
import {device} from '../Common/device'
import BackgroundImg from '../../../assets/hosting-images/contact-bg.jpg'

export const ContactSection = styled.section`
    padding: 100px 0px;
    background: #dedede;
    background-image: url(${BackgroundImg});
    @media ${device.tablet} {
        padding:80px 10px;
    }
`;

export const HeadingWrapper = styled.section`
    margin-bottom:70px;
    @media ${device.tablet} {
        margin-bottom:60px;
    }
`;

export const Heading = styled(SectionHeading)`
    color:#fff;
`;

export const ContactInner = styled.div`
    background: #fff;
    max-width: 740px;
    margin: auto;
    border-radius: 15px;
    padding: 40px;
    @media ${device.tablet} {
        padding:30px;
    }
`;

export const FormGroup = styled.div`
    margin-bottom:30px;
`;

export const InputText = styled.input`
    width: 100%;
    background: #f5f5f5;
    border: none;
    padding: 8px 16px;
    outline:0;
    border-radius: 5px;
    font-size: 15px;
`;

export const ContactSpanErr = styled.span`
    color:red;
    font-size:14px;
`;

export const TextareaMessage = styled.textarea`
    width: 100%;
    background: #f5f5f5;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    height:150px;
    font-size: 15px;
    outline:0;
`;

export const TextCenter = styled.div`
    text-align:center;
`;

export const SubmitBtn = styled(Commonbtn)`
    font-size:15px;
    font-weight:bold;
`;

export const ContactSpanSuccess = styled.span`
    color:green;
    font-size:14px;
`;

export const AddressWrapper = styled.div`
    padding-top:30px;
    max-width: 740px;
    margin: auto;
    border-radius: 15px;
`;

export const AddressCol = styled.div`
    display:flex;
    margin-top:20px;
    align-items:center;
`;

export const IconHolder = styled.div`
    width: 20%;
    line-height:0px;
    @media ${device.tablet} {
        margin:0px;
        width: 15%;
    }
`;

export const AddressIcon = styled.img`
    margin-bottom:0px;
    width: 50px;
`;

export const TextHolder = styled.div`
    width: 80%;
    @media ${device.tablet} {
        width: 85%;
    }
`;

export const AddressText = styled(Commonpara)`
    color:#fff;
    font-eize:18px;
    margin-bottom:0px;
    margin-left:10px;
`;