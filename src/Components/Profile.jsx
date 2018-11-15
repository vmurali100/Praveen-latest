import React, { Component } from 'react'
import {FormControl,Panel,Button,FormGroup,Radio} from 'react-bootstrap';
import Checkbox from './Checkbox'


const items = [
  'I have a fleet',
  'I rent Trucks',
  'I drive a Truck',
  'I need financials and Reporting',
  'Other (Accounting , Administrative etc)'
];

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
            password:'',
            confirmPassword:'',
            emailValid: false,
            firstNameValid:false,
            lastNameValid:false,
            phoneValid:false,
            mobileValid:false,
            businessNameValid:false,
            businessZipValid:false,
            formValid:false,
            formErrors: {
              email: ''
                         }
      
          }
          this.handleEmailValidation=this.handleEmailValidation.bind(this);
          this.handleSubmit=this.handleSubmit.bind(this)
    }
      handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        const data = e.nativeEvent.data;
        // this.setState({[name]: value});
        if(name=="phone" && value !="" && data!=null){
          console.log(value.length)
          if(value.length>4){
            if(value.length==6 || value.length==10){
              this.setState({[name]:value+" "})

            }else{
              this.setState({[name]:value})

            }
          }else{
            this.setState({[name]:"+1 " +value})
          }
        }else{
          this.setState({[name]:value})

        }
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
            
            if(this.state.email==""){
              // this.setState({email})
            }
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
        var passwordError="";
        var confirmPasswordError="";
        
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

        if(this.state.password==""){
          this.state.passwordError=true;
        }else{
          this.state.passwordError=false;

        }

        if(this.state.passwordError==true){
          this.setState({passwordError:"Password field can not be empty"})
        }else{
          this.setState({passwordError:""})

        }

        if(this.state.confirmPassword==""){
          this.state.confirmPasswordError=true;
        }else{
          this.state.confirmPasswordError=false;
          
        }

        if(this.state.confirmPasswordError==true){
          this.setState({confirmPasswordError:"Confirm Password field can not be empty"})
        }else{
          this.setState({confirmPasswordError:""})
          if(this.state.password==this.state.confirmPassword){
            this.setState({confirmPasswordError:""})
          }else{
            this.setState({confirmPasswordError:"Password and Confirm Password are not matching"})

          }
        }

        this.handleFormSubmit();
      }
  render() {
    return (
      <div>
                        <form onSubmit={this.handleSubmit}>

        <Panel bsStyle="danger">
                <Panel.Heading>
                  <Panel.Title componentClass="h3">{this.props.value.title}</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
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

                </Panel.Body>
              </Panel>
              <Panel bsStyle="danger">
                <Panel.Heading>
                      <Panel.Title componentClass="h3">TELL US ABOUT YOURSELF</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                Telling us about yourlself will help us tailor the app to your needs
                {this.createCheckboxes()}
                    {/* <form  onSubmit={this.handleFormSubmit}> */}
                      <div style={{color:"red"}}>{this.state.checkboxError}</div>

                      {/* <Button bsStyle="danger"  type="submit">Next</Button> */}
                    {/* </form> */}
                    <h6>Do you rent or Lease from Ryder</h6>

                    <FormGroup>
                      <Radio name="radioGroup" inline>
                        Yes
                      </Radio>{' '}
                      <Radio name="radioGroup" inline>
                        No
                      </Radio>{' '}
                      
                    </FormGroup>
                    <h6>Account Numbers</h6>
                    <FormControl type="text" placeholder="1234" />
                    <FormControl type="text" placeholder="Enter Lessie or Account Number"/>

                    <p>Your Password Must be between 8 and 15 characters long and contain at least one nubers , one uppercase letter , one lowercase letter and one special character</p>
                    <FormControl type="password" placeholder="Password" value={this.state.password}
                                name="password"
                                onChange={(event) => this.handleUserInput(event)}/>
                                                  <div style={{color:"red"}}>{this.state.passwordError}</div>

                    <FormControl type="password" placeholder="Confirm Password" value={this.state.confirmPassword}
                                name="confirmPassword"
                                onChange={(event) => this.handleUserInput(event)}/>
                                                  <div style={{color:"red"}}>{this.state.confirmPasswordError}</div>

                    <Button bsStyle="danger" type="submit">Submit</Button>

                </Panel.Body>
              </Panel>  
              </form>

      </div>
    )
  }

  createCheckbox = label => (
    // eslint-disable-next-line react/jsx-no-undef
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  )

  createCheckboxes = () => (
    items.map(this.createCheckbox)
  )

  handleFormSubmit = () => {
   
    if(this.selectedCheckboxes.size==0){
      this.setState({checkboxError:'Please select atleast one option to continue'})
    }else{
      this.setState({checkboxError:''})

    }
    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
      if(!checkbox){
        console.log("Select At least one Checkbox")
      }
    }
  }

  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }
  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }


}



const FormErrors = (formErrors) => {
    
    return (
      <div className='formErrors'>
      {Object.keys(formErrors.formErrors).map((fieldName, i) => {
        if(formErrors.formErrors[fieldName].length > 0){
          console.log(formErrors.formErrors[fieldName])
          return (
            <p key={i} style={{color:"red"}}>{formErrors.formErrors[fieldName] }</p>
          )        
        } else {
          return '';
        }
      })}
    </div>
    )
  }