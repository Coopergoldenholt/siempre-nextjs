import styled from 'styled-components';
import {device} from '../Common/device'

export const ClientsSection = styled.section`
    padding:80px 0px;
    @media ${device.tablet} {
        padding:80px 10px;    
    }
`;

export const ClientsInner = styled.div`
    margin-top:15px;
`;

export const ClientsCol = styled.div`
    box-shadow: 0px 0px 12px 0px #e4e4e4;
    height: 150px;
    margin-top: 30px;
    border-radius: 10px;
    margin-right: 10px;
    margin-left: 10px;
    padding: 30px;
    text-align:center;

    img{
        margin-bottom: 0px;
        width: auto;
        max-height: 90px;
    }
    @media ${device.laptop} {
        height:auto;
    }
    
    @media ${device.tablet} {
        height: auto;
    }
`;

export const ClientsImage = styled.img`
`;

