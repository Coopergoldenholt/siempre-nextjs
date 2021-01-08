import styled from 'styled-components';
import {device} from '../Common/device'

export const Commonbtn = styled.a`
    font-size:16px;
    background: #fff;
    color: #3a3a3a;
    padding: 8px 30px;
    border-radius: 4px;
    display: inline-block;
    box-shadow: 0px 0px 13px -2px #4e32ed;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    text-transform:uppercase;
    
    :hover{
        text-decoration:none;
        color: #3a3a3a;
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
    }
`;

export const Commonpara = styled.p`
    color:#7a7f83;
    margin-bottom:26px;
    font-size:15px;
`;

export const Commonh3 = styled.h3`
    font-size: 36px;
    margin-bottom: 30px;
    font-weight:400;

    @media ${device.tablet} {
        font-size:30px;
    }
`;

export const SectionHeading = styled.h3`
    font-size:36px;
    color:#3a3a3a;
    margin-bottom:15px;
    text-align:center;
    text-transform:uppercase;

    @media ${device.tablet} {
        font-size:30px;
    }
`;

export const Commonh4 = styled.h4`
    font-size:24px;
    color:#333;
    line-height:30px;
    margin-bottom:20px
    font-weight:500;

    @media ${device.tablet} {
        font-size:20px;
    }
`;


