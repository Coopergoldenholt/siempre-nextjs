import styled from 'styled-components';

export const Commonbtn = styled.a`
    font-size:14px;
    background: #fff;
    color: #2979ff;
    padding: 6px 30px;
    border-radius: 4px;
    display: inline-block;
    box-shadow: 0px 0px 13px -2px #4e32ed;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    
    :hover{
        text-decoration:none;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
`;

export const CommonRedbtn = styled.a`
    font-size:14px;
    background: #ef5350;
    color: #fff;
    text-transform:uppercase;
    padding: 8px 40px;
    border-radius: 4px;
    text-decoration:none;
    display: inline-block;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    
    :hover{
        text-decoration:none;
        color: #fff;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
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
`;

export const SectionHeading = styled.h3`
    font-size:36px;
    color:#3a3a3a;
    margin-bottom:15px;
    text-align:center;
`;

export const Commonh4 = styled.h4`
    font-size:24px;
    color:#333;
    line-height:30px;
    margin-bottom:20px
    font-weight:500;
`;

