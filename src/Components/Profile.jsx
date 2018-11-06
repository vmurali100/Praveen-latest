import React, { Component } from 'react'
import {FormControl,Panel,Button} from 'react-bootstrap'

export default class Profile extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            email: '',
            firstName:'',
            lastName:'',
            phone:'',
            mobile:'',
            businessName:'',
            businessZip:'',
            formErrors: {
              email: '', 
              firstName: '',
              lastName:'',
              phone:'',
              mobile:'',
              businessName:'',
              businessZip:''
            },
            emailValid: false,
            firstNameValid:false,
            lastNameValid:false,
            phoneValid:false,
            mobileValid:false,
            businessNameValid:false,
            businessZipValid:false,
            formValid:false
      
          }
          this.handleEmailValidation=this.handleEmailValidation.bind(this);
          this.handleSubmit=this.handleSubmit.bind(this)
    }
      handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
      }
      handleEmailValidation(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
         this.validateField(name, value) 
        }
      
      validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
      
        switch(fieldName) {
          case 'email':
            // emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      
            fieldValidationErrors.email = emailValid ? '' : 'Please check your email address and try again.';
            break;
         
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                      }, this.validateForm);
      }
      
      validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
      }

      handleSubmit(e){
        e.preventDefault()
        console.log(this.state)
        var firstNameValid="";
        var lastNameValid=""
        var phoneValid="";
        var mobileValid="";
        var firstNameError="";
        var lastNameError="";
        var phoneError="";
        var mobileError="";
        
          firstNameValid = this.state.firstName.match(/^[a-zA-Z\s]{1,}$/i)
          if(firstNameValid){
            firstNameError=false
          }else{
            firstNameError=true
          }
          this.setState({firstNameError: firstNameError ? ' First Name is invalid':''})

        
          lastNameValid=this.state.lastName.match(/^[a-zA-Z\s']{1,}$/i)

         if(lastNameValid){
          lastNameError=false;
          }else{
            lastNameError=true;
          }
          this.setState({lastNameError: lastNameError ? ' Last Name is invalid':''})

          phoneValid = this.state.phone.match(/^[+]?(1\-|1\s|1|\d{3}\-|\d{3}\s|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/g)
          if(phoneValid){
            phoneError=false;
          }else{
            phoneError=true;
          }
          this.setState({phoneError: phoneError ? ' Phone is invalid':''})

        if(!this.state.mobile){
          mobileError=true;
        }else{
          mobileError=false;

        }
        this.setState({mobileError: mobileError ? ' Mobile is invalid':''})

      }
  render() {
    return (
      <div>
        <Panel bsStyle="danger">
                <Panel.Heading>
                  <Panel.Title componentClass="h3">{this.props.value.title}</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                <form onSubmit={this.handleSubmit}>
                  <FormControl type="email" 
                                placeholder="Email Address" 
                                value={this.state.email}
                                name="email"
                                onChange={(event) => this.handleUserInput(event)}
                                onBlur={this.handleEmailValidation}
                                
 />               <div className="error">
                      <FormErrors formErrors={this.state.formErrors} />
                  </div>
                  <FormControl  type="text" 
                                placeholder="First Name" 
                                value={this.state.firstName} 
                                name= "firstName"
                                onChange={(event) => this.handleUserInput(event)}
/>
<div style={{color:"red"}}>{this.state.firstNameError}</div>

                  <FormControl  type="text" 
                                placeholder="Last Name" 
                                value={this.state.lastName} 
                                name="lastName"
                                onChange={(event) => this.handleUserInput(event)}
/>

<div style={{color:"red"}}>{this.state.lastNameError}</div>

                  <FormControl  type="text" 
                                placeholder="Phone" 
                                value={this.state.phone} 
                                name="phone"
                                onChange={(event) => this.handleUserInput(event)}
/>
<div style={{color:"red"}}>{this.state.phoneError}</div>

                  <FormControl  componentClass="select" 
                                placeholder="select" 
                                value={this.state.mobile} 
                                name="mobile"
                                onChange={(event) => this.handleUserInput(event)}
>

                    <option value="select">Mobile</option>
                    <option value="other">...</option>
                  </FormControl>
                  <div style={{color:"red"}}>{this.state.mobileError}</div>

                  <FormControl  type="text" 
                                placeholder="Business Name" 
                                value={this.state.businessName} 
                                name="businessName"
                                onChange={(event) => this.handleUserInput(event)}
/>
                  <FormControl  type="text" 
                                placeholder="Business Zip Code" 
                                value={this.state.businessZip} 
                                name = "businessZip"
                                onChange={(event) => this.handleUserInput(event)}
/>
                  <Button bsStyle="danger" type="submit">Submit</Button>

                </form>
                </Panel.Body>
              </Panel>
      </div>
    )
  }
}

const FormErrors = (formErrors) => {
    
    return (
      <div className='formErrors'>
      {Object.keys(formErrors.formErrors).map((fieldName, i) => {
        if(formErrors.formErrors[fieldName].length > 0){
          console.log(formErrors.formErrors[fieldName])
          return (
            <p key={i} style={{color:"red"}}>{fieldName} {formErrors.formErrors[fieldName] }</p>
          )        
        } else {
          return '';
        }
      })}
    </div>
    )
  }