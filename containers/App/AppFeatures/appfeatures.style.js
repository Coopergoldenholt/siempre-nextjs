import styled from 'styled-components';
import {Commonh4,SectionHeading} from '../Common/common.style';
import {device} from '../Common/device';
import {Row,Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const AppFeaturesSection = styled.section`
    padding: 100px 0px 80px;
    background: #f9fafc;
    background-size:100%;
    position:relative;

    @media ${device.laptop} {
        padding: 100px 0px;
    }

    @media ${device.tablet} {
        padding:80px 10px;
    }
`;

export const AppFeaturesHeadingWrapper = styled.div`
    margin-bottom:55px;

    @media ${device.laptop} {
        margin-bottom:75px;
    }
    
    @media ${device.tablet} {
        margin-bottom:60px;
    }
`;

export const AppFeaturesHeading = styled(SectionHeading)`

`;

export const AppFeaturesSubHeading = styled(Commonh4)`
    margin-bottom:0px;
`;

export const AppFeaturesContent = styled(Row)`
    align-items: center;
`;

export const CenterCol = styled(Col)`
    @media ${device.laptop}{
        display:none;
    }
`;

export const AppFeaturesWrapper = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:${props => props.bottomMargin};
    border-radius: 60px;
    border: 1px solid #ddd;
    padding: 10px;

    @media ${device.laptop} {
        border-radius: 70px;
    }

`;

export const AppFeaturesText = styled.div`
    font-size: 14px;
    line-height: 24px;
    color:#595959;
    margin: 10px;
`;

export const AppFeaturesBoldText = styled.strong`
    font-size: 16px;
`;

export const AppFeaturesTextNormal = styled.p`
    font-size: 14px;
    color:#595959;
    margin-bottom:0px;
`;


export const AppFeaturesLeftIcon = styled.div`
    text-align:left;
`;

export const AppFeaturesImgHolder = styled.div`
    background: #fff;
    display:flex;
    align-items:center;
    border-radius: 100%;
    height: 80px;
    width: 80px;
    margin: 10px;
    box-shadow: 1px 1px 10px 1px #e0e0e0;

    @media ${device.laptopM} {
        height:60px;
        width:60px;

    }
    @media ${device.laptop} {
        height: 70px;
        width: 70px;
    }

    @media ${device.tablet} {
        height: 80px;
        width: 80px;
    }

    @media ${device.mobileM} {
        height:60px;
        width:60px;
    }
`;

export const AppFeaturesImg = styled.img`
    margin-bottom:0px;
    height: 35px;
    margin:0px auto;

    @media ${device.laptopM} {
        height: 30px;
    }

    @media ${device.laptop} {
        height: 30px;
    }

    @media ${device.tablet} {
        height: 35px;
    }

    @media ${device.mobileM} {
        height: 30px;
    }
`;

export const AppFeaturesCenter = styled.div`
    text-align: center;
`;

export const AppFeaturesMobile = styled.img`
    box-shadow: 0px 0px 48px 0px #e4e4e4;
    border-radius: 30px;
    background: #fff;
    margin:20px;
`;
