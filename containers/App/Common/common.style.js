import styled from 'styled-components';

export const Commonbtn = styled.a`
    font-size:14px;
    background: #5ce59b;
    color: #fff;
    padding: 6px 40px;
    text-decoration:none;
    font-weight:bold;
    border-radius: 25px;
    display: inline-block;
    box-shadow: 0px 0px 13px -2px #5ce59b;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    
    :hover{
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        color: #fff;
        text-decoration:none;
    }
`;

export const Commonpara = styled.p`
    color:#595959;
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
    color:#262626;
    margin-bottom:15px;
    text-align:center;
    line-height:32px;
`;

export const Commonh4 = styled.h4`
    font-size:20px;
    color:#262626;
    line-height:30px;
    text-align:center;
    margin-bottom:20px
    font-weight:500;
`;


