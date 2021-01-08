import styled from 'styled-components';
import React from 'react';

export const CommonbtnShadow = styled.div`
    background: ${props => props.bg};
    border-radius: 3px;
    height: 45px;
    margin-left: 6px;
    margin-top: -6px;
    position: absolute;
    transition: transform 0.5s;
    width: 150px;
`;
export const CommonbtnAnchor = styled.a`
    background: #f26522;
    border-radius: 3px;
    height: 45px;
    text-align:center;
    line-height: 40px;
    transition: transform 0.5s;
    color:#fff;
    text-decoration:none;
    font-size:16px;
    font-weight:400;
    position: absolute;
    width: 150px;

    :hover{
        text-decoration:none;
        color:#fff;
        transform: translate(6px, -6px);
    }
   
`;
export const CommonFormbtnShadow = styled.div`
    background: ${props => props.bg};
    border-radius: 3px;
    height: 45px;
    margin-left: 6px;
    margin-top: -6px;
    position: absolute;
    transition: transform 0.5s;
    width: 150px;
`;
export const CommonFormbtnAnchor = styled.button`
    background: #f26522;
    border-radius: 3px;
    height: 45px;
    text-align:center;
    line-height: 40px;
    transition: transform 0.5s;
    color:#fff;
    text-decoration:none;
    font-size:16px;
    font-weight:400;
    position: absolute;
    border:none;
    cursor:pointer;
    width: 150px;

    :hover{
        transform: translate(6px, -6px);
    }
   
`;

export const CommonBtn = ({buttonText,link,background}) =>(
    <div>
    <CommonbtnShadow bg={background}></CommonbtnShadow>
    <CommonbtnAnchor href={link}>{buttonText}</CommonbtnAnchor>
    </div>
)

export const CommonFormBtn = ({buttonText,link,background}) =>(
    <div>
    <CommonFormbtnShadow bg={background}></CommonFormbtnShadow>
    <CommonFormbtnAnchor type="submit">{buttonText}</CommonFormbtnAnchor>
    </div>
)

export const Commonpara = styled.p`
    color:#5c5c5c;
    margin-bottom:26px;
    font-size:16px;
`;

export const Commonh3 = styled.h3`
    font-size: 36px;
    margin-bottom: 30px;
`;

export const Commonh4 = styled.h4`
    font-size:24px;
    color:#202020;
    line-height:30px;
    margin-bottom:20px
`;

export const SectionHeading = styled.h3`
    font-size:30px;
    color:#202020;
    margin-bottom:15px;
    text-align:center;
    font-weight:300;
`;


export const SectionSubHeading = styled.p`
    font-size:16px;
    color:#5c5c5c;
    text-align:center;
    font-weight:300;
`;

