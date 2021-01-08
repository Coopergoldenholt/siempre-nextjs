import styled from 'styled-components';
import {Commonpara,Commonh4,SectionHeading} from '../Common/common.style';
import {device} from '../Common/device';

export const DownloadSection = styled.section`
    padding:100px 0px;
    position:relative;

    @media ${device.tablet} {
        padding: 80px 10px;
    }
`;

export const DownloadContentBg = styled.div`
    position:relative;
`;

export const DownloadInner = styled.div`
    display:flex;
    box-shadow: 0px 0px 50px 0px #d8d8d8;
    padding:50px;
    background: #fff;
    border-radius:15px;
    align-items:center;

    @media ${device.laptop} {
        padding:30px;
    }
    
    @media ${device.tablet} {
        display:block;
        height:auto;
        padding:30px;
    }
`;

export const DownloadCol1 = styled.div`
    text-align:left;
    width:50%;
    padding-right:20px;

    @media ${device.laptop} {
        padding-right:30px;
    }
    
    @media ${device.tablet} {
        width:100%;
        padding-right:0px;
    }
`;

export const DownloadTitle = styled(SectionHeading)`
    text-align: left;
    margin-bottom:10px;
    @media ${device.tablet}{
        text-align:center;
    }
`;

export const DownloadSubTitle = styled(Commonh4)`
    text-align: left;
    margin-bottom:10px;
    @media ${device.tablet}{
        text-align:center;
    }
`;

export const DownloadPara = styled(Commonpara)`
    @media ${device.tablet}{
        text-align:center;
    }
`;


export const DownloadLinkWrapper = styled.div`
    display:flex;

    @media ${device.tablet}{
        justify-content: center;
    }
`;

export const DownloadLeftCol = styled.div`
    margin-right:10px;

    @media ${device.mobileL} {
        margin-bottom:10px;
    }

`;

export const DownloadImage = styled.img`
    width:150px;

    @media ${device.laptop} {
        width:120px;
    }

    @media ${device.mobileL} {
        width:90px;
    }
`;

export const DownloadCol2 = styled.div`
    width:50%;
    text-align:center;

    @media ${device.tablet} {
        width:100%;
        text-align:center;
    }

    .DownloadDemo img{
        @media ${device.tablet} {
            right:0px !important;
            left:0px !important;
            margin:auto;
        }
    }
`;

export const DownloadDemo = styled.img`
    height:400px;

    @media ${device.tablet} {
        margin-top:40px;
        margin-bottom: 0px;
        padding:20px;
    }
    @media ${device.mobileL} {
        height:300px;
    }
`;
