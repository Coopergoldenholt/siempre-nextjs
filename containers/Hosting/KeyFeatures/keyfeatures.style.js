import styled from 'styled-components';
import {Commonh4,Commonpara} from '../Common/common.style';
import {device} from '../Common/device'

export const KeyFeaturesSection = styled.section`
    padding:100px 0px 60px;
    background:#f9fafc;
    @media ${device.tablet} {
        padding-right: 10px;
        padding-left: 10px;
    }
`;

export const KeyFeaturesCustomContainer = styled.div`
    margin-top:10px;
`;

export const KeyFeaturesCol = styled.div`
    text-align:center;
    margin:10px;
    padding:30px 20px;
    transition:all .5s;
    
`;

export const KeyFeaturesIcon = styled.img`
    height:75px;
    margin-bottom:24px;
`;

export const KeyFeaturesHeading = styled(Commonh4)`
    color:#3a3a3a;
    font-size:22px;
`;

export const KeyFeaturesDesc = styled(Commonpara)`
    color:#7a7f83;
    margin-bottom:0px;
    font-size:15px;
`;