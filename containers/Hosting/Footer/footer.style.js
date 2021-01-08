import styled from 'styled-components';
import {Commonh4,Commonpara} from '../Common/common.style';
import {device} from '../Common/device'
import {SocialFacebook} from 'styled-icons/typicons/SocialFacebook'
import {SocialTwitter} from 'styled-icons/typicons/SocialTwitter'
import {SocialLinkedin} from 'styled-icons/typicons/SocialLinkedin'
import {SocialInstagram} from 'styled-icons/typicons/SocialInstagram'

export const FooterCustomContainerfluid = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const FooterSection = styled.footer`
    width:100%;
    padding:60px 0px;
    
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
        color:#7a7f83;
        :hover{
            text-decoration:underline;
        }
    }
`;

export const FooterTitle = styled(Commonh4)`
    font-size:26px;
    margin-bottom:25px;
    text-transform:uppercase;

    @media ${device.laptop} {
        font-size:22px;
    }
`;

export const FooterPara = styled(Commonpara)`
    margin-bottom:5px;
`;

export const FooterLi = styled.li`
    list-style:none;
    margin-bottom:6px;
`;

export const FooterSocial = styled.a`
    margin-right:0px;
`;

export const InstaIcon = styled(SocialInstagram)`
    width: 32px;
    color: #fff;
    padding: 6px;
    border-radius:100%;
    margin: 10px 5px 0px;
    background: #15a4a1;
    transition:all .5s;
    :hover{
        color: #ec008c;
        background:none;
        border:2px dashed #15a4a1;
    }
`;
export const LinkedinIcon = styled(SocialLinkedin)`
    width: 32px;
    color: #fff;
    padding: 6px;
    border-radius:100%;
    margin: 10px 5px 0px;
    background: #15a4a1;
    transition:all .5s;
    :hover{
        color: #2e318f;
        background:none;
        border:2px dashed #15a4a1;
    }
`;
export const TwitterIcon = styled(SocialTwitter)`
    width: 32px;
    color: #fff;
    padding: 6px;
    border-radius:100%;
    margin: 10px 5px 0px;
    background: #15a4a1;
    transition:all .5s;
    :hover{
        color: #00aeee;
        background:none;
        border:2px dashed #15a4a1;
    }
`;
export const FbIcon = styled(SocialFacebook)`
    width: 32px;
    color: #fff;
    padding: 6px;
    border-radius:100%;
    margin: 10px 5px 0px;
    background: #15a4a1;
    transition:all .5s;
    :hover{
        color: #3949aa;
        background:none;
        border:2px dashed #15a4a1;
    }
`;

export const BottomFooterWrapper = styled.section`
    width:100%;
    padding:10px 0px;
    background: #f9fafc;

    @media ${device.tablet} {
        padding-right:10px;
        padding-left:10px;
    }
`;

export const BottomFooterPara = styled.p`
    margin-bottom:0px;
    padding:10px 0px;   
    font-size:15px;
`;