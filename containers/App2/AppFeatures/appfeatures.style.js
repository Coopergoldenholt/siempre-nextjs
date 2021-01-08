import styled from 'styled-components';
import {Commonh4,SectionHeading} from '../Common/common.style';
import {device} from '../Common/device';
import { Row,Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const AppFeaturesSectionWrapper = styled.section`
    padding: 70px 0px 50px;
    background:#363636;
    
    @media ${device.laptop} {
        padding:70px 0px;
    }
    @media ${device.tablet} {
        padding:70px 10px;
    }
`;

export const AppFeaturesHeadingWrapper = styled.div`
    margin-bottom:25px;

    @media ${device.laptop} {
        margin-bottom:50px;
    }
`;

export const AppFeaturesHeading = styled(SectionHeading)`
    color:#fff;
`;

export const AppFeaturesSubHeading = styled(Commonh4)`
    margin-bottom:0px;
    color:#fff;
`;

export const CenterCol = styled(Col)`
    @media ${device.laptop}{
        display:none;
    }
`;

export const AppFeaturesInner = styled(Row)`
    align-items: center;
`;

export const AppFeaturesWrapper = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:${props => props.bottomMargin};
    padding:10px;
    border:1px solid #ffffff55;
    border-radius:70px;

    ${props => props.revDirection && `
        @media ${device.tablet} {
            flex-direction:row-reverse;
        }
    `}
`;

export const AppFeaturesText = styled.div`
    font-size: 14px;
    line-height: 24px;
    margin:10px;
    color:#fff;
`;

export const AppFeaturesBold = styled.strong`
    font-size: 16px;
    color:#fff;
`;

export const AppFeaturesTextNormal = styled.p`
    font-size: 14px;
    color:#fff;
    margin-bottom:0px;
`;

export const AppFeaturesLeftIcon = styled.div`
    margin:10px;
    line-height: 0px;
`;
export const AppFeaturesImg = styled.img`
    margin-bottom:0px;
    width: 80px;
`;

export const AppFeaturesCenter = styled.div`
`;

export const AppFeaturesMobile = styled.img`
    margin:20px;
    @media ${device.tablet} {
        margin:20px 0px;
    }
`;
