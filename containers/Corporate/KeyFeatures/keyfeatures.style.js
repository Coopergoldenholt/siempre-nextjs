import styled from 'styled-components';
import {Commonh4,Commonpara} from '../Common/common.style';
import {Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {device} from '../Common/device'
import BackgroundImg from "../../../assets/corporate-images/bg-pattern.png"

export const KeyFeaturesSection = styled.section`
    padding:80px 0px; 
    position:relative;
    ::before{
        content:"";
        background-image:url(${BackgroundImg});
        display: block;
        background-repeat: no-repeat;
        position: absolute;
        right: -110px;
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

export const KeyFeatInner = styled.div`
    margin-top:15px;
`;

export const FeatureRow = styled(Row)`
    align-items:center;
`;

export const KeyFeatLeft = styled.div`

`;

export const KeyFeatLeftCol = styled.div`
    display:flex;
    align-items:center;
    margin:30px 0px;
    background: #fff;
    margin-right:10px;
    border-radius: 6px;
    padding: 15px 30px;
    transition:all .3s;
    border:1px solid #eaeaea;

    :hover{
        box-shadow: 0px 0px 12px #e4e4e4;
        transition:all .3s;
        transform:scale(1.05);
    }

    :last-child{
        margin:30px 0px 0px;
    }

    @media ${device.tablet} {
        padding: 15px 15px;
        margin-right:0px;
    }
`;

export const KeyFeatLeftIconWrapper = styled.div`
    margin-right:20px;
`;

export const KeyFeatLeftIcon = styled.div``;

export const KeyFeatLeftIconimg = styled.img`
    margin-bottom:0px;
    width: 40px;
`;

export const KeyFeatLeftContent = styled.div``;

export const KeyFeatLeftTitle = styled(Commonh4)`
    margin-bottom:0px;
    font-size:20px;
    @media ${device.tablet} {
        font-size:18px;
    }
`;
export const KeyFeatLeftPara = styled(Commonpara)`
    margin-bottom:0px;
`;

export const KeyFeatRight = styled.div`
    margin-left:30px;
    @media ${device.tablet} {
        margin-left:0px;
        margin-top:20px;
    }
`;

export const KeyFeatRightimg = styled.img`
    width:100%;
`;


