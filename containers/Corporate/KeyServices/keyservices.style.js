import styled from 'styled-components';
import {Commonh4,Commonpara} from '../Common/common.style';
import {device} from '../Common/device'
import BackgroundImg from '../../../assets/corporate-images/bg-pattern.png'

export const KeyServicesSection = styled.section`
    padding:80px 0px;
    position:relative;
    ::before{
        content:"";
        background-image:url(${BackgroundImg});
        display: block;
        background-repeat: no-repeat;
        position: absolute;
        left: -110px;
        height: 200px;
        width: 200px;
        background-size: 100%;
        top: 30px;
    }

    @media ${device.tablet} {
        padding-right: 10px;
        padding-left: 10px;
    }
`;

export const KeyServicesCustomContainer = styled.div`
`;

export const KeyServicesCol = styled.div`
    text-align:center;
    padding:45px 18px 0px;

    @media ${device.tablet} {
        padding: 45px 0px 0px;
    }
`;

export const KeyServicesIcon = styled.img`
    height:75px;
    margin-bottom:24px;
`;

export const KeyServicesHeading = styled(Commonh4)`
    color:#3a3a3a;
    font-size:22px;
    text-transform:uppercase;
    font-weight:500;
`;

export const KeyServicesDesc = styled(Commonpara)`
    color:#7a7f83;
    font-size:15px;
    margin-bottom:0px;
`;