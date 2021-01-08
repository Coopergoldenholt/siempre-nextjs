import styled from 'styled-components';
import {Commonpara,Commonh4,SectionHeading} from '../Common/common.style';
import {device} from '../Common/device';
import {Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const ServicesWrapper = styled.section`
    padding:70px 0px 50px;

    @media ${device.laptop} {
        padding:70px 0px;
    }
    @media ${device.tablet} {
        padding:70px 10px;
    }
`;
    
export const ServicesLeft = styled.div`
    padding-left:70px;

    @media ${device.laptop} {
        padding-left:0px;
        padding-top:30px;
    }
    @media ${device.tablet} {
        padding-left:0px;
        padding-top:30px;
    }
`;

export const ServicesRight = styled.div`
   
`;

export const ServicesCard = styled.div`
    cursor:pointer;
    padding: 20px 15px;
    transition:all .5s;
    overflow:hidden;

    @media ${device.tablet} {
        padding: 20px 0px;
    }
`;

export const ServicesCardImg = styled.div`
    text-align: left;
    background: #fff;
    box-shadow: 1px 1px 13px 0px #dadada;
    display: inline-block;
    width: 50px;
    height: 50px;
    text-align: center;
    padding: 0px;
    margin-bottom: 15px;
    line-height: 52px;
    border-radius: 100%;
`;
export const ServicesCardIcon = styled.img`
    height: auto;
    margin-bottom: 0px;
`;
export const ServicesCardHeading = styled(Commonh4)`
    font-size:23px;
    font-weight:500;
    margin-bottom:10px;
    text-align: left;
`;
export const ServicesCardPara = styled(Commonpara)`
    font-size:14px;
    margin-bottom:0px;
    text-align: left;
`;
export const ServicesRow = styled(Row)`
    align-items:center;
`;

export const Heading = styled(SectionHeading)`
    text-align:center;
    margin-bottom:40px;
`;

export const HeadingWrapper = styled.div`
    max-width:800px;
    margin:auto;
    margin-bottom:20px;
    text-align:center;
`;

export const ServicesImg = styled.img`
`;
