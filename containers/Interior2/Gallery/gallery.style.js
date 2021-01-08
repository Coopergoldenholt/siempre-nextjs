import styled from 'styled-components';
import {device} from '../Common/device'

export const GallerySection = styled.section`
    padding:80px 0px;
    background: #f9fafc;
    transition:all 1s;
`;

export const PorfolioSlider = styled.div`
    margin-top:45px;
    .slick-slide img{
        width:100%;
    }
    @media ${device.tablet} {
        width:100%;
        padding:0px 0px;
    }
`;

export const GallerySliderCol = styled.div`
    outline:0;
    transition:all 1s;
`;

export const GalleryInnerContainer = styled.div`
    margin:0px 10px;
    .GallerySliderImg{
        border-radius:10px;
        height:210px;
        margin-bottom:25px;

        @media ${device.tablet} {
            width:100%;
            padding:0px 0px;
        }
    }

`;
export const GallerySliderImg = styled.img`
    transition:all 1s;
    border-radius:10px;
    height:210px;
    object-fit:cover;

    @media ${device.tablet} {
        width:100%;
        padding:0px 0px;
    }
`;

export const NextPrev = styled.div`
    text-align:center;
    line-height:0px;
    margin-top:20px;
    button{
        border:none;
        background:none;
        outline:none;
    }
`;

export const ImgButton = styled.button`
    line-height:0px;
    padding-bottom:0px;
`;

export const PrevImg = styled.img`
    width: 50px;
    margin:0px 5px;
    cursor:pointer;
    transition:all .4s;
    
    :hover
    {
        transform:scale(1.1);
        transition:all .4s;
    }
`;
export const NextImg = styled.img`
    width: 50px;
    margin:0px 5px;
    cursor:pointer;
    transition:all .4s;
    
    :hover
    {
        transform:scale(1.1);
        transition:all .4s;
    }
`;