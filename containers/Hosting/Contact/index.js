import React,{Component} from 'react';
import {ContactSection,HeadingWrapper,Heading,ContactInner,FormGroup,InputText,ContactSpanErr,ContactSpanSuccess,
    TextareaMessage,SubmitBtn,TextCenter,AddressWrapper,AddressCol,IconHolder,AddressIcon,TextHolder,
    AddressText
} from './contact.style';
import {Container,Row,Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContactUs } from '../../../pagedata/Hosting';

const WRNG_MSG_TIMEOUT = 3000;

class Contact extends Component{
    constructor(){
        super();
        this.state = {
           contact_name:"",
           contact_email:"",
           contact_phone:"",
           contact_message:"",
           errors:[]
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    validateForm()
    {
        var error_flag = false;
        let errors = {};
        if(this.state.contact_name === "")
        {
            error_flag = true;
            errors['contact_name'] = "Please enter full name!";
            setTimeout(function(){
                this.setState({errors:{}});
            }.bind(this),WRNG_MSG_TIMEOUT);
        }

        if(this.state.contact_email === "")
        {
            error_flag = true;
            errors['contact_email'] = "Please enter email!";
            setTimeout(function(){
                this.setState({errors:{}});
           }.bind(this),WRNG_MSG_TIMEOUT);
        }

        if(this.state.contact_email !== "")
        {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if(!pattern.test(this.state.contact_email)) {
                error_flag = true;
                errors["contact_email"] = "Please enter valid email ID!";
                setTimeout(function(){
                    this.setState({errors:{}});
               }.bind(this),WRNG_MSG_TIMEOUT);
            }
        }

        if(this.state.contact_phone === "")
        {
            error_flag = true;
            errors["contact_phone"] = "Please enter Phone No!";
            setTimeout(function(){
                this.setState({errors:{}});
           }.bind(this),WRNG_MSG_TIMEOUT);
        }
        if(this.state.contact_phone !== "")
        {
            var patternPhone = new RegExp(/^\d+$/);
            if(!patternPhone.test(this.state.contact_phone)) {
                error_flag = true;
                errors["contact_phone"] = "Please enter valid Phone No!";
                setTimeout(function(){
                    this.setState({errors:{}});
               }.bind(this),WRNG_MSG_TIMEOUT);
            }
            if(this.state.contact_phone.length<10) {
                error_flag = true;
                errors["contact_phone"] = "Please enter valid Phone No!";
                setTimeout(function(){
                    this.setState({errors:{}});
               }.bind(this),WRNG_MSG_TIMEOUT);
            }
        }

        if(this.state.contact_message === "")
        {
            error_flag = true;
            errors["contact_message"] = "Please enter message!";
            setTimeout(function(){
                this.setState({errors:{}});
           }.bind(this),WRNG_MSG_TIMEOUT);
        }

        this.setState({
            errors: errors
        });
        return error_flag;
    }

    contactUsSubmit = (e) =>{
        e.preventDefault();
        if(!this.validateForm())
        {
            //SUCCESS 
            //TO DO
            console.log("Name: "+this.state.contact_name);
            console.log("Email: "+this.state.contact_email);
            console.log("Phone: "+this.state.contact_phone);
            console.log("Message: "+this.state.contact_message);
            document.getElementById("success_contact_message").innerHTML = "Email sent successfully.";
            this.setState({
                contact_name:"",
                contact_email:"",
                contact_phone:"",
                contact_message:"",
                errors:[]
            },()=>{
                setTimeout(function(){
                    document.getElementById("success_contact_message").innerHTML = "";
               },WRNG_MSG_TIMEOUT);
            });
        }
    }


        render(){

        return (
            <ContactSection id="contactContainer">
                <Container>
                    <Row>
                        <Col md="12">
                            <HeadingWrapper>
                                    <Heading>
                                    {ContactUs.SectionHeading}
                                    </Heading>
                            </HeadingWrapper>
                                <ContactInner>
                                <form id="contactForm" method="post">
                                        <Row>
                                            <Col md="4">
                                                <FormGroup>
                                                    <InputText type="text" placeholder="Name"  name="contact_name" onChange={this.handleChange} value={this.state.contact_name}/>
                                                    <ContactSpanErr id="err_contact_name">{this.state.errors.contact_name}</ContactSpanErr>
                                                </FormGroup>
                                            </Col>
                                            <Col md="4">
                                                <FormGroup>
                                                    <InputText type="email" placeholder="Email ID"  name="contact_email" onChange={this.handleChange} value={this.state.contact_email}/>
                                                    <ContactSpanErr id="err_contact_email">{this.state.errors.contact_email}</ContactSpanErr>
                                                </FormGroup>
                                            </Col>
                                            <Col md="4">
                                                <FormGroup>
                                                    <InputText type="tel" placeholder="Phone"  name="contact_phone" onChange={this.handleChange} value={this.state.contact_phone}/>
                                                    <ContactSpanErr id="err_contact_phone">{this.state.errors.contact_phone}</ContactSpanErr>
                                                </FormGroup>
                                            </Col>

                                            <Col md="12">
                                                <FormGroup>
                                                    <TextareaMessage type="tel" placeholder="Message" name="contact_message" onChange={this.handleChange} value={this.state.contact_message}></TextareaMessage>
                                                    <ContactSpanErr id="err_contact_message">{this.state.errors.contact_message}</ContactSpanErr>
                                                </FormGroup>
                                            </Col>

                                            <Col md="12">
                                                <TextCenter>
                                                    <SubmitBtn href="#" onClick={this.contactUsSubmit}>Send Message</SubmitBtn>
                                                </TextCenter>
                                                <ContactSpanSuccess id="success_contact_message"></ContactSpanSuccess>
                                            </Col>
                                        </Row>
                                    </form>
                                </ContactInner>
                                <AddressWrapper>
                                    <Row>
                                    <Col md="6">
                                    { 
                                        ContactUs.AddressCol1.map((item,idx) => {
                                        return      <AddressCol>
                                                        <IconHolder>
                                                            <AddressIcon src={require("../../../assets/"+item.AddressIcon)} alt=""/>
                                                        </IconHolder>
                                                        <TextHolder>
                                                            <AddressText>{item.AddressText}</AddressText>
                                                        </TextHolder>
                                                    </AddressCol>
                                            })
                                        }
                                        </Col>
                                        <Col md="6">
                                        { 
                                            ContactUs.AddressCol2.map((item,idx) => {
                                            return   <AddressCol>
                                                            <IconHolder>
                                                                <AddressIcon src={require("../../../assets/"+item.AddressIcon)} alt=""/>
                                                            </IconHolder>
                                                            <TextHolder>
                                                                <AddressText>{item.AddressText}</AddressText>
                                                            </TextHolder>
                                                        </AddressCol>
                                                })
                                        }
                                        </Col>
                                    </Row>
                                </AddressWrapper>
                            </Col>
                        </Row>
                    </Container>
            </ContactSection>
        )
    }
}

export default Contact;