import styled from 'styled-components';
import {Commonh4,Commonpara} from '../Common/common.style';
import {SocialFacebook} from 'styled-icons/typicons/SocialFacebook'
import {SocialTwitter} from 'styled-icons/typicons/SocialTwitter'
import {SocialLinkedin} from 'styled-icons/typicons/SocialLinkedin'
import {SocialInstagram} from 'styled-icons/typicons/SocialInstagram'
import {device} from '../Common/device';

export const FooterSection = styled.footer`
    width:100%;
    background:#fff;
    padding:60px 0px 0px;

    .container{
        border-bottom:1px solid #ebebeb;
    }

    @media ${device.tablet} {
        padding-right:10px;
        padding-left: 10px;
    }
`;

export const FooterCol = styled.div`
    padding:20px 0px;
`;

export const FooterTitle = styled(Commonh4)`
    color:#202020;
    font-size:26px;
    margin-bottom:25px;
`;

export const FooterPara = styled(Commonpara)`
    color:#5c5c5c;
    font-size:14px;
    margin-bottom:5px;
`;

export const FooterUl = styled.ul`
    padding-left:0px;
    margin-left:0px;
`;

export const FooterLi = styled.li`
    list-style:none;
    margin-bottom:6px;
`;

export const FooterMenu = styled.a`
    color:#5c5c5c;
    text-decoration:none;
    font-size:14px;
    :hover
    {
        text-decoration:underline;
    }
`;

export const FooterSocial = styled.a`
`;

export const InstaIcon = styled(SocialInstagram)`
    width: 32px;
    color: #fff;
    padding: 6px;
    border-radius:100%;
    margin: 10px 5px 0px;
    background: #ec008c;
    transition:all .5s;
    :hover{
        background: none;
        color: #ec008c;
        border:2px solid #ec008c;
    }
`;
export const LinkedinIcon = styled(SocialLinkedin)`
    width: 32px;
    color: #fff;
    padding: 6px;
    border-radius:100%;
    margin: 10px 5px 0px;
    background: #2e318f;
    transition:all .5s;
    :hover{
        background: none;
        color: #2e318f;
        border:2px solid #2e318f;
    }
`;
export const TwitterIcon = styled(SocialTwitter)`
    width: 32px;
    color: #fff;
    padding: 6px;
    border-radius:100%;
    margin: 10px 5px 0px;
    background: #00aeee;
    transition:all .5s;
    :hover{
        background: none;
        color: #00aeee;
        border:2px solid #00aeee;
    }
`;
export const FbIcon = styled(SocialFacebook)`
    width: 32px;
    color: #fff;
    padding: 6px;
    border-radius:100%;
    margin: 10px 5px 0px;
    background: #3949aa;
    transition:all .5s;
    :hover{
        background: none;
        color: #3949aa;
        border:2px solid #3949aa;
    }
`;
export const
 BottomFooterWrapper = styled.section`
    width:100%;
    padding:20px 0px;
    background:#fff;
`;

export const BottomFooterPara = styled.p`
    color:#5c5c5c;
    margin-bottom:0px;
    padding:10px 0px;   
    font-size:15px;

    @media ${device.tablet} {
        text-align:center;
    }
`;