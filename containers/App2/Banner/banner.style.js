import styled from 'styled-components';
import {Commonpara,Commonh3,Commonh4,Commonbtn} from '../Common/common.style';
import {device} from '../Common/device';
import BackgroundImg from '../../../assets/app2-images/effect.png'

export const BannerWrapper = styled.section`
    padding:70px 0px;
    background-image: url(${BackgroundImg});
    background-repeat:no-repeat;
    background-size: auto 100%;

    @media ${device.tablet} {
        padding:70px 10px;
    }
`;

export const BannerContents = styled.div`
    padding-top:20px;
    display:flex;
    align-items:center;

    @media ${device.tablet} {
        display:block;
    }
`;

export const BannerContentLeft = styled.div`
    width:50%;
    padding-right:50px;

    @media ${device.tablet} {
        width:100%;
        text-align:center;
        padding-right:0px;
        margin-top:40px;
    }
`;

export const BannerH3 = styled(Commonh3)`
    line-height:46px;
    color:#393939;
    margin-bottom:15px;
    font-size:52px;

    @media ${device.laptop} {
        font-size:45px;
        line-height:40px;
    }

    @media ${device.mobileL} {
        font-size:40px;
        line-height:36px;
    }
`;

export const BannerH4 = styled(Commonh4)`
    line-height:38px;
    color:#595959;
    text-align:left;
    margin-bottom:25px;
    font-size:36px;

    @media ${device.laptop} {
        font-size:30px;
        line-height:30px;
    }

    @media ${device.tablet} {
        text-align:center;
    }

    @media ${device.mobileL} {
        font-size:28px;
        line-height:28px;
    }
`;

export const BannerPara = styled(Commonpara)`
    color:#595959;
    font-size:16px;
    margin-bottom:30px;
`;

export const BannerContentRight = styled.div`
    width:50%;
    text-align:left;

    @media ${device.tablet} {
        width:100%;
        text-align:center;
        padding-top:15px;
    }
`;

export const BannerImage = styled.img`
    margin-bottom:0px;
    position: relative;
    z-index: 999;
    max-height: 500px;
    padding: 0px 20px;

    @media ${device.laptop} {
        width:85%;
    }

    @media ${device.tablet} {
        width:auto;
    }

`;
export const BannerBtn = styled(Commonbtn)`
    text-decoration:none;
`;

export const RightArrowYellow = styled.img`
    width: 22px;
    margin-bottom: 0px;
    vertical-align: middle;
    margin-left: 6px;
    position: absolute;
    top: 13px;
    right: 160px;

    ${BannerBtn}:hover &{
        right:30px;
        -webkit-transition: all 0.5s ease-in-out;
        -ms-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
    }
`;


export const RightArrow = styled.img`
    width: 22px;
    margin-bottom: 0px;
    vertical-align: middle;
    margin-left:6px;
    position: relative;
    left: 0px;
    ${BannerBtn}:hover &{
        left: 60px;
        -webkit-transition: all 0.5s ease-in-out;
        -ms-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
    }
`;
