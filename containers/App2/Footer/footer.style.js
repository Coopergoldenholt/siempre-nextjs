import styled from 'styled-components';
import {Commonh4,Commonpara} from '../Common/common.style';
import {device} from '../Common/device'
import {ScFacebook} from 'styled-icons/evil/ScFacebook';
import {ScTwitter} from 'styled-icons/evil/ScTwitter';
import {ScYoutube} from 'styled-icons/evil/ScYoutube';
import {ScInstagram} from 'styled-icons/evil/ScInstagram';

export const FooterWrapper = styled.footer`
    width:100%;
    padding:50px 0px;
    background-size:100%;
    background:#363636;
    @media ${device.tablet} {
        padding:60px 10px;
    }
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
        color:#fff;
        :hover{
            text-decoration:underline;
        }
    }
`;

export const FooterTitle = styled(Commonh4)`
    font-size:26px;
    margin-bottom:25px;
    text-transform:uppercase;
    text-align:left;
    color:#fff;

    @media ${device.laptop} {
        font-size:22px;
    }
`;

export const FooterPara = styled(Commonpara)`
    margin-bottom:10px;
    color:#fff;
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
    color:#fff;
    :hover
    {
        text-decoration:underline;
    }
`;
export const FooterSocial = styled.a`
    margin-right:10px;
    svg{
        transition:All .5s;
    }
    :hover svg
    {
        transform:rotate(60deg);
        transition:All .5s;
    }
`;

export const BottomFooterWrapper = styled.div`
    width:100%;
    padding:10px 0px;
    text-align:left;
    background:#363636;
    border-top:1px solid #ddd;
    background-size:100%;
`;

export const BottomFooterPara = styled.p`
    margin-bottom:0px;
    padding:10px 0px;   
    font-size:15px;
    color:#fff;
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

export const InstagramIcon = styled(ScInstagram)`
    width: 30px;
    background: #0171e3;
    border-radius: 100%;
    padding: 2px;
    color: white;
    margin-top:10px;
`;
export const YoutubeIcon = styled(ScYoutube)`
    width: 30px;
    padding: 2px;
    background: #0171e3;
    border-radius: 100%;
    color: white;
    margin-top:10px;
`;
export const TwitterIcon = styled(ScTwitter)`
    width: 30px;
    padding: 2px;
    background: #0171e3;
    border-radius: 100%;
    color: white;
    margin-top:10px;
`;
export const FacebookIcon = styled(ScFacebook)`
    width: 30px;
    padding: 2px;
    background: #0171e3;
    border-radius: 100%;
    color: white;
    margin-top:10px;
`;