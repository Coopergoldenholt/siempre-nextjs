import styled from 'styled-components';
import {Commonpara,Commonh4} from '../Common/common.style';
import {device} from '../Common/device';
import {Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const FeaturesSection = styled.section`
    padding:100px 0px;
    background:#f9fafc;
    @media ${device.tablet} {
        padding:90px 10px;
    }
`;

export const FeaturesRow = styled(Row)`
    align-items:center;
`;

export const FeaturesRight = styled.div`
    padding:0px 10px;
    @media ${device.laptop} {
        padding-left:0px;
    }
    @media ${device.tablet} {
        padding-left:0px;
        padding-right:0px;
    }
`;

export const FeaturesCard = styled.div`
    background:#fff;
    border-radius:5px;
    cursor:pointer;
    min-height: 250px;
    padding: 30px 30px;
    box-shadow: 0px 0px 8px 1px #ddd;
    transition:all .5s;
    margin:0px 20px;
    margin-top:${props => props.topMargin}
    overflow:hidden;
    :hover
    {
        transition:all .5s;
        transform: translateY(-10px);
    }
    @media ${device.tablet} {
       margin:10px 0px;
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
`;

export const FeaturesCardPara = styled(Commonpara)`
    font-size:14px;
    margin-bottom:0px;
`;