import styled from "styled-components";
import {Commonh3,Commonh4,Commonpara} from '../Common/common.style'
import {device} from '../Common/device'

export const DemoWrapper =styled.section`
    padding:100px 0px 60px;
    background:#f9fafc;
`;
export const SectionHeadingWrapper =styled.div`
    text-align:center;
    margin-bottom:30px;
`;
export const Heading =styled(Commonh3)`
    margin-bottom:20px;
`;

export const SubHeading =styled(Commonpara)`
    color:#2b2b2b;
`;

export const DemoImgFigure = styled.figure`
    border-radius: 8px;
    margin-bottom:0px;
    height:auto;
    width:100%;
    box-shadow: 0px 0px 43px 1px #dcdcdc;
    overflow: hidden;
    transition:all .3s;
`;

export const DemoColImg = styled.img`
    border-radius: 8px;
    margin-bottom:0px;
    object-fit:fill;
    height:auto;
    width:100%;
    display:block;
    transition:all .3s;
    :hover{
        transform:scale(1.1);
        transition:all .3s;
    }
`;

export const DemoColHeading =styled(Commonh4)`
    color:#2b2b2b;
    margin-bottom:0px;
    margin-top:15px;

    @media ${device.laptop} {
        font-size:22px;
    }
    @media ${device.tablet} {
        font-size:24px;
    }
`;

export const DemoCol =styled.div`
    padding:10px;
    text-align:center;
    margin: 30px 0px;
    cursor:pointer;
`;

export const DemoHref =styled.a`
   
`;

export const DemoImgWrapper =styled.div`
   position:relative;
`;