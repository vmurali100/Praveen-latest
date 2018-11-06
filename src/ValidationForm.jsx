import React, { Component } from 'react'

export default class ValidationForm extends Component {
    constructor(props) {
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this)
        this.isValidate = this.isValidate.bind(this)
    }
    
    state={
        name:"",
        email:"",
        password:"",
        nameError:"",
        emailError:"",
        passwordError:""
    }
    handleChange(e){
        console.log(e.target)
        const name = e.target.name;
        const value = e.target.value;

        this.setState({[name]:value})
    }

    isValidate=()=>{
        let nameError="";
        let emailError=""
        let passwordError=""
        if(!this.state.email.includes("@")){
            emailError = "Email Is Not Valid"
        }

        if(!this.state.name){
            nameError = "Name can not be Empty"
        }
        if(!this.state.password){
            passwordError = "Password can not be Empty"
        }
        if(emailError || nameError || passwordError){
            this.setState({emailError,nameError,passwordError})
            return false
        }

        return true;
    }
    handleSubmit(e){
        e.preventDefault()
        const isValid=this.isValidate()
        if(isValid){
            console.log(this.state)
        }
    }
  render() {
    return (
      <div className="validations">
        <form onSubmit={this.handleSubmit}>
            <input type="text" 
                name = "name" 
                placeholder="Name" 
                value={this.state.name}
                onChange={this.handleChange}/><br/>
            <div style={{color:"red"}}>{this.state.nameError}</div>
            <input type="text" 
                name = "email" 
                placeholder="Email" 
                value={this.state.email}
                onChange={this.handleChange}/><br/>
                <div style={{color:"red"}}>{this.state.emailError}</div>
            <input type="text" 
                name = "password" 
                placeholder="Password" 
                value={this.state.password}
                onChange={this.handleChange}/><br/>
                 <div style={{color:"red"}}>{this.state.passwordError}</div>
            <input type="submit" value="Submit"/>
        </form>      
    </div>
    )
  }
}
