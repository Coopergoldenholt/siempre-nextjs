import styled from 'styled-components';
import {Commonh3,Commonh4,Commonbtn} from '../Common/common.style'
import {device} from '../Common/device'
import BackgroundImg from '../../../assets/corporate2-images/banner.jpg'

export const BannerSection = styled.section`
    background-image:url(${BackgroundImg});
    padding:70px 0px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    min-height:100vh;
    display:flex;
    align-items:center;

    @media ${device.tablet} {
        background-size:cover;
        padding:80px 0px;
    }
`;

export const BannerContents = styled.div`
    padding-top:70px;

    @media ${device.tablet} {
        display:block;
        padding-top:40px;
    }
    
`;

export const BannerContentLeft = styled.div`
    max-width:900px;
    margin:auto;
    padding:20px;
    text-align:center;
    @media ${device.laptop} {
        width:100%;
        padding: 10px;
    }
`;

export const BannerH3 = styled(Commonh3)`
    font-size:55px;
    font-weight:700;
    margin-bottom:20px;
    line-height: 56px;
    color:#fff;
    text-align:center;
    
    @media ${device.tablet} {
        width:100%;
        font-size: 32px;
        line-height:34px;
    }
`;

export const BannerH4 = styled(Commonh4)`
    font-size:18px;
    margin-bottom:30px;
    color:#fff;
    text-align:center;
`;

export const BannerBtn = styled(Commonbtn)`
    text-decoration:none;
    text-transform:uppercase;
    box-shadow:none;
    background:fff;
    color:#000;
    
    :hover{
        color:#000;
    }
`;
