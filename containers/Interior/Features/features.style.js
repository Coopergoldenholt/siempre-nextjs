import styled from 'styled-components';
import {Commonpara} from '../Common/common.style';
import {device} from '../Common/device'

export const FeaturesSection = styled.section`
    padding:70px 0px;
    background:#fafafa;

    @media ${device.tablet} {
        padding-left:10px;
        padding-right:10px;
        padding-top:50px;
        padding-bottom:50px;
    }
`;

export const FeatureCustomContainer = styled.div`
    padding-top:45px;
    @media ${device.tablet} {
        padding-top:25px;
    }
`;

export const FeatureCol = styled.div`
    position: relative;
`;

export const FeatureImg = styled.img`
    height: 400px;
    width: 100%;
    margin-bottom:0px;
    position: relative;
    object-fit:cover;
    @media ${device.tablet} {
        height:300px;
    }
`;

export const FeatureImgTopPadded = styled.img`
    margin-top:50px;
    height: 400px;
    width: 100%;
    margin-bottom:0px;
    position: relative;
    object-fit:cover;

    @media ${device.tablet} {
        margin-top:30px;
        height:300px;
    }
`;

export const FeatureText = styled(Commonpara)`
    font-size:16px;
    position:absolute;
    bottom:0px;
    left:20px;
    font-weight:700;
    color:#fff;
    font-family: 'Muli', sans-serif;
    transition:0.3s all;

    ${FeatureCol}:hover &{
        left:25px;
        transition:0.3s all;
    }
`;