import styled from 'styled-components';
import {device} from '../Common/device'

export const GallerySection = styled.section`
    padding:70px 0px;
    background:#f5f5f5;
    @media ${device.tablet} {
        padding-top:50px;
        padding-bottom:50px;
    }
`;

export const GalleryImageWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin-top: 45px;
    @media ${device.tablet} {
        margin-top:25px;
    }

`;

export const GalleryImage = styled.img`
    width:25%;
    height:250px;
    margin-bottom:0px;
    padding:0px;
    @media ${device.tablet} {
        width:50%;
    }
`;