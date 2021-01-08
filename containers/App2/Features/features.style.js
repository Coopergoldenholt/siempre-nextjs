import styled from 'styled-components';
import {Commonpara,Commonh4,Commonbtn} from '../Common/common.style';
import {device} from '../Common/device';
import { Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
export const FeaturesWrapper = styled.section`
    padding: 70px 0px;
    
    @media ${device.laptop} {
        padding:50px 10px;
    }
    @media ${device.tablet} {
        padding:50px 10px;
    }
`;
    
export const FeaturesRight = styled.div`
    
`;

export const FeaturesCard = styled.div`
    background:#fff;
    border-radius:10px;
    cursor:pointer;
    text-align:center;
    padding: 80px 40px;
    margin:0px 20px;
    box-shadow: 0px 0px 30px 0px #ddd;
    transition:all .5s;
    overflow:hidden;

    :hover
    {
        transition:all .5s;
        transform: scale(1.1);
    }

    @media ${device.laptop} {
        margin:20px 0px;
        padding: 50px 20px;
    }

    @media ${device.tablet} {
        margin:20px 0px;
        padding: 50px 30px;
    }
`;

export const FeaturesCardImg = styled.div`

`;
export const FeaturesCardIcon = styled.img`
    margin-bottom:30px;
    height:50px;
`;
export const FeaturesCardHeading = styled(Commonh4)`
    font-size:23px;
    font-weight:500;
    margin-bottom:20px;
`;
export const FeaturesCardPara = styled(Commonpara)`
    font-size:14px;
    margin-bottom:30px;
`;

export const FeaturesCardCenter = styled.div`

`;

export const FeaturesRow = styled(Row)`
    align-items:center;
    ::before{
        
    }
`;

export const ButtonWrapper = styled.div`
    display:inline-flex;
`;

export const FeaturesBtn = styled(Commonbtn)`

`;


export const RightArrowYellow = styled.img`
    width: 22px;
    margin-bottom: 0px;
    vertical-align: middle;
    margin-left: 6px;
    position: absolute;
    top: 13px;
    right: 160px;

    ${FeaturesBtn}:hover &{
        right:30px;
        -webkit-transition: all 0.5s ease-in-out;
        -ms-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
    }
`;


export const RightArrow = styled.img`
    width: 22px;
    margin-bottom: 0px;
    vertical-align: middle;
    margin-left:6px;
    position: relative;
    left: 0px;
    ${FeaturesBtn}:hover &{
        left: 60px;
        -webkit-transition: all 0.5s ease-in-out;
        -ms-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
    }
`;