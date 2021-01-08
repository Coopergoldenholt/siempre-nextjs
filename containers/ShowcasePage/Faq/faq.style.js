import styled from 'styled-components';
import {SectionHeading} from '../Common/common.style';
import {KeyboardArrowRight} from 'styled-icons/material/KeyboardArrowRight';
import {KeyboardArrowDown} from 'styled-icons/material/KeyboardArrowDown';
import {device} from '../Common/device';

export const PlusIcon = styled(KeyboardArrowRight)`
    color: #fc9512;
    width: 25px;
    margin-left: 10px;
`;

export const MinusIcon = styled(KeyboardArrowDown)`
    color: #fc9512;
    width: 25px;
    margin-left: 10px;
`;

export const FaqWrapper = styled.section`
    padding:100px 0px;

    @media ${device.tablet} {
        padding-left:10px;
        padding-right:10px;
    }
`;

export const FaqSectionHeading = styled(SectionHeading)`
    margin-bottom:35px;
    line-height: 45px;
`;
export const FaqHeadingWrapper = styled.div`
    max-width:600px;
    margin:auto;
    text-align:center;
    margin-bottom:35px;
`;

export const FaqAccordianWrapper = styled.div`
    max-width:900px;
    margin:auto;
`;
export const AccordianRow = styled.div`
    border-bottom:1px solid #ddd;
    :last-child{
        border-bottom:0px solid #ddd;
    }
    
`;
export const Accordian = styled.div`
    overflow: hidden;
`;
export const AccordianTitleCol = styled.div`
    display:flex;
    align-items:center;
    background:#fff;
    transition: all .5s;

    :hover{
        background:#f5f5f5;
        transition: all .5s;
    }
`;
export const AccordianTitle = styled.h3`
    padding: 15px 20px;
    font-size:18px;
    overflow:hidden;
    margin-bottom:0px;
    cursor:pointer;
    width:95%;

    @media ${device.tablet} {
        padding: 15px 0px;
    }
    
`;
export const AccordianContentCol = styled.div`
    padding: 0px 20px 15px 20px;
    ${props => props.isActive &&`
        
    `}

    ${props => !props.isActive &&`

    `}
`;
export const AccordianContent = styled.p`
    color: #565759;
    font-size:14px;
    margin-bottom:0px;
    padding:10px 20px;
`;
