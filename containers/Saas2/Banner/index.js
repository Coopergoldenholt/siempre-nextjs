import React,{Component} from 'react';
import {BannerSection,
    BannerContents,
    BannerContentLeft,BannerVideoBtn,
    BannerContentRight,
    BannerBtn,
    BannerPara,BannerBtnsWrapper,
    BannerH3,
    BannerH4,PlayIconCustom,BannerImg
} from './banner.style'
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginDialog from '../LoginDialog';
import { Banner } from '../../../pagedata/Saas2';
class BannerPage extends Component{
    constructor(props){
        super(props);
        this.state = {modal: false}
    }

    handleClose = () => this.setState({ modal: !this.state.modal });

    render(){
        return(
            <BannerSection id="homeContainer">
                <Container>
                    <BannerContents>
                        <BannerContentLeft>
                                <BannerH3>{Banner.BannerH3}</BannerH3>
                                <BannerH4>{Banner.BannerH4}</BannerH4>
                                <BannerPara>{Banner.BannerPara}</BannerPara>
                                <BannerBtnsWrapper>
                                    <BannerBtn onClick={this.handleClose}>{Banner.BannerBtn}</BannerBtn>
                                    <BannerVideoBtn href="#">
                                        <PlayIconCustom size={45}/>{Banner.BannerVideoBtnTxt}
                                        </BannerVideoBtn>
                                </BannerBtnsWrapper>
                        </BannerContentLeft>

                        <BannerContentRight>
                                <BannerImg 
                                    src={require("../../../assets/"+Banner.BannerImage)} 
                                    alt=""
                                />
                        </BannerContentRight>

                    </BannerContents>

                    <LoginDialog modalFlag = {this.state.modal} handleClose ={this.handleClose}/>
                </Container>
            </BannerSection>
        );
    }
}

export default BannerPage;