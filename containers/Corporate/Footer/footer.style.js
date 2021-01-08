import styled from 'styled-components';
import {Commonh4,Commonpara} from '../Common/common.style';
import {device} from '../Common/device'
import {SocialFacebook} from 'styled-icons/typicons/SocialFacebook'
import {SocialTwitter} from 'styled-icons/typicons/SocialTwitter'
import {SocialLinkedin} from 'styled-icons/typicons/SocialLinkedin'
import {SocialInstagram} from 'styled-icons/typicons/SocialInstagram'
import {SocialYoutube} from 'styled-icons/typicons/SocialYoutube'

export const FooterWrapper = styled.footer`
    width:100%;
    background:#007dcc;
    padding:60px 0px;
    @media ${device.tablet} {
        padding-right:10px;
        padding-left:10px;
    }
`;

export const FooterCol = styled.div`
    padding:20px 0px;
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
    padding-right:20px;
`;

export const FooterUlWrapper = styled.div`
    ul{
        padding-left:0px;
        margin-left:0px;
        margin-bottom: 0px;
    }
    a{
        color:#fff !important;
        text-decoration:none;
        font-size:15px;

        :hover{
            text-decoration:underline;
        }
    }
`;

export const FooterLi = styled.li`
    list-style:none;
    margin-bottom:6px;
`;
export const FooterMenu = styled.a`
    color:#fff;
    text-decoration:none;
    font-size:15px;
    :hover
    {
        text-decoration:underline;
    }
`;
export const FooterSocial = styled.a`
    :hover svg{
        transform:rotate(30deg);
        transition:all .5s;
    }
`;
export const BottomFooterWrapper = styled.section`
    width:100%;
    padding:10px 0px;
    background:#1697e9;
    @media ${device.tablet} {
        padding-right:10px;
        padding-left:10px;
        text-align:center;
    }
`;
export const BottomFooterPara = styled.p`
    color:#fff;
    margin-bottom:0px;
    padding:10px 0px;   
    font-size:15px;
`;

export const InstaIcon = styled(SocialInstagram)`
    width: 35px;
    color: #fff;
    padding: 6px;
    border-radius: 100%;
    margin: 0px 8px;
    margin-top: 20px;
    background: #00000044;
    transition:all .5s;
`;
export const LinkedinIcon = styled(SocialLinkedin)`
    width: 35px;
    color: #fff;
    padding: 6px;
    border-radius: 100%;
    margin: 0px 8px;
    margin-top: 20px;
    background: #00000044;
    transition:all .5s;
    
`;
export const TwitterIcon = styled(SocialTwitter)`
    width: 35px;
    color: #fff;
    padding: 6px;
    border-radius: 100%;
    margin: 0px 8px;
    margin-top: 20px;
    background: #00000044;
    transition:all .5s;
`;
export const FbIcon = styled(SocialFacebook)`
    width: 35px;
    color: #fff;
    padding: 6px;
    border-radius: 100%;
    margin-right: 8px;
    margin-top: 20px;
    background: #00000044;
    transition:all .5s;
`;
export const YTIcon = styled(SocialYoutube)`
    width: 35px;
    color: #fff;
    padding: 6px;
    border-radius: 100%;
    margin: 0px 8px;
    margin-top: 20px;
    background: #00000044;
    transition:all .5s;
`;