import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
import axios from 'axios'

class Register extends Component {
    constructor(props){
        super(props);

        this.state = {
            login_type : "job_seeker",


            user_first_name: "",
            user_last_name: "",
            user_contact: "",
            user_language: "",
            user_location: "",
            user_dob: "",
            user_yoe: "",
            user_gender: "Male",
            user_jobtitle: "Plumber",
            user_education: "",
            user_description: "",
            user_password : "",
            user_confirm_password: "",
            password_errors: '',
            confirm_password_errors: '',
            isValidPassword : false,            
            isValidConfirmPassword : false,    
            isPasswordMatch: false,



            employer_first_name: "",
            employer_last_name: "",
            employer_contact: "",
            employer_gender: "Male",
            employer_company: "",
            employer_dob: "",
            employer_description: "",
            employer_password : "",
            employer_confirm_password: "",
            employer_password_errors: '',
            employer_confirm_password_errors: '',
            isValidEmployerPassword : false,
            isValidEmployerConfirmPassword : false,
            isEmployerPasswordMatch: false

        }

        this.onRegister = this.onRegister.bind(this)
        this.onChangeLoginType = this.onChangeLoginType.bind(this)


        this.onChangeUserFirstName = this.onChangeUserFirstName.bind(this)
        this.onChangeUserLastName = this.onChangeUserLastName.bind(this)
        this.onChangeUserLanguage = this.onChangeUserLanguage.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this)
        this.onChangeUserContact = this.onChangeUserContact.bind(this)
        this.onChangeUserLocation = this.onChangeUserLocation.bind(this)
        this.onChangeUserDOB = this.onChangeUserDOB.bind(this)
        this.onChangeUserYOE = this.onChangeUserYOE.bind(this)
        this.onChangeUserGender = this.onChangeUserGender.bind(this)
        this.onChangeUserJobTitle = this.onChangeUserJobTitle.bind(this)
        this.onChangeUserEducation = this.onChangeUserEducation.bind(this)
        this.onChangeUserDescription = this.onChangeUserDescription.bind(this)

        this.onChangeEmployerFirstName = this.onChangeEmployerFirstName.bind(this)
        this.onChangeEmployerLastName = this.onChangeEmployerLastName.bind(this)
        this.onChangeEmployerContact = this.onChangeEmployerContact.bind(this)
        this.onChangeEmployerCompany = this.onChangeEmployerCompany.bind(this)
        this.onChangeEmployerGender = this.onChangeEmployerGender.bind(this)
        this.onChangeEmployerDOB = this.onChangeEmployerDOB.bind(this)
        this.onChangeEmployerDescription = this.onChangeEmployerDescription.bind(this)
        this.onChangeEmployerPassword = this.onChangeEmployerPassword.bind(this)
        this.onChangeEmployerConfirmPassword = this.onChangeEmployerConfirmPassword.bind(this)
        
    }

    onChangeLoginType(event){
        this.setState({
            login_type : event.target.value
        })
    }

    onChangeUserFirstName(event){
        this.setState({
            user_first_name : event.target.value
        })
    }


    onChangeUserLastName(event){
        this.setState({
            user_last_name : event.target.value
        })
    }

    onChangeUserLanguage(event){
        this.setState({
            user_language : event.target.value
        })
    }

    onChangeUserLocation(event){
        this.setState({
            user_location: event.target.value
        })
    }

    onChangeUserDOB(event){
        this.setState({
            user_dob : event.target.value
        })
    }

    onChangeUserYOE(event){
        this.setState({
            user_yoe : event.target.value
        })
    }
    onChangeUserGender(event){
        this.setState({
            user_gender : event.target.value
        })
    }

    onChangeUserJobTitle(event){
        this.setState({
            user_jobtitle : event.target.value
        })
    }

    onChangeUserEducation(event){
        this.setState({
            user_education : event.target.value
        })
    }onChangeUserDescription(event){
        this.setState({
            user_description : event.target.value
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
            errors = "Enter a valid password"
        }else{
            errors = "Entered password is Valid"
            flag = 1
        }

        if(flag === 1 && val === this.state.user_confirm_password){
            this.setState({
                user_password: val,
                password_errors: errors,
                isValidPassword: true,
                isPasswordMatch: true,
                confirm_password_errors: "Passwords match",
                isValidConfirmPassword: true
            })
        }else if(flag === 1){
            this.setState({
                user_password: val,
                password_errors: errors,
                isValidPassword: true,
                isPasswordMatch : false,
                confirm_password_errors: "Passwords do not match",
                isValidConfirmPassword: false
            })
        }else{
            this.setState({
                user_password: val,
                password_errors: errors,
                isValidPassword: false,
                isPasswordMatch : false
            })
        }
    }

    onChangeConfirmPassword(event){
        let errors = '';
        let flag = 0;
        const val = event.target.value
        var pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

        if(!val){
            errors = "Please enter your password"
        }else if(val.length < 8){
            errors = "Password length must be greater than 8"
        }else if(val !== this.state.user_password){
            errors = "Passwords do not match"
        }else{
            errors = "Passwords match"
            flag = 1
        }

        if(flag === 1 && val === this.state.user_password){
            this.setState({
                user_confirm_password: val,
                confirm_password_errors: errors,
                isValidConfirmPassword: true,
                isPasswordMatch: true
            })
        }else{
            this.setState({
                user_confirm_password: val,
                confirm_password_errors: errors,
                isValidConfirmPassword: false,
                isPasswordMatch : false
            })
        }
    }

    onChangeUserContact(event){
        const val = event.target.value
        this.setState({
            user_contact: val
        })
    }


    onChangeEmployerFirstName(event){
        this.setState({
            employer_first_name : event.target.value
        })
    }


    onChangeEmployerLastName(event){
        this.setState({
            employer_last_name : event.target.value
        })
    }

    onChangeEmployerContact(event){
        const val = event.target.value
        this.setState({
            employer_contact: val
        })
    }

    onChangeEmployerCompany(event){
        const val = event.target.value
        this.setState({
            employer_company: val
        })
    }

    onChangeEmployerGender(event){
        const val = event.target.value
        this.setState({
            employer_gender: val
        })
    }

    onChangeEmployerDOB(event){
        const val = event.target.value
        this.setState({
            employer_dob: val
        })
    }

    onChangeEmployerDescription(event){
        const val = event.target.value
        this.setState({
            employer_description: val
        })
    }


    onChangeEmployerPassword(event){
        let errors = '';
        let flag = 0;
        const val = event.target.value
        var pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

        if(!val){
            errors = "Please enter your password"
        }else if(val.length < 8){
            errors = "Password length must be greater than 8"
        }else if(!pattern.test(val)){
            errors = "Enter a valid password"
        }else{
            errors = "Entered password is Valid"
            flag = 1
        }

        if(flag === 1 && val === this.state.employer_confirm_password){
            this.setState({
                employer_password: val,
                employer_password_errors: errors,
                isValidEmployerPassword: true,
                isEmployerPasswordMatch: true,
                employer_confirm_password_errors: "Passwords match",
                isValidEmployerConfirmPassword: true
            })
        }else if(flag === 1){
            this.setState({
                employer_password: val,
                employer_password_errors: errors,
                isValidEmployerPassword: true,
                isEmployerPasswordMatch : false,
                employer_confirm_password_errors: "Passwords do not match",
                isValidEmployerConfirmPassword: false
            })
        }else{
            this.setState({
                employer_password: val,
                employer_password_errors: errors,
                isValidEmployerPassword: false,
                isEmployerPasswordMatch : false
            })
        }
    }

    onChangeEmployerConfirmPassword(event){
        let errors = '';
        let flag = 0;
        const val = event.target.value
        var pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

        if(!val){
            errors = "Please enter your password"
        }else if(val.length < 8){
            errors = "Password length must be greater than 8"
        }else if(val !== this.state.employer_password){
            errors = "Passwords do not match"
        }else{
            errors = "Passwords match"
            flag = 1
        }

        if(flag === 1 && val === this.state.employer_password){
            this.setState({
                employer_confirm_password: val,
                employer_confirm_password_errors: errors,
                isValidEmployerConfirmPassword: true,
                isEmployerPasswordMatch: true
            })
        }else{
            this.setState({
                employer_confirm_password: val,
                employer_confirm_password_errors: errors,
                isValidEmployerConfirmPassword: false,
                isEmployerPasswordMatch : false
            })
        }
    }    


    onRegister(event){


        const loginType = this.state.login_type

        if(loginType === 'job_seeker'){
            const obj = {
                firstName : this.state.user_first_name,
                lastName: this.state.user_last_name,
                contactNumber: this.state.user_contact,
                language:this.state.user_language,
                location:this.state.user_location,
                dateOfBirth:this.state.user_dob,
                yearsOfExperience:this.state.user_yoe,
                gender:this.state.user_gender,
                jobTitle:this.state.user_jobtitle,
                education:this.state.user_education, 
                description:this.state.user_description,
                password: this.state.user_password
            }

            axios.post('/user/registerJobSeeker',obj)
            .then((response) => {
                console.log(response);
            })
        }else{
            
            const obj = {
                firstName:this.state.employer_first_name,
                lastName:this.state.employer_last_name,
                contactNumber:this.state.employer_contact,
                gender:this.state.employer_gender,
                companyName:this.state.employer_company,
                dateOfBirth:this.state.employer_dob,
                description:this.state.employer_description,
                password:this.state.employer_password 
            }
            axios.post('/user/registerEmployer',obj)
            .then((response) => {
                console.log(response);
            })
        }
        this.props.history.push('/')
        
    }


  render() {
    if(this.state.login_type === "job_seeker"){
        return (
            <div className = "OuterContainer">
                <div className = "InnerContainer" style = {{paddingTop: "50px"}}>
                    <form onSubmit = {this.onRegister}>
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
                    </div>

                    <div className = "form-group">
                        <div className = "form-check form-check-inline">
                            <div style = {{marginRight: "15px"}}>
                                <label>First Name :</label>
                                <input type = "text" 
                                    className = "form-control"
                                    value = {this.state.user_first_name}
                                    onChange = {this.onChangeUserFirstName}
                                />
                            </div>
           

                        
                            <div style = {{marginRight: "-10px"}}>
                                <label>Last Name :</label>
                                <input type = "text" 
                                    className = "form-control"
                                    value = {this.state.user_last_name}
                                    onChange = {this.onChangeUserLastName}
                                />
                            </div>
                        </div>
                    </div>
    
                        <div className = "form-group">
                            <div className = "form-check form-check-inline">
                                <div style = {{marginRight: "15px"}}>
                                    <label>Language :</label>
                                    <input type = "text" 
                                        className = "form-control"
                                        value = {this.state.user_language}
                                        onChange = {this.onChangeUserLanguage}
                                    />
                                </div> 
    
                                <div style = {{marginRight : "-10px"}}>
                                    <label>Contact :</label>
                                    <input type = "text" 
                                        className = "form-control"
                                        value = {this.state.user_contact}
                                        onChange = {this.onChangeUserContact}
                                    />
                                    
                                </div> 
    
                            </div>                   
                        </div>
    
                        <div className = "form-group">
                            <div className = "form-check form-check-inline">
                                <div style = {{marginRight: "15px"}}>
                                    <label>Location :</label>
                                    <input type = "text" 
                                        className = "form-control"
                                        value = {this.state.user_location}
                                        onChange = {this.onChangeUserLocation}
                                    />
                                </div> 
    
                                <div style = {{marginRight : "-10px"}}>
                                    <label>DOB :</label>
                                    <input type = "text" 
                                        className = "form-control"
                                        placeholder = "YYYY-MM-DD"
                                        value = {this.state.user_dob}
                                        onChange = {this.onChangeUserDOB}
                                    />
                                    
                                </div> 
    
                            </div>                   
                        </div>

                        <div className = "form-group">
                            <div className = "form-check form-check-inline">
                                <div style = {{marginRight: "15px"}}>
                                    <label>Years of Experience :</label>
                                    <input type = "text" 
                                        className = "form-control"
                                        value = {this.state.user_yoe}
                                        onChange = {this.onChangeUserYOE}
                                    />
                                </div> 
    
                                <div style = {{marginRight : "-10px"}}>
                                        <label>Gender :</label>
                                        <select
                                            className = 'form-control'
                                            value = {this.state.user_gender}
                                            onChange = {this.onChangeUserGender}
                                            style = {{width: "193px"}}
                                        >
                                            <option value={"Male"}>Male</option>
                                            <option value={"Female"}>Female</option>
                                            <option value={"Other"}>Other</option>
                                        </select>
                                    
                                </div> 
    
                            </div>                   
                        </div>

                        <div className = "form-group">
                            <div className = "form-check form-check-inline">
                                <div style = {{marginRight: "15px"}}>
                                    <label>Education :</label>
                                    <select
                                            className = 'form-control'
                                            value = {this.state.user_education}
                                            onChange = {this.onChangeUserEducation}
                                            style = {{width: "193px"}}
                                        >
                                            <option value={"None"}>None</option>
                                            <option value={"8"}>8</option>
                                            <option value={"10"}>10</option>
                                            <option value={"12"}>12</option>
                                            <option value={"Graduate"}>Graduate</option>
                                        </select>
                                </div> 
    
                                <div style = {{marginRight : "-10px"}}>
                                    <label>Job Title :</label>
                                        <select
                                            className = 'form-control'
                                            value = {this.state.user_jobtitle}
                                            onChange = {this.onChangeUserJobTitle}
                                            style = {{width: "193px"}}
                                        >
                                            <option value={"Plumber"}>Plumber</option>
                                            <option value={"Electrician"}>Electrician</option>
                                            <option value={"Carpenter"}>Carpenter</option>
                                            <option value={"Labour"}>Labour</option>
                                        </select>
                                </div> 
                            </div>                   
                        </div>

                        <div className = "form-group">
                        <label>
                            Describe YourSelf:
                        </label>
                                <textarea value={this.state.user_description} 
                                onChange={this.onChangeUserDescription} 
                                className = "form-control"/>
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
    
                        <div className = "form-group">
                            <label>Confirm Password :</label>
                            <input type = "password" 
                                className = "form-control"
                                value = {this.state.user_confirm_password}
                                onChange = {this.onChangeConfirmPassword}
                            />
                            <div className = {this.state.isValidConfirmPassword ? 'InputFeedback' : 'InputFeedback_red'} >
                                {this.state.confirm_password_errors}
                            </div>
                        </div>

    
                        <div className = "form-group">
                            <input type = "submit" 
                                value = "Register" 
                                disabled = {this.state.isValidPassword && this.state.isValidConfirmPassword && this.state.isPasswordMatch ? false : true}
                                className = "btn btn-primary" 
                                style = {{width : "40%"}} 
                            />
                        </div>             
                    </form>

                    <div style = {{height: "50px"}}>
                        
                    </div>
                </div>
            </div>
        )
    }else{
        return (
            <div className = "OuterContainer">
                <div className = "InnerContainer" style = {{paddingTop: "50px"}}>
                    <form onSubmit = {this.onRegister}>
                    <div className = 'form-group'>
                        <div className = "form-check form-check-inline">
                            <input className = "form-check-input"
                                type = "radio"
                                name = "UserType"
                                id = "employer_login"
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
                    </div>

                    <div className = "form-group">
                        <div className = "form-check form-check-inline">
                            <div style = {{marginRight: "15px"}}>
                                <label>First Name :</label>
                                <input type = "text" 
                                    className = "form-control"
                                    value = {this.state.employer_first_name}
                                    onChange = {this.onChangeEmployerFirstName}
                                />
                            </div>
           

                        
                            <div style = {{marginRight: "-10px"}}>
                                <label>Last Name :</label>
                                <input type = "text" 
                                    className = "form-control"
                                    value = {this.state.employer_last_name}
                                    onChange = {this.onChangeEmployerLastName}
                                />
                            </div>
                        </div>
                    </div>
    
                        <div className = "form-group">
                            <div className = "form-check form-check-inline">
                                <div style = {{marginRight: "15px"}}>
                                    <label>Company :</label>
                                    <input type = "text" 
                                        className = "form-control"
                                        value = {this.state.employer_company}
                                        onChange = {this.onChangeEmployerCompany}
                                    />
                                </div> 
    
                                <div style = {{marginRight : "-10px"}}>
                                    <label>Contact :</label>
                                    <input type = "text" 
                                        className = "form-control"
                                        value = {this.state.employer_contact}
                                        onChange = {this.onChangeEmployerContact}
                                    />
                                    
                                </div> 
    
                            </div>                   
                        </div>
    
                        <div className = "form-group">
                            <div className = "form-check form-check-inline">
                                <div style = {{marginRight: "15px"}}>
                                <label>Gender :</label>
                                    <select
                                        className = 'form-control'
                                        value = {this.state.employer_gender}
                                        onChange = {this.onChangeEmployerGender}
                                        style = {{width: "193px"}}
                                    >
                                        <option value={"Male"}>Male</option>
                                        <option value={"Female"}>Female</option>
                                        <option value={"Other"}>Other</option>
                                    </select>
                                </div> 
    
                                <div style = {{marginRight : "-10px"}}>
                                    <label>DOB :</label>
                                    <input type = "text" 
                                        className = "form-control"
                                        placeholder = "YYYY-MM-DD"
                                        value = {this.state.employer_dob}
                                        onChange = {this.onChangeEmployerDOB}
                                    />
                                    
                                </div> 
    
                            </div>                   
                        </div>

                        <div className = "form-group">
                        <label>
                            Describe YourSelf:
                        </label>
                                <textarea value={this.state.employer_description} 
                                onChange={this.onChangeEmployerDescription} 
                                className = "form-control"/>
                        </div>
                        

                         <div className = "form-group">
                            <label>Password :</label>
                            <input type = "password" 
                                className = "form-control"
                                value = {this.state.employer_password}
                                onChange = {this.onChangeEmployerPassword}
                            />
                            <div className = {this.state.isValidEmployerPassword ? 'InputFeedback' : 'InputFeedback_red'} >
                                {this.state.employer_password_errors}
                            </div>
                        </div>
    
                        <div className = "form-group">
                            <label>Confirm Password :</label>
                            <input type = "password" 
                                className = "form-control"
                                value = {this.state.employer_confirm_password}
                                onChange = {this.onChangeEmployerConfirmPassword}
                            />
                            <div className = {this.state.isValidEmployerConfirmPassword ? 'InputFeedback' : 'InputFeedback_red'} >
                                {this.state.employer_confirm_password_errors}
                            </div>
                        </div>

    
                        <div className = "form-group">
                            <input type = "submit" 
                                value = "Register" 
                                disabled = {this.state.isValidEmployerPassword && this.state.isValidEmployerConfirmPassword && this.state.isEmployerPasswordMatch ? false : true}
                                className = "btn btn-primary" 
                                style = {{width : "40%"}} 
                            />
                        </div>             
                    </form>

                    <div style = {{height: "150px"}}>
                        
                    </div>
                </div>
            </div>
        )
    }
    
  }
}

export default Register
