import styled from 'styled-components';
import {SectionHeading,Commonh4} from '../Common/common.style';
import {PlusCircle} from 'styled-icons/boxicons-solid/PlusCircle';
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MinusCircle} from 'styled-icons/boxicons-solid/MinusCircle';
import {device} from '../Common/device'

export const PlusIcon = styled(PlusCircle)`
    color: #0071e3;
    width: 25px;
    margin-right: 10px;
    flex-shrink:0;
`;

export const MinusIcon = styled(MinusCircle)`
    color: #0071e3;
    width: 25px;
    margin-right: 10px;
    flex-shrink:0;
`;

export const FaqWrapper = styled.section`
    padding:70px 0px;
    position:relative;
    
    @media ${device.tablet} {
        padding-left:10px;
        padding-right:10px;
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
    margin-bottom:10px;
`;

export const FaqSectionHeading = styled(SectionHeading)`
    line-height:35px;
`;

export const FaqPara = styled(Commonh4)`

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
    padding: 15px 10px 15px 20px;
    font-size:18px;
    overflow:hidden;
    margin-bottom:0px;
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
    padding: 10px 0px;
`;
