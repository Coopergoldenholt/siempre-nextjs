import styled from 'styled-components';
import {Commonh4,Commonpara} from '../Common/common.style';
import {device} from '../Common/device'
import {SocialFacebook} from 'styled-icons/typicons/SocialFacebook'
import {SocialTwitter} from 'styled-icons/typicons/SocialTwitter'
import {SocialLinkedin} from 'styled-icons/typicons/SocialLinkedin'
import {SocialInstagram} from 'styled-icons/typicons/SocialInstagram'

export const FooterSection = styled.footer`
    width:100%;
    background:#5f27fa;
    padding:60px 0px 0px;

    @media ${device.tablet} {
        padding-left:10px;
        padding-right:10px;
    }
`;

export const FooterCol = styled.div`
    padding:20px 0px;

    ul{
        margin-left:0px;
    }
    a{
        text-decoration:none;
        color:#fff;
        :hover{
            text-decoration:underline;
        }
    }
`;

export const FooterLogo = styled.img`
    max-width: 170px;

    @media ${device.laptop} {
        max-width: 140px;
    }

    @media ${device.tablet} {
        max-width: 170px;
    }
`;

export const FooterTitle = styled(Commonh4)`
    color:#fff;
    font-size:26px;
    margin-bottom:25px;

    @media ${device.laptop} {
        font-size:24px;
    }
`;

export const FooterPara = styled(Commonpara)`
    color:#fff;
    font-size:14px;
    margin-bottom:5px;
`;

export const FooterLi = styled.li`
    list-style:none;
    margin-bottom:6px;
`;

export const FooterSocial = styled.a`
    margin-right:5px;
`;

export const FooterAddWrapper = styled.div`
    display:flex;
    align-items:top;
`;

export const FooterAddLeft = styled.div`
    width:15%;
    
`;

export const FooterAddRight = styled.div`
    width:85%;
`;

export const FooterAddImg = styled.img`
    margin-bottom: 0px;
    width:35px;
`;

export const FooterAddText = styled(Commonpara)`
    color:#fff;
    font-size:14px;
    margin-left:10px;
`;

export const BottomFooterWrapper = styled.section`
    width:100%;
    padding:20px 0px;
    background:#5f27fa;
`;
export const BottomFooterPara = styled.p`
    color:#fff;
    margin-bottom:0px;
    padding:10px 0px;   
    font-size:15px;

    @media ${device.tablet} {
        text-align:center;
        margin-bottom:10px;
    }
`;

export const BottomFooterRight = styled.div`
    text-align:right;
    @media ${device.tablet} {
        text-align:center;
    }
`;

export const InstaIcon = styled(SocialInstagram)`
    width: 32px;
    color: #5f27fa;
    padding: 6px;
    border-radius:4px;
    margin: 0px 8px;
    background: #fff;
    transition:all .5s;
    :hover{
        border-radius:100%;
    }
`;

export const LinkedinIcon = styled(SocialLinkedin)`
    width: 32px;
    color: #5f27fa;
    padding: 6px;
    border-radius:4px;
    margin: 0px 8px;
    background: #fff;
    transition:all .5s;
    :hover{
        border-radius:100%;
    }
`;

export const TwitterIcon = styled(SocialTwitter)`
    width: 32px;
    color: #5f27fa;
    padding: 6px;
    border-radius:4px;
    margin: 0px 8px;
    background: #fff;
    transition:all .5s;
    :hover{
        border-radius:100%;
    }
`;

export const FbIcon = styled(SocialFacebook)`
    width: 32px;
    color: #5f27fa;
    padding: 6px;
    border-radius:4px;
    margin: 0px 8px;
    background: #fff;
    transition:all .5s;
    :hover{
        border-radius:100%;
    }
`;