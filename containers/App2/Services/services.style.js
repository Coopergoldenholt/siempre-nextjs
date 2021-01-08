import styled from 'styled-components';
import {device} from '../Common/device';
import {Commonpara,Commonbtn,SectionHeading,Commonh4} from '../Common/common.style';
import {Check} from'styled-icons/fa-solid/Check';
export const ServicesWrapper = styled.section`
    padding:70px 0px;
    @media ${device.tablet} {
        padding-left:10px;
        padding-right:10px;
    }
`;

export const CheckIcon = styled(Check)`
    width: 35px;
    padding: 10px;
    height: 35px;
    color: #393939;
    background: #fff;
    border-radius: 100%;
    box-shadow: 1px 3px 4px 1px #e6e6e6;
`;
export const ServicesHeading = styled(SectionHeading)`

`;

export const ServicesPara = styled(Commonh4)`

`;

export const ServicesHeadingWrapper = styled.div`
    max-width:600px;
    margin:auto;
    text-align:center;
`;

export const ServicesInner = styled.div`
    margin-top:30px;
    .row
    {
        align-items:center;
    }
`;

export const ServicesLeft = styled.div`
`;

export const ServicesLeftImg = styled.img`
    width:100%;
`;

export const ServicesRight = styled.div`
    @media ${device.laptop} {
        margin-top:30px;
    }
`;

export const ServicesRightUl = styled.ul`
    margin-bottom:50px;
    margin-left:0px;
`;

export const ButtonWrapper = styled.div`
    display:inline-flex;
`;

export const ServicesRightLi = styled.li`
    margin-bottom:30px;
    list-style:none;
    display:flex;
`;
export const ServicesRightLih3 = styled(SectionHeading)`
    text-align:left;
    font-size:18px;
    font-weight:500;
    color:#393939;
    margin-bottom:10px;
`;
export const ServicesRightLipara = styled(Commonpara)`
    font-size:14px;
`;
export const ServicesRightBtn = styled(Commonbtn)`
    margin-left:10px;
`;


export const ServicesLiImgCol = styled.div`

`;
export const ServicesLiContentCol = styled.div`
    margin-left:20px
`;

export const RightArrowYellow = styled.img`
    width: 22px;
    margin-bottom: 0px;
    vertical-align: middle;
    margin-left: 6px;
    position: absolute;
    top: 13px;
    right: 200px;

    ${ServicesRightBtn}:hover &{
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
    ${ServicesRightBtn}:hover &{
        left: 60px;
        -webkit-transition: all 0.5s ease-in-out;
        -ms-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
    }
`;
