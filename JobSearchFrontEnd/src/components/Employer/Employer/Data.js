import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom';
import './Data.css'
import '../../../custom_styles.css'
import axios from 'axios'

import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

class Data extends Component {
  constructor(props){
    super(props);  

    this.state = {
        jobTitle:"",
        company:"",
        jobCategory:"Plumber",
        jobType:"",
        location:"",
        datePosted:"",
        startingSalary:"",
        endingSalary:"",
        description:"",
        gender:"M",
        minYearsOfExperience:"",
        maxYearsOfExperience:"",
        language:"",
        timings:"",
        vacancies:"",
        recruiterContact:""
    }

    this.onChangeJobTitle = this.onChangeJobTitle.bind(this)
    this.onChangeCompany = this.onChangeCompany.bind(this)
    this.onChangeJobCategory = this.onChangeJobCategory.bind(this)
    this.onChangeJobType = this.onChangeJobType.bind(this)
    this.onChangeJobLocation= this.onChangeJobLocation.bind(this)
    this.onChangeDatePosted = this.onChangeDatePosted.bind(this)
    this.onChangeStartingSalary = this.onChangeStartingSalary.bind(this)
    this.onChangeEndingSalary = this.onChangeEndingSalary.bind(this)
    this.onChangeDescription = this.onChangeDescription.bind(this)
    this.onChangeGender = this.onChangeGender.bind(this)
    this.onChangeMinYOE = this.onChangeMinYOE.bind(this)
    this.onChangeMaxYOE= this.onChangeMaxYOE.bind(this)
    this.onChangeLanguage = this.onChangeLanguage.bind(this)
    this.onChangeTimings = this.onChangeTimings.bind(this)
    this.onChangeVacancies = this.onChangeVacancies.bind(this)
    this.onChangeRecruiterContact = this.onChangeRecruiterContact.bind(this)

    this.onRegister = this.onRegister.bind(this)
  }

  onChangeJobTitle(event){
    this.setState({
      jobTitle: event.target.value
    })
  }

  onChangeJobCategory(event){
    this.setState({
      jobCategory: event.target.value
    })
  }

  onChangeJobType(event){
    this.setState({
      jobType: event.target.value
    })
  }

  onChangeJobLocation(event){
    this.setState({
      location: event.target.value
    })
  }

  onChangeCompany(event){
    this.setState({
      company: event.target.value
    })
  }
  
  onChangeDatePosted(event){
    this.setState({
      datePosted: event.target.value
    })
  }

  onChangeStartingSalary(event){
    this.setState({
      startingSalary: event.target.value
    })
  }

  onChangeEndingSalary(event){
    this.setState({
      endingSalary: event.target.value
    })
  }

  onChangeDescription(event){
    this.setState({
      description: event.target.value
    })
  }
  onChangeGender(event){
    this.setState({
      gender: event.target.value
    })
  }

  onChangeMinYOE(event){
    this.setState({
      minYearsOfExperience: event.target.value
    })
  }

  onChangeMaxYOE(event){
    this.setState({
      maxYearsOfExperience: event.target.value
    })
  }

  onChangeLanguage(event){
    this.setState({
      language: event.target.value
    })
  }

  onChangeTimings(event){
    this.setState({
      timings: event.target.value
    })
  }

  onChangeVacancies(event){
    this.setState({
      vacancies: event.target.value
    })
  }

  onChangeRecruiterContact(event){
    this.setState({
      recruiterContact: event.target.value
    })
  }

  onRegister(event){
    alert("Job Posted")
    const obj = {
        jobTitle:this.state.jobTitle,
        company:this.state.company,
        jobCategory:this.state.jobCategory,
        jobType:this.state.jobType,
        location:this.state.location,
        datePosted:this.state.datePosted,
        startingSalary:this.state.startingSalary,
        endingSalary:this.state.endingSalary,
        description:this.state.description,
        gender:this.state.gender,
        minYearsOfExperience:this.state.minYearsOfExperience,
        maxYearsOfExperience:this.state.maxYearsOfExperience,
        language:this.state.language,
        timings:this.state.timings,
        vacancies:this.state.vacancies,
        recruiterContact:this.state.recruiterContact
    }

    console.log(obj)
    const contact = JSON.parse(localStorage.getItem('admin_login'))?.data.contact;
    axios.post(`/jobPost/postAJob?contactNo=${contact}`, obj)
    .then((response) => {
      console.log(response);
    })

  }

  render() {
    return (
      <div className = "outer_container_background">
          <div className = "InnerContainer" style = {{paddingTop: "50px"}}>
              <form onSubmit = {this.onRegister}>
              

              <div className = "form-group">
                  <div className = "form-check form-check-inline">
                      <div style = {{marginRight: "15px"}}>
                          <label>Job Title :</label>
                          <input type = "text" 
                              className = "form-control"
                              value = {this.state.jobTitle}
                              onChange = {this.onChangeJobTitle}
                          />
                      </div>
     

                  
                      <div style = {{marginRight: "-10px"}}>
                          <label>Company</label>
                          <input type = "text" 
                              className = "form-control"
                              value = {this.state.company}
                              onChange = {this.onChangeCompany}
                          />
                      </div>
                  </div>
              </div>

                  <div className = "form-group">
                      <div className = "form-check form-check-inline">
                          <div style = {{marginRight: "15px"}}>
                            <label>Job Category :</label>
                            <select
                              className = 'form-control'
                              value = {this.state.jobCategory}
                              onChange = {this.onChangeJobCategory}
                              style = {{width: "193px"}}
                          >
                              <option value={"Plumber"}>Plumber</option>
                              <option value={"Electrician"}>Electrician</option>
                              <option value={"Carpenter"}>Carpenter</option>
                              <option value={"Labour"}>Labour</option>
                            </select>
                          </div> 

                          <div style = {{marginRight : "-10px"}}>
                              <label>Job Type :</label>
                              <input type = "text" 
                                  className = "form-control"
                                  placeholder = "Full Time / Internship"
                                  value = {this.state.jobType}
                                  onChange = {this.onChangeJobType}
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
                                  value = {this.state.location}
                                  onChange = {this.onChangeJobLocation}
                              />
                          </div> 

                          <div style = {{marginRight : "-10px"}}>
                              <label>Date Posted :</label>
                              <input type = "text" 
                                  className = "form-control"
                                  placeholder = "YYYY-MM-DD"
                                  value = {this.state.datePosted}
                                  onChange = {this.onChangeDatePosted}
                              />
                              
                          </div> 

                      </div>                   
                  </div>

                  <div className = "form-group">
                      <div className = "form-check form-check-inline">
                          <div style = {{marginRight: "15px"}}>
                              <label>Minimum YOE :</label>
                              <input type = "text" 
                                  className = "form-control"
                                  value = {this.state.minYearsOfExperience}
                                  onChange = {this.onChangeMinYOE}
                              />
                          </div> 

                          <div style = {{marginRight: "-10px"}}>
                              <label>Maximum YOE :</label>
                              <input type = "text" 
                                  className = "form-control"
                                  value = {this.state.maxYearsOfExperience}
                                  onChange = {this.onChangeMaxYOE}
                              />
                          </div> 
                      </div>                   
                  </div>

                  <div className = "form-group">
                      <div className = "form-check form-check-inline">
                          <div style = {{marginRight: "15px"}}>
                              <label>Starting Salary :</label>
                              <input type = "text" 
                                  className = "form-control"
                                  value = {this.state.startingSalary}
                                  onChange = {this.onChangeStartingSalary}
                              />
                          </div> 

                          <div style = {{marginRight: "-10px"}}>
                              <label>Ending Salary :</label>
                              <input type = "text" 
                                  className = "form-control"
                                  value = {this.state.endingSalary}
                                  onChange = {this.onChangeEndingSalary}
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
                                  value = {this.state.language}
                                  onChange = {this.onChangeLanguage}
                              />
                          </div> 

                          <div style = {{marginRight: "-10px"}}>
                              <label>Timings :</label>
                              <input type = "text" 
                                  className = "form-control"
                                  value = {this.state.timings}
                                  onChange = {this.onChangeTimings}
                              />
                          </div> 
                      </div>                   
                  </div>

                  <div className = "form-group">
                      <div className = "form-check form-check-inline">
                          <div style = {{marginRight: "15px"}}>
                              <label>Vacancies :</label>
                              <input type = "text" 
                                  className = "form-control"
                                  value = {this.state.vacancies}
                                  onChange = {this.onChangeVacancies}
                              />
                          </div> 

                          <div style = {{marginRight: "-10px"}}>
                              <label>Gender :</label>
                              <select
                                  className = 'form-control'
                                  value = {this.state.gender}
                                  onChange = {this.onChangeGender}
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
                    <label>
                       Recruiter Contact:
                    </label>
                    <input type = "text" 
                      className = "form-control"
                      value = {this.state.recruiterContact}
                      onChange = {this.onChangeRecruiterContact}
                  />
                  </div>

                  <div className = "form-group">
                    <label>
                        Describe the Job:
                    </label>
                    <textarea value={this.state.description} 
                      onChange={this.onChangeDescription} 
                    className = "form-control"/>
                  </div>

                  
              
                  <div className = "form-group">
                      <input type = "submit" 
                          value = "POST" 
                          className = "btn btn-primary" 
                          style = {{width : "40%", backgroundColor: "green"}} 
                      />
                  </div>             
              </form>

              <div style = {{height: "50px"}}>
                  
              </div>
          </div>
      </div>
  )
  }
}

export default Data
