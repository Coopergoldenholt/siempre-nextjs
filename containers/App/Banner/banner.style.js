import styled from 'styled-components';
import {Commonpara,Commonh3,Commonbtn} from '../Common/common.style';
import {device} from '../Common/device';
import BackgroundImg from '../../../assets/app-images/banner.jpg'

export const BannerSection = styled.section`
    background-color:#eaeaea;
    background-image: url(${BackgroundImg});
    background-repeat:no-repeat;
    background-size:cover;
    min-height: 100vh;
    display:flex;
    align-items:center;
    padding:100px 0px;

    @media ${device.tablet} {
        padding:50px 10px;
    }

`;

export const BannerContents = styled.div`
    display:flex;
    align-items: center;

    @media ${device.tablet} {
        display:block;
        padding-top:100px;
    }
`;

export const BannerContentLeft = styled.div`
    width:50%;

    @media ${device.tablet} {
        width:100%;
        text-align:center;
        padding-right:0px;
    }
`;

export const BannerH3 = styled(Commonh3)`
    color:#fff;
    margin-bottom:0px;
    font-size:42px;
    line-height:52px;

    @media ${device.laptop} {
        font-size:36px;
        line-height:46px;
    }
    @media ${device.mobileL} {
        font-size:32px;
        line-height:42px;
    }
`;
export const BannerH3Line2 = styled(BannerH3)`
    margin-bottom:25px;
`;

export const BannerPara = styled(Commonpara)`
    color:#fff;
    font-size:16px;
    margin-bottom:30px;
`;

export const BannerBtn = styled(Commonbtn)`
    text-decoration:none;
`;

export const BannerContentRight = styled.div`
    width:50%;
    text-align:center;

    @media ${device.tablet} {
        width:100%;
        text-align:center;
        padding-top:45px;
    }

    .BannerImage{
        position: relative;
        z-index: 999;
        max-width:400px;
        margin: 0px auto;
    }
`;

export const BannerImage = styled.img`
    position: relative;
    z-index: 999;
    max-width:400px;
    margin: 0px auto;
`;
