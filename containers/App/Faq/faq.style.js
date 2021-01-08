import styled from 'styled-components';
import {SectionHeading,Commonh4} from '../Common/common.style';
import {Plus} from 'styled-icons/boxicons-regular/Plus';
import {Container} from "react-bootstrap";
import {Minus} from 'styled-icons/boxicons-regular/Minus';
import {device} from '../Common/device'
import 'bootstrap/dist/css/bootstrap.min.css';

export const FaqWrapper = styled.section`
    padding: 100px 0px;
    position:relative;
    @media ${device.tablet} {
        padding: 80px 10px;
    }
`;

export const FaqContainer = styled(Container)`
    z-index:30;
    position:relative;
`;

export const FaqHeadingWrapper = styled.div`
    max-width:600px;
    margin:auto;
    text-align:center;
    margin-bottom:55px;

    @media ${device.tablet} {
        margin-bottom:40px;
    }
`;

export const FaqSectionHeading = styled(SectionHeading)`
    line-height:35px;
`;

export const FaqSubHeading = styled(Commonh4)`
    margin-bottom:0px;
`;

export const FaqAccordianWrapper = styled.div`
    max-width:900px;
    margin:auto;
`;
export const AccordianRow = styled.div`
    box-shadow: 0px 0px 16px 0px #e4e4e4;
    margin-top: 20px;
    border-radius: 6px;
    overflow: hidden;
    :hover{
        // box-shadow: 0px 0px 16px 0px #adf2cd;
        transition: all .5s;
    }
`;

export const Accordian = styled.div`
    overflow: hidden;
    cursor:pointer;
`;

export const AccordianTitleCol = styled.div`
    display:flex;
    align-items:center;
    background:#fff;
    transition: all .5s;
`;

export const AccordianTitle = styled.h3`
    padding:15px 20px 15px 10px;
    font-size:18px;
    overflow:hidden;
    margin-bottom:0px;

    @media ${device.tablet} {
        font-size:16px;
    }
`;
export const AccordianContentCol = styled.div`
    padding: 0px 20px 15px 25px;
    ${props => props.isActive &&`
        
    `}

    ${props => !props.isActive &&`

    `}
`;
export const AccordianContent = styled.p`
    color: #565759;
    font-size:15px;
    margin-bottom:0px;
    padding:10px 20px;
`;


export const PlusIcon = styled(Plus)`
    color: #5ce59b;
    width: 25px;
    margin-left: 10px;
    flex-shrink: 0;
`;

export const MinusIcon = styled(Minus)`
    color: #5ce59b;
    width: 25px;
    margin-left: 10px;
    flex-shrink: 0;
`;