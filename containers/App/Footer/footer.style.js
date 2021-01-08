import styled from 'styled-components';
import {Commonh4,Commonpara} from '../Common/common.style';
import {device} from '../Common/device'
import {SocialFacebook} from 'styled-icons/typicons/SocialFacebook'
import {SocialTwitter} from 'styled-icons/typicons/SocialTwitter'
import {SocialLinkedin} from 'styled-icons/typicons/SocialLinkedin'
import {SocialInstagram} from 'styled-icons/typicons/SocialInstagram'

export const FooterSection = styled.footer`
    width:100%;
    padding:60px 0px;
    background-size:100%;
    background:#f9fafc;
    position:relative;

    @media ${device.tablet} {
        padding: 60px 10px;
    }
`;

export const FooterInner = styled.div`
`;

export const FooterCol = styled.div`
    padding:20px 0px;
    text-align:left;

    ul{
        margin-left:0px;
        margin-bottom:0px;
    }
    a{
        text-decoration:none;
        color:#595959;
        :hover{
            text-decoration:underline;
        }
    }

    @media ${device.tablet} {
        padding:20px 0px;
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

export const FooterPara = styled(Commonpara)`
    margin-bottom:5px;
`;

export const FooterTitle = styled(Commonh4)`
    font-size:26px;
    margin-bottom:25px;
    text-transform:uppercase;
    text-align:left;

    @media ${device.laptop} {
        font-size:24px;
    }
`;

export const FooterUl = styled.ul`
    padding-left:0px;
    margin-left:0px;
`;

export const FooterLi = styled.li`
    list-style:none;
    margin-bottom:6px;

    :last-child{
        margin-bottom:0px;
    }
`;

export const FooterMenu = styled.a`
    color:#595959;
    text-decoration:none;
    font-size:15px;
    :hover
    {
        text-decoration:underline;
    }
`;

export const FooterSocial = styled.a`
    margin-right:10px;
`;

export const BottomFooterWrapper = styled.section`
    width:100%;
    padding:20px 0px;
    text-align:center;
    background-size:100%;
`;

export const BottomFooterPara = styled.p`
    margin-bottom:0px;
    padding:10px 0px;   
    font-size:15px;
    line-height: 15px;
`;

export const InstaIcon = styled(SocialInstagram)`
    width: 32px;
    color: #ed008d;
    background: rgba(237, 0, 141, .2);
    padding: 6px;
    border-radius:100%;
    margin: 10px 0px 0px;
    transition:all .5s;
    :hover{
        background:#ed008d;
        color:#fff;
    }
`;
export const LinkedinIcon = styled(SocialLinkedin)`
    width: 32px;
    color: #3b5999;
    background: rgba(59, 89, 153, .2);
    padding: 6px;
    border-radius:100%;
    margin: 10px 0px 0px;
    transition:all .5s;
    :hover{
        background:#3b5999;
        color:#fff;
    }
`;
export const TwitterIcon = styled(SocialTwitter)`
    width: 32px;
    color: #00adee;
    background: rgba(0, 173, 238, .2);
    border-radius:100%;
    padding: 6px;
    margin: 10px 0px 0px;
    transition:all .5s;
    :hover{
        background:#00adee;
        color:#fff;
    }
`;
export const FbIcon = styled(SocialFacebook)`
    width: 32px;
    color: #3b5999;
    background: rgba(59, 89, 153, .2);
    border-radius:100%;
    padding: 6px;
    margin: 10px 0px 0px;
    transition:all .5s;
    :hover{
        background:#3b5999;
        color:#fff;
    }
`;
