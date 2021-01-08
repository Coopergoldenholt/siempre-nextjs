import styled from 'styled-components';
import {Commonpara,Commonh4,Commonbtn} from '../Common/common.style';
import {device} from '../Common/device';
import { Row, Container} from "react-bootstrap";
import BackgroundPattern from '../../../assets/app-images/effect-1.png'
import 'bootstrap/dist/css/bootstrap.min.css';

export const FeaturesSection = styled.section`
    padding: 80px 0px;
    background-size: 100%;
    position:relative;

    @media ${device.tablet} {
        padding:60px 0px;
    }
    
`;
 
export const FeaturesInner = styled.div`
    position:relative;

    ::before{
        content:"";
        background-image: url(${BackgroundPattern});
        position: absolute;
        background-repeat: no-repeat;
        height: 450px;
        width: 400px;
        top: -50px;
        background-size: 100%;
        background-position: -223px 20px;

        @media ${device.laptop} {
            width: 300px;
        }
        @media ${device.tablet} {
            width: 300px;
        }

    }

    ::after{
        content:"";
        background-image: url(${BackgroundPattern});
        position: absolute;
        background-repeat: no-repeat;
        height: 450px;
        width: 400px;
        right: 0px;
        top: 70px;
        z-index: 9;
        background-size: 100%;
        background-position: 263px 20px;
        @media ${device.laptop} {
            width: 300px;
            background-position: 203px 150px;
        }
        @media ${device.tablet} {
            width: 300px;
            background-position: 213px 160px;
            top: auto;
            bottom: 0px;
        }
    }
`;
export const ContainerWrapper = styled.div`
    @media ${device.tablet}{
        padding-left:10px;
        padding-right:10px;
    }
`;
export const CustomContainer = styled(Container)`
    position:relative;
    z-index:99;
`;

export const FeaturesRow = styled(Row)`
    align-items:center;
    ::before{
        
    }
`;

export const FeaturesContents = styled.div`
    
`;

export const FeaturesCard = styled.div`
    background:#fff;
    border-radius:10px;
    cursor:pointer;
    text-align:center;
    padding: 50px 30px;
    margin:20px 20px;
    box-shadow: 0px 0px 30px 0px #ddd;
    transition:all .3s;
    overflow:hidden;

    :hover
    {
        transition:all .3s;
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
    height: 50px;
`;

export const FeaturesCardHeading = styled(Commonh4)`
    font-size:23px;
    font-weight:500;
    margin-bottom:20px;

    @media ${device.laptop} {
        font-size:20px;
    }
    @media ${device.tablet} {
        font-size:23px;
    }
`;

export const FeaturesCardPara = styled(Commonpara)`
    font-size:14px;
    margin-bottom:30px;
`;


export const FeaturesCardCenter = styled.div`

`;

export const FeaturesBtn = styled(Commonbtn)`

`;