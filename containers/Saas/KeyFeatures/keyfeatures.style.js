import styled from 'styled-components';
import {device} from '../Common/device';
import {Commonpara,Commonbtn,SectionHeading} from '../Common/common.style';
import {Check} from'styled-icons/fa-solid/Check';
import BackgroundImg from '../../../assets/saas-images/triangle-bglarge.png'

export const KeyFeaturesSection = styled.section`
    padding:100px 0px;
    background-image: url(${BackgroundImg});
    background-repeat: no-repeat;
    background-size: 800px;
    background-position: 700px 90px;
    
    @media ${device.tablet} {
        padding:80px 10px;
    }
`;

export const KeyFeaturesHeadingWrapper = styled.div`
    max-width:600px;
    margin:auto;
    text-align:center;
`;

export const KeyFeaturesHeading = styled(SectionHeading)`
    line-height: 30px;
`;

export const KeyFeaturesPara = styled(Commonpara)`
    font-size: 16px;
`;

export const KeyFeaturesInner = styled.div`
    margin-top:54px;
    .row
    {
        align-items:center;
    }

    @media ${device.tablet} {
        margin-top:34px;
    }
`;

export const KeyFeaturesLeft = styled.div`
    margin-right:30px;

    @media ${device.tablet} {
        margin-right:0px;
    }
`;

export const KeyFeaturesLeftImg = styled.img`
    box-shadow:0px 0px 26px 5px #d0d0d0;
    border-radius:10px;
`;
export const KeyFeaturesRight = styled.div`
    margin-left:30px;
    @media ${device.laptop} {
        margin-top: 40px;
        margin-left:0px;
    }
    @media ${device.tablet} {
        margin-left:0px;
        margin-top:40px;
    }
`;

export const KeyFeaturesRightUl = styled.ul`
    margin-bottom:50px;
    margin-left:0px;
`;

export const KeyFeaturesRightLi = styled.li`
    margin-bottom:30px;
    list-style:none;
    display:flex;
`;

export const KeyFeaturesLiImgCol = styled.div`

`;

export const CheckIcon = styled(Check)`
    width: 35px;
    padding: 10px;
    height: 35px;
    color: #6028fa;
    background: #fff;
    border-radius: 100%;
    box-shadow: 1px 3px 4px 1px #e6e6e6;
`;

export const KeyFeaturesLiContentCol = styled.div`
    margin-left:20px
`;

export const KeyFeaturesRightLih3 = styled(SectionHeading)`
    text-align:left;
    font-size:18px;
    font-weight:500;
    color:#424345;
    margin-bottom:10px;
`;

export const KeyFeaturesRightLipara = styled(Commonpara)`
    font-size:14px;
`;

export const KeyFeaturesRightBtn = styled(Commonbtn)`
    margin-left:10px;
`;