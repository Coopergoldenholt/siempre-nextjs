import styled from 'styled-components';
import {Commonpara,Commonh4,Commonh3} from '../Common/common.style';
import {device} from '../Common/device';
import {Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const FeaturesWrapper = styled.section`
    padding:100px 0px;
    background:#f9fafc;
    @media ${device.tablet} {
        padding-left:10px;
        padding-right:10px;
    }
`;
    

export const FeaturesRight = styled.div`
    @media ${device.laptop} {
        padding-left:0px;
    }
    @media ${device.tablet} {
        padding-left:0px;
    }
`;

export const FeaturesCard = styled.div`
    background:#fff;
    border-radius:5px;
    cursor:pointer;
    min-height: 230px;
    margin:10px 5px;
    padding: 30px 25px;
    box-shadow: 0px 0px 28px 1px #ddd;
    transition:all .3s;
    margin-bottom:30px;
    overflow:hidden;
    text-align:center;
    :hover
    {
        transition:all .3s;
        box-shadow: 0px 0px 38px 3px #ccc;
    }

    @media ${device.laptop} {
        margin:10px 0px;
        padding: 30px 20px;
    }

    @media ${device.tablet} {
       margin:10px 0px;
       padding: 30px 20px;
       min-height: 240px;
    }
`;

export const FeaturesCardImg = styled.div`
    margin-bottom:10px;
`;

export const FeaturesCardIcon = styled.img`
    margin-bottom:10px;
    height: 50px;
`;
export const FeaturesCardHeading = styled(Commonh4)`
    font-size:23px;
    margin-bottom:10px;

    @media ${device.laptop} {
        font-size:21px;
    }
    
    @media ${device.tablet} {
        font-size:23px;
    }
`;
export const FeaturesCardPara = styled(Commonpara)`
    font-size:14px;
    margin-bottom:0px;
`;

export const FeaturesRow = styled(Row)`
    align-items:center;
`;
export const HeadingWrapper = styled.div`
    margin-bottom:60px;
    text-align:center;
`;
export const Heading = styled(Commonh3)`
    
`;