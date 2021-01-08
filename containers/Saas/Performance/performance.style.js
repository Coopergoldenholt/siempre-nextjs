import styled from 'styled-components';
import {Commonpara,SectionHeading} from '../Common/common.style';
import {device} from '../Common/device';
import BackgroundImg from '../../../assets/saas-images/skills-section-banner.jpg'

export const PerformanceSection = styled.section`
    padding:100px 0px;
    background-image: url(${BackgroundImg});
    background-repeat:no-repeat;
    background-size:cover;

    @media ${device.tablet} {
        padding:80px 10px;
    }
`;

export const PerformanceHeadingWrapper = styled.div`
    max-width:600px;
    margin:auto;
    text-align:center;
    margin-bottom:60px;

    @media ${device.tablet} {
        margin-bottom:40px;
    }
`;

export const PerformanceSectionHeading = styled(SectionHeading)`
    color:#fff;
    line-height:30px;
`;

export const PerformanceHeadingPara = styled(Commonpara)`
    color:#fff;
    font-size:16px;
`;

export const PerformanceHolder = styled.div`
    text-align:center;
`;

export const PerformanceCount = styled.div`
    background: rgb(8, 8, 8,.5);
    max-width: 100px;
    height: 80px;
    line-height: 80px;
    border-radius:10px;
    color:#fff;
    font-weight:bold;
    font-size:32px;
    margin: 20px auto;
`;

export const PerformanceDetails = styled(Commonpara)`
    color:#fff;
    margin-bottom:0px;
`;