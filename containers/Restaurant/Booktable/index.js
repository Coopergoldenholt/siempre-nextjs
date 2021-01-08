import React,{Component} from 'react';
import {CommonFormBtn} from '../Common/common.style'
import {BookTableSection,BookTableLeft,BookTableRight,BookTableLeftHeading,
    BookTableLeftPara,DateInput,FormGroup,NameInput,TextareaMsg,BookTableCustomRow,
    BookTableSpanErr,BookTableSpanSuccess
} from './booktable.style';
import {Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import 'rc-time-picker/assets/index.css';
import TimePicker from 'rc-time-picker';
import { BookTable } from '../../../pagedata/Restaurant';
import moment from 'moment';
const format = 'h:mm a';
var currentTime = moment();

const WRNG_MSG_TIMEOUT = 3000;

class BookTablePage extends Component{
    constructor(){
        super();
        this.state = {
            errors:[],
            bookTable_name:"",
            bookTable_email:"",
            bookTable_date:"",
            bookTable_time:currentTime.format(format),
            bookTable_noOfGuests:"",
            bookTable_mobNo:"",
            bookTable_message:""
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleChangeDate = (e) => {
        this.setState({ bookTable_date: e });
    }

    handleChangeTime = (value)=>{
        if(value && value!=="undefined")
        {
            let formattedTime = value.format(format);
            this.setState({ bookTable_time: formattedTime});
        }
        else
        {
            this.setState({ bookTable_time: currentTime.format(format)});
        }
       
    }

    validateForm()
    {
        var error_flag = false;
        let errors = {};
        if(this.state.bookTable_name === "")
        {
            error_flag = true;
            errors['bookTable_name'] = "Please enter name!";
            setTimeout(function(){
                this.setState({errors:{}});
           }.bind(this),WRNG_MSG_TIMEOUT);
        }

        if(this.state.bookTable_email === "")
        {
            error_flag = true;
            errors['bookTable_email'] = "Please enter email!";
            setTimeout(function(){
                this.setState({errors:{}});
           }.bind(this),WRNG_MSG_TIMEOUT);
        }

        if(this.state.bookTable_email !== "")
        {
            var patternEmail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if(!patternEmail.test(this.state.bookTable_email)) {
                error_flag = true;
                errors["bookTable_email"] = "Please enter valid email ID!";
                setTimeout(function(){
                    this.setState({errors:{}});
               }.bind(this),WRNG_MSG_TIMEOUT);
            }
        }

        if(this.state.bookTable_date === "")
        {
            error_flag = true;
            errors["bookTable_date"] = "Please enter date!";
            setTimeout(function(){
                this.setState({errors:{}});
           }.bind(this),WRNG_MSG_TIMEOUT);
        }

        if(this.state.bookTable_date !== "")
        {
            var newDate = new Date(this.state.bookTable_date);
            var newDateY = newDate.getFullYear();
            var newDateM = newDate.getMonth()+1;
            var newDateD = newDate.getDate();
            
            var currentDate = new Date();
            var currentDateY = currentDate.getFullYear();
            var currentDateM = currentDate.getMonth()+1;
            var currentDateD = currentDate.getDate();

            var selectedTime = moment(this.state.bookTable_time, 'h:mm a');
            var currentTime =  moment();

            var dateFlag = false;
            if(newDateY !== currentDateY || newDateM !== currentDateM)
            {
                dateFlag = true;
            }
            else if(newDateY === currentDateY && newDateM === currentDateM && newDateD < currentDateD)
            {
                dateFlag = true;
            }
            if(selectedTime <= currentTime)
            {
                dateFlag = true;
            }
            if(dateFlag)
            {
                error_flag = true;
                errors["bookTable_date"] = "Please select a valid booking date and time!";
                setTimeout(function(){
                    this.setState({errors:{}});
                }.bind(this),WRNG_MSG_TIMEOUT);
            }
        }

        if(this.state.bookTable_time === "")
        {
            error_flag = true;
            errors["bookTable_time"] = "Please enter time!";
            setTimeout(function(){
                this.setState({errors:{}});
           }.bind(this),WRNG_MSG_TIMEOUT);
        }

        if(this.state.bookTable_noOfGuests === "")
        {
            error_flag = true;
            errors["bookTable_noOfGuests"] = "Please enter no of guests!";
            setTimeout(function(){
                this.setState({errors:{}});
           }.bind(this),WRNG_MSG_TIMEOUT);
        }

        if(this.state.bookTable_noOfGuests !== "")
        {
            var patternNumber = new RegExp(/^([+-]?[1-9]\d*|0)$/);
            if(!patternNumber.test(this.state.bookTable_noOfGuests)) {
                error_flag = true;
                errors["bookTable_noOfGuests"] = "Please enter valid no of guests!";
                setTimeout(function(){
                    this.setState({errors:{}});
               }.bind(this),WRNG_MSG_TIMEOUT);
            }
        }

        if(this.state.bookTable_mobNo === "")
        {
            error_flag = true;
            errors["bookTable_mobNo"] = "Please enter mobile no!";
            setTimeout(function(){
                this.setState({errors:{}});
           }.bind(this),WRNG_MSG_TIMEOUT);
        }

        if(this.state.bookTable_mobNo !== "")
        {
            var pattern = new RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/);
            if(!pattern.test(this.state.bookTable_mobNo)) {
                error_flag = true;
                errors["bookTable_mobNo"] = "Please enter valid mobile no!";
                setTimeout(function(){
                    this.setState({errors:{}});
               }.bind(this),WRNG_MSG_TIMEOUT);
            }
        }

        if(this.state.bookTable_message === "")
        {
            error_flag = true;
            errors["bookTable_message"] = "Please enter message!";
            setTimeout(function(){
                this.setState({errors:{}});
           }.bind(this),WRNG_MSG_TIMEOUT);
        }

        this.setState({
            errors: errors
        });
        return error_flag;
    }

    bookTableSubmit = (e)=>{
        e.preventDefault();
        if(!this.validateForm())
        {
            //SUCCESS 
            //TO DO
            console.log("Name: "+this.state.bookTable_name);
            console.log("Email: "+this.state.bookTable_email);
            console.log("Date: "+this.state.bookTable_date);
            console.log("Time: "+this.state.bookTable_time);
            console.log("No Of Guests: "+this.state.bookTable_noOfGuests);
            console.log("Mobile No: "+this.state.bookTable_mobNo);
            console.log("Message: "+this.state.bookTable_message);

            document.getElementById("success_bookTable_message").innerHTML = "Table booked successfully.";
            this.setState({
                bookTable_name:"",
                bookTable_email:"",
                bookTable_date:"",
                bookTable_time:"",
                bookTable_noOfGuests:"",
                bookTable_mobNo:"",
                bookTable_message:"",
                errors:[]
            },()=>{
                setTimeout(function(){
                    document.getElementById("success_bookTable_message").innerHTML = "";
               },WRNG_MSG_TIMEOUT);
            });
        }
    }

    render(){
        return(
            <BookTableSection id="bookTableContainer">
                <Container>
                    <BookTableCustomRow>
                        <Col md="6">
                            <BookTableLeft>
                                <BookTableLeftHeading>
                                    {BookTable.BookTableLeftHeading}
                                </BookTableLeftHeading>
                                <BookTableLeftPara>
                                {BookTable.BookTableLeftPara}
                                </BookTableLeftPara>
                            </BookTableLeft>
                        </Col>
                        <Col md="6">
                            <BookTableRight>
                                <form id="bookTableForm" method="post" onSubmit={this.bookTableSubmit}>
                                    <Row>
                                        <Col md="6">
                                            <FormGroup>
                                                <NameInput type="text" placeholder="Name" name="bookTable_name" onChange={this.handleChange} value={this.state.bookTable_name}/>
                                                <BookTableSpanErr id="err_bookTable_name">{this.state.errors.bookTable_name}</BookTableSpanErr>
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup>
                                                <NameInput type="text" placeholder="Email" name="bookTable_email" onChange={this.handleChange} value={this.state.bookTable_email}/>
                                                <BookTableSpanErr id="err_bookTable_email">{this.state.errors.bookTable_email}</BookTableSpanErr>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6">
                                            <FormGroup>
                                                <DateInput
                                                            name="bookTable_date"
                                                            selected={this.state.bookTable_date}
                                                            onChange={this.handleChangeDate}
                                                            dateFormat = "dd-MM-yyyy"
                                                            placeholderText="dd-mm-yyyy"
                                                            />
                                                <BookTableSpanErr id="err_bookTable_date">{this.state.errors.bookTable_date}</BookTableSpanErr>
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup>
                                                <TimePicker
                                                        showSecond={false}
                                                        defaultValue={currentTime}
                                                        onChange={this.handleChangeTime}
                                                        format={format}
                                                        use12Hours
                                                        inputReadOnly
                                                    />
                                                <BookTableSpanErr id="err_bookTable_time">{this.state.errors.bookTable_time}</BookTableSpanErr>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <NameInput type="text" placeholder="Total Number of Guests" name="bookTable_noOfGuests" onChange={this.handleChange} value={this.state.bookTable_noOfGuests}/>
                                                <BookTableSpanErr id="err_bookTable_noOfGuests">{this.state.errors.bookTable_noOfGuests}</BookTableSpanErr>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <NameInput type="tel" placeholder="Mob No." name="bookTable_mobNo" onChange={this.handleChange} value={this.state.bookTable_mobNo}/>
                                                <BookTableSpanErr id="err_bookTable_mobNo">{this.state.errors.bookTable_mobNo}</BookTableSpanErr>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <TextareaMsg placeholder="Message" name="bookTable_message" onChange={this.handleChange} value={this.state.bookTable_message}></TextareaMsg>
                                                <BookTableSpanErr id="err_bookTable_message">{this.state.errors.bookTable_message}</BookTableSpanErr>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <CommonFormBtn background="#dbdbdb" buttonText={BookTable.CommonBtnText}>{BookTable.CommonBtnLabel}</CommonFormBtn>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <BookTableSpanSuccess id="success_bookTable_message"></BookTableSpanSuccess>
                                </form>
                            </BookTableRight>
                        </Col>
                    </BookTableCustomRow>
                </Container>
            </BookTableSection>
        )
    }
}
export default BookTablePage;