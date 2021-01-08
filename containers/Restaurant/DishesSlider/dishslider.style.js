import styled from 'styled-components';
import {SectionHeading} from '../Common/common.style';
import {device} from '../Common/device';

export const DishSliderSection = styled.section`
    padding:80px 0px;
    background: #fbfbfb;
    overflow:hidden;
    div{
        outline: 0;
    }
    @media ${device.tablet} {
        padding-right:10px;
        padding-left: 10px;
    }
`;

export const SliderCustomContainer = styled.div`
    padding-left:15px;

    @media ${device.minlaptopL} {
        max-width:1140px;
        margin:0px auto;
    }

    @media ${device.laptopL} {
        margin-left: calc(50% - 570px);
    }

    @media ${device.laptopM} {
        margin-left: calc(50% - 480px);
    }

    @media ${device.laptop} {
        margin-left: calc(50% - 360px);
    }

    @media ${device.tablet} {
        max-width: 540px;
        padding-right: calc(30px / 2);
        padding-left: calc(30px / 2);
        width: 100%;
        margin-right: auto;
        margin-left: auto;
    }
`;

export const SliderWrapperHeading = styled(SectionHeading)`
    margin-bottom: 60px;
`;

export const SliderWrapper = styled.div`
    .slick-slide{
        padding-right: 35px;
    }
    @media ${device.laptop} {
        padding-right:65px;
    }
    @media ${device.tablet} {
        padding-left:0px;
        padding-right:0px;
        .slick-slide{
            padding-right: 20px;
            padding-left: 20px;
        }
    }
`;

export const SliderColWrapper = styled.div`
    border-radius:10px;
`;

export const SliderCol = styled.div`
    position:relative;
    outline:0;
    overflow: hidden;
    border-radius:10px;
`;

export const SliderImg = styled.img`
    position:relative;
    border-radius:10px;
    margin-bottom:0px;
`;

export const SliderHoverIcon = styled.img`
    position:relative;
    border-radius:10px;
    margin-bottom:0px;
`;

export const SliderHover = styled.div`
    text-align:center;
    background: rgba(53, 9, 107, .7);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding:20px;
    visibility:hidden;
    opacity: 0; 
    transition: visibility 0s, opacity 0.5s linear; 
    ${SliderCol}:hover &{
        visibility:visible;
        opacity: 1;
    }
`;

export const SliderHoverText = styled(SectionHeading)`
    margin-top:100px;
    color:#fff;
    line-height: 40px;
    font-size: 25px;
`;

export const NextPrev = styled.div`
    text-align:center;
    margin-top:40px;
    line-height:0px;
    button{
        border:none;
        background:none;
        outline:none;
    }
`;

export const ImgButton = styled.button`
    line-height:0px;
`;

export const PrevImg = styled.img`
    width: 50px;
    margin:0px 10px;
    cursor:pointer;
    transition:all .4s;
    height:24px;
    :hover
    {
        transform:scale(1.1);
        transition:all .4s;
    }
`;

export const NextImg = styled.img`
    width: 50px;
    margin:0px 10px;
    cursor:pointer;
    transition:all .4s;
    height:24px;
    :hover
    {
        transform:scale(1.1);
        transition:all .4s;
    }
`;