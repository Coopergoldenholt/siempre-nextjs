import styled from 'styled-components';
import {Commonpara,Commonh4,Commonbtn,SectionHeading} from '../Common/common.style';
import {device} from '../Common/device';
import {Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import BackgroundImg from '../../../assets/saas-images/triangle-bgsmall.png'

export const FeaturesSection = styled.section`
    padding:100px 0px 70px;
    background:#f9fafc;
    background-image: url(${BackgroundImg});
    background-repeat: no-repeat;
    background-size: 270px;
    background-position: -80px 40px;

    @media ${device.tablet} {
        padding-top:80px;
        padding-bottom:50px;
        padding-left:10px;
        padding-right:10px;
    }
`;
    
export const FeaturesRow = styled(Row)`
    align-items:center;
`;

export const FeaturesLeft = styled.div`
    @media ${device.laptop} {
        margin-bottom:80px;
    }
    @media ${device.tablet} {
        margin-bottom:50px;
    }

`;

export const FeaturesLeftH3 = styled(SectionHeading)`
    text-align: left;
`;

export const FeaturesLeftPara = styled(Commonpara)`
    text-align:left;
    font-size:14px;
`;

export const FeaturesLeftBtn = styled(Commonbtn)`

`;

export const FeaturesRight = styled.div`
    padding-left:70px;
    @media ${device.laptop} {
        padding-left:0px;
    }
    @media ${device.tablet} {
        padding-left:0px;
    }
`;

export const FeaturesCard = styled.div`
    background:#fff;
    border-radius:10px;
    cursor:pointer;
    min-height: 250px;
    padding: 30px 25px;
    box-shadow: 0px 0px 8px 1px #ddd;
    transition:all .5s;
    overflow:hidden;
    margin-bottom:30px;
    :hover
    {
        transition:all .5s;
        transform: translateY(-10px);
    }
`;

export const FeaturesCardImg = styled.div`

`;

export const FeaturesCardIcon = styled.img`
    margin-bottom:10px;
    width: 50px;
`;

export const FeaturesCardHeading = styled(Commonh4)`
    font-size:23px;
    font-weight:500;
    margin-bottom:10px;
`;

export const FeaturesCardPara = styled(Commonpara)`
    font-size:14px;
    margin-bottom:0px;
`;