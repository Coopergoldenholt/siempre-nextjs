import styled from 'styled-components';
import {SectionHeading,Commonpara} from '../Common/common.style'
import {device} from '../Common/device'

export const FeaturesSection = styled.div`
    padding:80px 0px;
    @media ${device.tablet} {
        padding-right:10px;
        padding-left: 10px;
    }
`;

export const FeaturesHeadingWrapper = styled.div`
    margin-bottom:60px;
    text-align:center;
`;

export const FeaturesListWrapper = styled.div`

`;

export const FeaturesRightCol = styled.div`
    box-shadow: 0px 0px 17px 1px #ececec;
    border-radius: 10px;
    margin-bottom:30px;
    overflow: hidden;

    :hover{
        box-shadow: 0px 0px 20px 2px #ddd;
    }

`;

export const FeaturesLeftImg = styled.img`
    float:left;
    margin-bottom:0px;
    width:230px;
    height: 100%;
    object-fit:cover;

    @media ${device.tablet} {
        width:100%;
        height:200px;
        float:none;
    }
`;

export const FeaturesContent = styled.div`
    text-align:left;
    padding: 30px;
    overflow: hidden;
`;

export const FeaturesContentTitle = styled(SectionHeading)`
    text-align: left;
    font-size:24px;
    line-height: 32px;
`;

export const FeaturesContentPara = styled(Commonpara)`
    font-size:14px;
`;

export const FeaturesContentPrice = styled(SectionHeading)`
    text-align: left;
`;