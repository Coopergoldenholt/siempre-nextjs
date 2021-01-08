import styled from 'styled-components';
import {device} from '../Common/device';
import {Commonbtn,Commonpara,Commonh4,SectionHeading} from '../Common/common.style';

export const ProductsSection = styled.section`
    padding:100px 0px;
    position:relative;

    @media ${device.tablet} {
        padding: 80px 0px;
    }
`;


export const ProductsInner = styled.div`
    display:flex;
    align-items:center;
    
    @media ${device.minlaptopL} {
        max-width:1140px;
        margin:0px auto;
    }

    @media ${device.tablet} {
        display:block;
    }
`;

export const ProductsCol1 = styled.div`
    width:60%;
    @media ${device.tablet} {
        width:100%;
    }
`;

export const ProductsRightImg = styled.img`
    text-align:left;
    margin-bottom:0px;
`;

export const ProductsCol2 = styled.div`
    width:40%;
    text-align:left;
    padding-left:30px;
   
    @media ${device.laptopL} {
        margin-right: calc(50% - 570px);
    }

    @media ${device.laptopM} {
        margin-right: calc(50% - 480px);
    }

    @media ${device.laptop} {
        margin-right: calc(50% - 360px);
    }

    @media ${device.tablet} {
        width:100%;
        max-width: 540px;
        margin:auto;
        padding:30px 25px 0px;
    }
`;

export const ProductsHeading = styled(SectionHeading)`
    text-align:left;
`;
export const ProductsPara = styled(Commonpara)`
    font-size:14px;
`;

export const ProductsSubHeading = styled(Commonh4)`
    text-align:left;
`;

export const ProductsBtn = styled(Commonbtn)`
`;
