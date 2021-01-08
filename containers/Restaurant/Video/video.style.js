import styled from 'styled-components';
import {SectionHeading} from '../Common/common.style'
import {device} from '../Common/device'
import {PlayCircle} from 'styled-icons/feather/PlayCircle'
import BackgroundImg from '../../../assets/restaurant-images/video.png'

export const VideoSection = styled.section`
    padding:80px 0px;
    @media ${device.tablet} {
        padding-right:10px;
        padding-left: 10px;
    }
`;

export const VideoCol = styled.div`
    background-image: url(${BackgroundImg});
    border-radius: 20px;
    text-align:center;
    background-repeat:no-repeat;
    background-size:cover;
`;

export const VideoColItem = styled.div`
    max-width: 550px;
    margin: auto;
    padding: 70px 20px;
`;

export const VideoColHeading = styled(SectionHeading)`
    font-size:35px;
    color:#fff;
    margin-bottom:50px;
    line-height:50px;
`;

export const VideoPlay = styled(PlayCircle)`
    width:120px;
    color:#fff;
    border-radius:100%;
    cursor:pointer;
    transition:0.5s all;
    :hover{
        background:#fff;
        border-radius:100%;
        color:#f26522;
        transition:0.5s all;
    }
`;