import styled from 'styled-components';
import {Commonpara,Commonh4,SectionHeading,CommonRedbtn} from '../Common/common.style';
import {device} from '../Common/device';
import {Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const KeyServicesSection = styled.section`
    padding:70px 0px 40px;
    background:#f9f9f9;
    @media ${device.tablet} {
        padding-left:10px;
        padding-right:10px;
    }
`;
    
export const KeyServicesRow = styled(Row)`
    align-items:center;
`;

export const KeyServicesLeft = styled.div`

    @media ${device.laptop} {
        text-align:left;
        margin-bottom:40px;
    }

    @media ${device.tablet} {
        margin-bottom:40px;
    }
`;


export const KeyServicesLeftH3 = styled(SectionHeading)`
    text-align: left;
`;

export const KeyServicesLeftPara = styled(Commonpara)`
    text-align:left;
    font-size:14px;
`;

export const KeyServicesLeftBtn = styled(CommonRedbtn)`

`;

export const KeyServicesRight = styled.div`
    padding-left:70px;
    @media ${device.laptop} {
        padding-left:0px;
    }
    @media ${device.tablet} {
        padding-left:0px;
    }
`;

export const KeyServicesCardtopMargin = styled.div`
    margin-top:40px;
    @media ${device.tablet} {
        margin-top:0px;
    }
`;

export const KeyServicesCard = styled.div`
    background:#fff;
    border-radius:10px;
    cursor:pointer;
    min-height: 250px;
    padding: 30px 25px;
    box-shadow: 0px 0px 8px 1px #ddd;
    transition:all .5s;
    margin-bottom:30px;
    overflow:hidden;
    :hover
    {
        transition:all .5s;
        transform: translateY(-10px);
    }
`;

export const KeyServicesCardImg = styled.div`
    text-align: center;
`;

export const KeyServicesCardIcon = styled.img`
    margin-bottom:10px;
    height:70px;
`;

export const KeyServicesCardHeading = styled(Commonh4)`
    font-size:23px;
    font-weight:500;
    margin-bottom:10px;
    text-align: center;
`;

export const KeyServicesCardPara = styled(Commonpara)`
    font-size:14px;
    margin-bottom:0px;
    text-align: center;
`;