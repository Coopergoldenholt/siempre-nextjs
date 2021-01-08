import styled from 'styled-components';
import {Commonh3,Commonbtn} from '../Common/common.style'
import {ChevronDown} from 'styled-icons/evil/ChevronDown'
import {device} from '../Common/device'
import BackgroundImg from '../../../assets/interior-images/banner.jpg'

export const BannerSection = styled.section`
    background-image:url(${BackgroundImg});
    padding:100px 0px;
    height:500px;
    background-repeat:no-repeat;
    background-size:100%;
    position:relative;
    display:flex;
    align-items:center;

    @media ${device.tablet} {
        background-size:cover;
        padding-top:50px;
        padding-left:10px;
        padding-right:10px;
        height:560px;
    }

    @media ${device.laptop} {
        height:560px;
        background-size: cover;
    }
`;

export const BannerContents = styled.div`
    padding-top:40px;
    display:flex;

    @media ${device.tablet} {
        padding-top:20px;
    }
    @media ${device.tablet} {
        display:block;
        padding-top:20px;
    }
    
`;

export const BannerContentLeft = styled.div`
    width:50%;

    @media ${device.laptop} {
        width:100%;
        text-align:center;
    }
`;

export const BannerH3 = styled(Commonh3)`
    font-size:50px;
    font-weight:700;
    margin-bottom:30px;
    line-height: 56px;
    color:#fff;
    
    @media ${device.tablet} {
        width:100%;
        text-align:center;
        font-size:45px;
        font-size:45px;
    }
`;

export const BannerBtn = styled(Commonbtn)`
    text-decoration:none;
    box-shadow:none;
    background:transparent;
    border:1px solid #fff;
    color:#fff;
`;

export const ArrowCol = styled.div`
    position: absolute;
    right: 0;
    left: 0;
    text-align: center;
    bottom: 30px;
`;

export const DownArrow = styled(ChevronDown)`
    color:#fff;
    width:50px;
    height: 50px;
    border: 2px solid #fff;
    border-radius: 100%;
`;