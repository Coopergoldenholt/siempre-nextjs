import styled from 'styled-components';

export const Commonbtn = styled.a`
    display: inline-block !important;
    background: none;
    color: #ffffff;
    position: relative;
    outline: none;
    border: none;
    text-decoration:none;
    padding: 8px 30px;
    border-radius: 50px;
    z-index: 2;
    font-size: 14px;
    font-weight:bold;
    -webkit-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
    text-align: center;

    ::after{
        -webkit-transition: all 0.5s ease-in-out;
        -ms-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background: #0071e3;
        z-index: -1;
    }
    ::before{
        -webkit-transition: all 0.5s ease-in-out;
        -ms-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
        content: '';
        position: absolute;
        left: -350px;
        top: 0;
        height: 100%;
        width: 350px;
        background: #363636;
        z-index: -1;
    }
    :hover{
        color: #ffff00 !important;
        text-decoration:none;
    }
    :hover::before {
        left: 0;
        width: 100%;
        text-decoration:none;
    }
    :hover::after {
        left: 100%;
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
    color:#393939;
    margin-bottom:10px;
    text-align:center;
`;

export const Commonh4 = styled.h4`
    font-size:20px;
    color:#393939;
    line-height:30px;
    text-align:center;
    margin-bottom:20px
    font-weight:500;
`;


