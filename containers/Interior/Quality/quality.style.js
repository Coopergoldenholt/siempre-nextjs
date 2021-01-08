import styled from 'styled-components';
import {Commonh4,Commonpara, Commonh3} from '../Common/common.style';
import {device} from '../Common/device'

export const QualitySection = styled.section`
    padding:70px 0px;
    @media ${device.tablet} {
        padding-left:10px;
        padding-right:10px;
        padding-top:50px;
        padding-bottom:50px;
    }
`;

export const QualitySectionHeadingWrapper = styled.div`
    max-width: 600px;
    margin: auto;
    margin-bottom: 60px;
    @media ${device.tablet} {
        margin-bottom: 40px;
    }
`;

export const QualityCustomContainer = styled.div`
    display:flex;
    @media ${device.tablet} {
        display:block;
    }
`;

export const QualityColBig = styled.div`
    width:40%;
    @media ${device.tablet} {
        width:100%
    }
`;

export const QualityColBigImg = styled.img`
    height: 470px;
    width: 100%;
    object-fit: cover;
    -webkit-transform: scale(1);
    transform: scale(1);
    transition: transform .3s ease-in-out !important;
    -webkit-transition: -webkit-transform .3s ease-in-out !important;

    :hover{
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
    }
`;

export const QualityColBigFigure = styled.figure`
    height: 470px;
    overflow: hidden;
    margin-bottom: 30px;
`;
export const QualityColBigHeading = styled(Commonh3)``;

export const QualityColSmall = styled.div`
    width:30%;
    margin:${props => props.marginProp};
    @media ${device.tablet} {
        width:100%;
        margin:0px;
    }
`;

export const QualityColSmallImg = styled.img`
    height: 300px;
    width: 100%;
    object-fit: cover;
    -webkit-transform: scale(1);
    transform: scale(1);
    transition: transform .3s ease-in-out !important;
    -webkit-transition: -webkit-transform .3s ease-in-out !important;

    :hover{
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
    }
`;


export const QualityColSmallFigure = styled.figure`
    height: 300px;
    overflow: hidden;
    margin-bottom: 30px;
`;

export const QualityColSmallHeading = styled(Commonh4)``;

export const QualityColPara = styled(Commonpara)`
    margin-bottom:0px;
    @media ${device.tablet} {
        margin-bottom:20px;
    }
`;