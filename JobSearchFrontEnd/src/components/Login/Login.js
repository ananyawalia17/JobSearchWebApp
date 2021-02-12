import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            user_contact : "",
            user_password : "",
            login_type : "job_seeker",
            password_errors: '',
            isValidPassword : false,
            successful: "false",
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeContact = this.onChangeContact.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onChangeLoginType = this.onChangeLoginType.bind(this)
    }

    onChangeLoginType(event){
        this.setState({
            login_type : event.target.value
        })
    }

    onChangeContact(event){
        this.setState({
            user_contact: event.target.value
        })
        
    }

    onChangePassword(event){
        let errors = '';
        let flag = 0;
        const val = event.target.value
        var pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

        if(!val){
            errors = "Please enter your password"
        }else if(val.length < 8){
            errors = "Password length must be greater than 8"
        }else if(!pattern.test(val)){
            errors = "Must contain atleast one lower case, upper case , numeric and special character"
        }else{
            errors = "Entered password is Valid"
            flag = 1
        }

        if(flag === 1){
            this.setState({
                user_password: val,
                password_errors: errors,
                isValidPassword: true
            })
        }else{
            this.setState({
                user_password: val,
                password_errors: errors,
            })
        }
    }

    async onSubmit(event){
        event.preventDefault();
        const obj = {
            contact : this.state.user_contact,
            password : this.state.user_password,
            userType : this.state.login_type
        }

        const contactNo = this.state.user_contact
    
        try{
            const responseJson = await axios.get(`/user/loginUser?contactNo=${contactNo}&password=${obj.password}&userType=${obj.userType}`)
             this.setState({
                 successful: responseJson.data.successful
             })
        }catch(error){
        console.log(error)
        }

        if(this.state.successful.toString() === "true"){
            if(this.state.login_type === 'job_seeker'){
                localStorage.setItem("user_login", JSON.stringify({'data': obj}))
                this.props.history.push('/jobs')
            }else{
                localStorage.setItem("admin_login", JSON.stringify({'data': obj}))
                this.props.history.push('/employer')
            }
        }else{
            alert("InCorrect Credentials")
            this.props.history.push('/')
        }
        
    }

  render() {
    
    return (

        <div className = "OuterContainer">
            <div className = "InnerContainer" style = {{paddingTop: "150px"}}>
                <form onSubmit = {this.onSubmit}>
                    <div className = "form-group">
                        <label>Contact :</label>
                        <input type = "text" 
                            className = "form-control"
                            value = {this.state.user_contact}
                            onChange = {this.onChangeContact}
                        />
                    </div>

                    <div className = "form-group">
                        <label>Password :</label>
                        <input type = "password" 
                            className = "form-control"
                            value = {this.state.user_password}
                            onChange = {this.onChangePassword}
                        />
                       <div className = {this.state.isValidPassword ? 'InputFeedback' : 'InputFeedback_red'} >
                            {this.state.password_errors}
                        </div>
                    </div>

                    <div className = 'form-group'>
                        <div className = "form-check form-check-inline">
                            <input className = "form-check-input"
                                type = "radio"
                                name = "UserType"
                                id = "user_login"
                                value = "job_seeker"
                                checked = {this.state.login_type === 'job_seeker'}
                                onChange = {this.onChangeLoginType}
                            />

                            <label className = "form-check-label">Job Seeker</label>
                        </div>


                        <div className = "form-check form-check-inline">
                            <input className = "form-check-input"
                                type = "radio"
                                name = "UserType"
                                id = "admin_login"
                                value = "employer"
                                checked = {this.state.login_type === 'employer'}
                                onChange = {this.onChangeLoginType}
                            />

                            <label className = "form-check-label">Employer</label>
                        </div>

                        <div className = "form-check form-check-inline" style = {{float : 'right', marginRight: "0px"}}>
                            <Link to = '/register'>                                
                                <label className = "form-check-label">Register</label>
                            </Link>
                        </div>
                     </div>

                    
                    <div className = "form-group">
                        <input type = "submit" 
                            value = "Login" 
                            disabled = {this.state.isValidPassword? false : true}
                            className = "btn btn-primary" 
                            style = {{width : "40%"}} 
                        />
                    </div>             
                </form>

                <div style = {{height: "337px"}}>

                </div>
            </div>
        </div>           
    )
  }
}

export default Login
