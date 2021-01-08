import styled from 'styled-components';
import {Commonh4,Commonpara} from '../Common/common.style';
import {device} from '../Common/device'
import {SocialFacebook} from 'styled-icons/typicons/SocialFacebook'
import {SocialTwitter} from 'styled-icons/typicons/SocialTwitter'
import {SocialLinkedin} from 'styled-icons/typicons/SocialLinkedin'
import {SocialInstagram} from 'styled-icons/typicons/SocialInstagram'
import FooterBg from '../../../assets/interior-images/graffiti.jpg'

export const FooterSection = styled.section`
    width:100%;
    padding:50px 0px;
    background-image: url(${FooterBg});
    background-repeat:no-repeat;
    background-size:cover;
    background-position: center center;

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
        color:#fff;
        text-decoration:none;
        :hover{
            text-decoration:underline;
        }
    }
`;

export const FooterTitle = styled(Commonh4)`
    color:#fff;
    font-size:24px;
    margin-bottom:25px;
    text-align:left;
`;

export const FooterPara = styled(Commonpara)`
    color:#fff;
    font-size:14px;
    margin-bottom:5px;
`;

export const FooterLi = styled.li`
    list-style:none;
    margin-bottom:6px;

    a{
        font-size:16px;
    }
`;

export const FooterSocial = styled.a`
    margin-right:15px;
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

export const FooterForm = styled.div`
    
`;

export const FooterInput = styled.input`
    width: 100%;
    margin-bottom: 15px;
    padding: 5px 10px;
    border: none;
    outline:0;
`;

export const FooterFormSubmit = styled.button`
    padding: 4px 20px;
    outline: 0;
    font-size: 15px;
    background: #f26522;
    border: none;
    color: #fff;
    cursor:pointer;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    :hover{
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
`;

export const InstaIcon = styled(SocialInstagram)`
    width: 32px;
    color: #2f2f2f;
    padding: 6px;
    background: #fff;
    margin-top:10px;
    transition:all .5s;
    :hover{
        border-radius:100%;
    }
`;
export const LinkedinIcon = styled(SocialLinkedin)`
    width: 32px;
    color: #2f2f2f;
    padding: 6px;
    background: #fff;
    margin-top:10px;
    transition:all .5s;
    :hover{
        border-radius:100%;
    }
`;
export const TwitterIcon = styled(SocialTwitter)`
    width: 32px;
    color: #2f2f2f;
    padding: 6px;
    background: #fff;
    margin-top:10px;
    transition:all .5s;
    :hover{
        border-radius:100%;
    }
`;
export const FbIcon = styled(SocialFacebook)`
    width: 32px;
    color: #2f2f2f;
    padding: 6px;
    background: #fff;
    margin-top:10px;
    transition:all .5s;
    :hover{
        border-radius:100%;
    }
`;