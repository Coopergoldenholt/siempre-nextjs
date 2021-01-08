import React,{Component} from 'react';
import {
    Row,Col,
    ModalBody,
  } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Tabs, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import {ModalSection,ModalForm,ModalLeft,ModalLeftHeading,ModalDialog,CustomTabList,LoginWrapper,CloseIcon,
    FormGroup,LoginName,LoginPassword,LoginSubmit,ForgotPasswordLink,SignupLink,OrLogin,TextRight,SignupWrapper,
    GoogleIcon,TwitterIcon,FbIcon,RegisterSocialUl,RegisterSocialLi,RegisterSocialLink} from "./logindialog.style"

class LoginDialog extends Component {

    render(){
        return(
            <div>
                <ModalDialog show={this.props.modalFlag} onHide={() => this.props.handleClose()}>
                    <ModalSection>
                        <ModalLeft>
                            <ModalLeftHeading>
                                Login & Enjoy our ultimate UI & UX experience
                            </ModalLeftHeading>
                        </ModalLeft>
                        <ModalForm>
                            <ModalBody>
                                <Tabs>
                                    <CustomTabList>
                                        <Tab>Login</Tab>
                                        <Tab>Register</Tab>
                                    </CustomTabList>
                                
                                    <TabPanel>
                                        <LoginWrapper>
                                            <FormGroup>
                                                <LoginName type="text" placeholder="User Name"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <LoginPassword type="password" placeholder="Password"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Row>
                                                    <Col md="6" sm="6" xs="12">
                                                        <ForgotPasswordLink href="#">Forgot Password?</ForgotPasswordLink>
                                                    </Col>
                                                    <Col md="6" sm="6" xs="12">
                                                        <TextRight>
                                                            <SignupLink href="#">Don't Have an Account?</SignupLink>
                                                        </TextRight>
                                                    </Col>
                                                </Row>
                                            </FormGroup>
                                            <FormGroup>
                                                <LoginSubmit>Login</LoginSubmit>
                                            </FormGroup>
                                            <FormGroup>
                                                <OrLogin>Or Login Using</OrLogin>
                                            </FormGroup>
                                            <FormGroup>
                                                <RegisterSocialUl>
                                                    <RegisterSocialLi>
                                                        <RegisterSocialLink href="#">
                                                            <FbIcon/>
                                                        </RegisterSocialLink>
                                                    </RegisterSocialLi>
                                                    <RegisterSocialLi>
                                                        <RegisterSocialLink href="#">
                                                            <GoogleIcon/>
                                                        </RegisterSocialLink>
                                                    </RegisterSocialLi>
                                                    <RegisterSocialLi>
                                                        <RegisterSocialLink href="#">
                                                            <TwitterIcon/>
                                                        </RegisterSocialLink>
                                                    </RegisterSocialLi>
                                                </RegisterSocialUl>
                                            </FormGroup>
                                        </LoginWrapper>
                                    </TabPanel>
                                    <TabPanel>
                                    <SignupWrapper>
                                            <FormGroup>
                                                <LoginName type="text" placeholder="Your Name"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <LoginName type="email" placeholder="Email ID"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <LoginPassword type="password" placeholder="Password"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <LoginPassword type="password" placeholder="Confirm Password"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <LoginSubmit>Register</LoginSubmit>
                                            </FormGroup>
                                            <FormGroup>
                                                <OrLogin>Or Register Using</OrLogin>
                                            </FormGroup>
                                            <FormGroup>
                                                <RegisterSocialUl>
                                                    <RegisterSocialLi>
                                                        <RegisterSocialLink href="#">
                                                            <FbIcon/>
                                                        </RegisterSocialLink>
                                                    </RegisterSocialLi>
                                                    <RegisterSocialLi>
                                                        <RegisterSocialLink href="#">
                                                            <GoogleIcon/>
                                                        </RegisterSocialLink>
                                                    </RegisterSocialLi>
                                                    <RegisterSocialLi>
                                                        <RegisterSocialLink href="#">
                                                            <TwitterIcon/>
                                                        </RegisterSocialLink>
                                                    </RegisterSocialLi>
                                                </RegisterSocialUl>
                                            </FormGroup>
                                        </SignupWrapper>
                                    </TabPanel>
                                </Tabs>
                            </ModalBody>
                            <CloseIcon onClick={this.props.handleClose}/>
                        </ModalForm>
                    </ModalSection>
                </ModalDialog>
            </div>
        );
    }
}

export default LoginDialog;
