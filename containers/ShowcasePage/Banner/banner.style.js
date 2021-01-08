import styled from 'styled-components';
import {Commonpara,Commonbtn} from '../Common/common.style'
import {device} from '../Common/device'
import BannerBg from '../../../assets/showcase-images/banner-new.jpg'

export const BannerWrapper = styled.section`
    background-image: url(${BannerBg});
    min-height:100vh;
    display:flex;
    align-items:center;
    background-repeat:no-repeat;
    background-size:cover;
`;
export const BannerCol = styled.div`
    max-width:700px;
    margin:auto;
    text-align:center;
`;
export const BannerHeading = styled(Commonpara)`
    color:#fff;
    font-size:40px;
    margin-bottom:26px;
    line-height: 50px;  
    font-weight:500;

    @media ${device.mobileL} {
        font-size:30px;
        line-height: 40px;
        margin-top:30px;
    }
`;
export const BannerSubHeading = styled(Commonpara)`
    color:#fff;
    font-size:20px;
    @media ${device.mobileL} {
        font-size:18px;
    }
`;

export const BannerBtnsWrapper = styled.div`
    
`;

export const BannerBtn = styled(Commonbtn)`
    background: #ff5a00;
    border: none;
    padding: 10px 50px;
    font-weight: 600;
    margin-right:10px;
    :hover{
        color:#fff;
        background:#d04c04;
    }
    @media ${device.mobileL} {
        max-width: 200px;
        display: block;
        margin: 0px auto;
    }
`;
export const BannerBtnDemos = styled(Commonbtn)`
    border: 1px solid #ff5a00;
    color: #ff5a00;
    padding: 10px 60px;
    font-weight: 600;
    margin-left:10px;

    :hover{
        color:#fff;
        background:#ff5a00;
    }

    @media ${device.mobileL} {
        max-width: 200px;
        display: block;
        margin: 10px auto;
    }
`;

export const BannerImg = styled.img`
`;
