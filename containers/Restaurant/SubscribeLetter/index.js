import React,{Component} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NewsletterSection,NewsletterInner,NewsletterForm,NewsletterInput,
    SubscribeSpanErr,SubscribeSpanSuccess,Form,FormGroup,NewsletterHeading,NewsLetterBtnCol} from './subscribeletter.style'
import {CommonBtn} from '../Common/common.style';
import { SubscribeNewsLetter } from '../../../pagedata/Restaurant';


const WRNG_MSG_TIMEOUT = 3000;

class NewsLetter extends Component{
    constructor(){
        super();
        this.state = {
           subscribe_email:"",
           errors:[],
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
        if(this.state.subscribe_email === "")
        {
            error_flag = true;
            errors['subscribe_email'] = "Please enter email!";
            setTimeout(function(){
                this.setState({errors:{}});
           }.bind(this),WRNG_MSG_TIMEOUT);
        }

        if(this.state.subscribe_email !== "")
        {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if(!pattern.test(this.state.subscribe_email)) {
                error_flag = true;
                errors["subscribe_email"] = "Please enter valid email ID!";
                setTimeout(function(){
                    this.setState({errors:{}});
               }.bind(this),WRNG_MSG_TIMEOUT);
            }
        }
        this.setState({
            errors: errors
        });
        return error_flag;
    }

    subscribeSubmit = (e) =>{
        e.preventDefault();
        if(!this.validateForm())
        {
            //SUCCESS 
            //TO DO
            console.log("Email: "+this.state.subscribe_email);
            document.getElementById("success_subscribe_msg").innerHTML = "Subscribed successfully.";
            this.setState({
                subscribe_email:"",
                errors:[]
            },()=>{
                setTimeout(function(){
                    document.getElementById("success_subscribe_msg").innerHTML = "";
               },WRNG_MSG_TIMEOUT);
            });
        }
    }

render (){
    return(
            <NewsletterSection>
                <Container>
                    <Row>
                        <Col md="12">
                            <NewsletterHeading>
                            {SubscribeNewsLetter.SectionHeading}
                            </NewsletterHeading>
                        </Col>
                    </Row>
                    <NewsletterInner>
                        <Form id="subscribeForm" method="post" onSubmit={this.subscribeSubmit}>
                            
                            <FormGroup>
                            <NewsletterForm>
                                <NewsletterInput placeholder="Enter Your E-Mail ID Here" name="subscribe_email" onChange={this.handleChange} value={this.state.subscribe_email}></NewsletterInput>
                                <NewsLetterBtnCol>
                                    <CommonBtn background="#fff" buttonText="Submit" link="#">Send</CommonBtn>
                                </NewsLetterBtnCol>
                            </NewsletterForm>
                            </FormGroup>
                                <SubscribeSpanErr id="err_subscribe_email">{this.state.errors.subscribe_email}</SubscribeSpanErr>
                                <SubscribeSpanSuccess id="success_subscribe_msg"></SubscribeSpanSuccess>
                            
                        </Form>
                    </NewsletterInner>
                </Container>
            </NewsletterSection>
        )
    }
}
export default NewsLetter;