import styled from "styled-components";
import {Commonpara,Commonh3} from '../Common/common.style'
import {Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {device} from '../Common/device'

export const FeaturesWrapper = styled.section`
    padding:40px 0px;

    @media ${device.tablet} {
        padding-right:10px;
        padding-left:10px;
        padding-top:100px;
        padding-bottom:40px;
    }
`;
export const FeatureCol = styled.div`
    .row{
        align-items:center;
    }
`;    
export const FeatureTxtCol = styled.div`
`;
export const FeatureHeading = styled(Commonh3)`
    font-weight: normal;
    font-size:30px;
`;
export const FeaturePara = styled(Commonpara)`
`;
export const FeatureImgCol = styled.div`
`;
export const RowDirection = styled(Row)`
    flex-direction: row-reverse;
`;
export const UlCustom = styled.ul`

`;
export const LiCustom = styled.li`
    color: #484848;
    font-size:18px;
`;

export const FeatureImg = styled.img`
`;
