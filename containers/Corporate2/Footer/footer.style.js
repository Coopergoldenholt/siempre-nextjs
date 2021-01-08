import styled from 'styled-components';
import {Commonh4,Commonpara} from '../Common/common.style';
import {device} from '../Common/device'
import {SocialFacebook} from 'styled-icons/typicons/SocialFacebook'
import {SocialTwitter} from 'styled-icons/typicons/SocialTwitter'
import {SocialLinkedin} from 'styled-icons/typicons/SocialLinkedin'
import {SocialInstagram} from 'styled-icons/typicons/SocialInstagram'
import BackgroundImg from '../../../assets/corporate2-images/footermap.png'

export const FooterCustomContainerfluid = styled.div`
    background:#111;
    background-image: url(${BackgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const FooterSection = styled.footer`
    width:100%;
    padding:40px 0px;

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

export const FooterTitle = styled(Commonh4)`
    color:#fff;
    font-size:26px;
    margin-bottom:25px;
    text-transform:uppercase;
`;

export const FooterPara = styled(Commonpara)`
    color:#fff;
    margin-bottom:5px;
`;

export const FooterLi = styled.li`
    list-style:none;
    margin-bottom:6px;
`;

export const FooterSocial = styled.a`
    margin-right:10px;
`;

export const InstaIcon = styled(SocialInstagram)`
    width: 32px;
    color: #fff;
    padding: 6px;
    border-radius:100%;
    margin: 10px 0px 0px;
    background: rgba(239, 83, 80, 0.4);
    transition:all .5s;
    :hover{
        background: #ef5350;
        color: #fff;
        transform:rotate(45deg);
    }
`;
export const LinkedinIcon = styled(SocialLinkedin)`
    width: 32px;
    color: #fff;
    padding: 6px;
    border-radius:100%;
    margin: 10px 0px 0px;
    background: rgba(239, 83, 80, 0.4);
    transition:all .5s;
    :hover{
        background: #ef5350;
        transform:rotate(45deg);
        color: #fff;
    }
`;
export const TwitterIcon = styled(SocialTwitter)`
    width: 32px;
    color: #fff;
    padding: 6px;
    border-radius:100%;
    margin: 10px 0px 0px;
    background: rgba(239, 83, 80, 0.4);
    transition:all .5s;
    :hover{
        background: #ef5350;
        color: #fff;
        transform:rotate(45deg);
    }
`;
export const FbIcon = styled(SocialFacebook)`
    width: 32px;
    color: #fff;
    padding: 6px;
    border-radius:100%;
    margin: 10px 0px 0px;
    background: rgba(239, 83, 80, 0.4);
    transition:all .5s;
    :hover{
        background: #ef5350;
        color: #fff;
        transform:rotate(45deg);
    }
`;

export const BottomFooterWrapper = styled.section`
    width:100%;
    padding:10px 0px;
    background: rgba(26, 26, 26, 0.5);

    @media ${device.tablet} {
        padding-right:10px;
        padding-left:10px;
    }
`;

export const BottomFooterPara = styled.p`
    color:#fff;
    margin-bottom:0px;
    padding:10px 0px;   
    font-size:15px;

    @media ${device.tablet} {
        text-align:center;
    }
`;