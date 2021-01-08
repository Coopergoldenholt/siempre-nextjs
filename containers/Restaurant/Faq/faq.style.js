import styled from 'styled-components';
import {SectionHeading} from '../Common/common.style';
import {KeyboardArrowRight} from 'styled-icons/material/KeyboardArrowRight';
import {KeyboardArrowDown} from 'styled-icons/material/KeyboardArrowDown';
import {device} from '../Common/device';

export const FaqSection = styled.section`
    padding:80px 0px;
    background:#f9fafc;

    @media ${device.tablet} {
        padding-left:10px;
        padding-left:10px;
    }
`;

export const FaqSectionHeading = styled(SectionHeading)`
    line-height:35px;
    margin-bottom:25px;
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
    // :last-child{
    //     border-bottom:0px solid #ddd;
    // }
    
`;
export const Accordian = styled.div`
    overflow: hidden;
`;
export const AccordianTitleCol = styled.div`
    display:flex;
    align-items:center;
    transition: all .5s;
    :hover{
        background:#f5f5f5;
        transition: all .5s;
    }
`;
export const AccordianTitle = styled.h3`
    padding: 15px 10px 15px 20px;
    font-size:18px;
    overflow:hidden;
    margin-bottom:0px;
    cursor:pointer;
    flex-grow:1;
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
    font-size:15px;
    margin-bottom:0px;
    padding:10px 0px;
`;


export const PlusIcon = styled(KeyboardArrowRight)`
    color: #f26522;
    width: 25px;
    margin-right: 10px;
    flex-shrink:0;
`;

export const MinusIcon = styled(KeyboardArrowDown)`
    color: #f26522;
    width: 25px;
    margin-right: 10px;
    flex-shrink:0;
`;