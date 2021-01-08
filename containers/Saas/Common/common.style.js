import styled from 'styled-components';

export const Commonbtn = styled.a`
    font-size:14px;
    background: #ff850c;
    color: #fff !important;
    padding: 8px 30px;
    border-radius: 4px;
    text-decoration:none;
    text-transform:uppercase;
    display: inline-block;
    box-shadow: 0px 0px 13px -2px #ddd;

    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;

    :before{
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        border-radius:4px;
        bottom: 0;
        background: #6028fa;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transform-origin: 0 50%;
        transform-origin: 0 50%;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }
    :hover:before
    {
        text-decoration:none;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }
    :hover
    {
        text-decoration:none;
        color: #fff;
    }
`;


export const CommonSubmitbtn = styled.button`
    font-size:14px;
    background: #ff850c;
    color: #fff;
    padding: 8px 30px;
    border-radius: 4px;
    text-decoration:none;
    text-transform:uppercase;
    display: inline-block;
    box-shadow: 0px 0px 13px -2px #ddd;

    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;

    :before{
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        border-radius:4px;
        bottom: 0;
        background: #6028fa;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transform-origin: 0 50%;
        transform-origin: 0 50%;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }
    :hover:before
    {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }
    :hover
    {
        color: #fff;
    }
`;

export const Commonpara = styled.p`
    color:#565759;
    margin-bottom:26px;
    font-weight400;
`;

export const Commonh3 = styled.h3`
    font-size: 36px;
    margin-bottom: 30px;
    font-weight:500;
`;

export const Commonh4 = styled.h4`
    font-size:24px;
    color:#424345;
    line-height:30px;
    margin-bottom:20px
    font-weight:500;
`;

export const SectionHeading = styled.h3`
    font-size:30px;
    color:#424345;
    margin-bottom: 20px;
    text-align:center;
    font-weight:500;
`;


export const SectionSubHeading = styled.p`
    font-size:16px;
    color:#424345;
    text-align:center;
    font-weight:400;
`;


