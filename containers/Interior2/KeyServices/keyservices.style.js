import styled from 'styled-components';
import {Commonh4,Commonpara} from '../Common/common.style';
import {Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {device} from '../Common/device'

export const KeyServicesSection = styled.section`
    padding:80px 0px;
    background:#fff;

    @media ${device.tablet} {
        padding:80px 10px;
    }
`;

export const KeyServicesCustomContainer = styled.div`
    margin-top:45px;
    background:#fff;
    border-radius:10px;
    box-shadow: 0px 0px 16px 0px #d0d0d0;
`;

export const KeyServicesRight = styled(Row)`
    align-items:center;
    margin-right:0px !important;

    @media ${device.laptop} {
        margin-right: calc(30px / -2) !important;
    }

`;

export const KeyServicesLeftImage = styled.img`
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    margin-bottom:0px;
    display:block;

    @media ${device.laptop} {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom-left-radius: 0px;
    }
    @media ${device.tablet} {
        margin-bottom:0px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
`;

export const KeyServicesRightInnerRow = styled(Row)`
    margin-right:0px !important;

    @media ${device.laptop} {
        margin-left: 0px !important;
        padding-bottom: 40px;
    }

    @media ${device.tablet} {
        padding-bottom: 20px;
        padding-top:20px;
    }

    @media ${device.mobileL} {
        padding-bottom: 10px;
        padding-top:10px;
    }
`;

export const KeyServicesCol1 = styled.div`
    text-align:left;
    padding:20px 9px 20px 18px;

    @media ${device.laptop} {
        padding:40px 5px 0px 25px;
    }
    @media ${device.tablet} {
        padding:20px 25px;
    }

    @media ${device.mobileL} {
        padding:20px 15px;
    }
`;

export const KeyServicesCol2 = styled.div`
    text-align:left;
    padding:20px 18px 20px 9px;

    @media ${device.laptop} {
        padding:40px 25px 0px 5px;
    }
    @media ${device.tablet} {
        padding:20px 25px;
    }
    @media ${device.mobileL} {
        padding:20px 15px;
    }
`;

export const KeyServicesIcon = styled.img`
    width:50px;
    margin-bottom:10px;

    @media ${device.laptopM} {
        width:45px;
    }
`;

export const KeyServicesHeading = styled(Commonh4)`
    color:#3a3a3a;
    font-size: 24px;
    margin-bottom: 10px;
    text-align:left;
    @media ${device.tablet} {
        font-size: 20px;
    }
`;

export const KeyServicesDesc = styled(Commonpara)`
    color:#7a7f83;
    font-size:14px;
    margin-bottom:0px;
`;