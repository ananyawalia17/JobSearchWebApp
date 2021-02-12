import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom';
import './Data.css'
import '../../../custom_styles.css'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import axios from 'axios'
import { LoopCircleLoading } from 'react-loadingg';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import PersonIcon from '@material-ui/icons/Person';
import WcIcon from '@material-ui/icons/Wc';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LanguageIcon from '@material-ui/icons/Language';
import UpdateIcon from '@material-ui/icons/Update';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import TimelineIcon from '@material-ui/icons/Timeline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactMailIcon from '@material-ui/icons/ContactMail';


function JobCard({onClick, data}){
  return (
    <div className = "col-xsm-12 col-sm-12 col-md-12 col-lg-6 my-3 d-flex justify-content-start">
      <Card style={{width: '30rem', height: "35rem", borderRadius: "50px", boxShadow : "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.30)", marginLeft: "auto", marginRight: "auto", marginBottom: "80px"}}>
        <CardTitle style = {{fontSize: "25px", fontWeight: "bold", marginTop: "10px"}}>{data.jobTitle}</CardTitle>
        <CardSubtitle style = {{fontSize: "15px", marginBottom: "-10px"}}>{data.company}</CardSubtitle>
        <hr />
        <div style = {{display: "flex", flexDirection : "row"}}>
            <div style = {{flex : "0.5"}}>
              <div style = {{display : "flex", flexDirection: "column"}}>
                  <PersonIcon style = {{marginLeft: "30px", fontSize: "40"}}/>
                  <div style = {{flex : "0.5", marginTop: "-40px", color: "grey",fontSize: "12px", marginLeft : '10px'}}>
                    CATEGORY
                  </div>
                  <div style = {{flex : "0.5", color: "grey", fontWeight: "bold", marginLeft: "15px"}}>
                    {data.jobCategory}
                  </div>
              </div>
            </div>

            <div style = {{flex : "0.5", marginLeft: "50px"}}>
              <div style = {{display : "flex", flexDirection: "column"}}>
                  <QueryBuilderIcon style = {{marginLeft: "30px", fontSize: "40"}}/>
                  <div style = {{flex : "0.5", marginTop: "-40px", color: "grey",fontSize: "12px", marginLeft: "20px"}}>
                    JOB TYPE
                  </div>
                  <div style = {{flex : "0.5", color: "grey", fontWeight: "bold", marginLeft: "20px"}}>
                    {data.jobType}
                  </div>
              </div>
            </div>
        </div>

        <div style = {{display: "flex", flexDirection : "row", marginTop: "20px"}}>
            <div style = {{flex : "0.5"}}>
              <div style = {{display : "flex", flexDirection: "column"}}>
                  <AttachMoneyIcon style = {{marginLeft: "30px", fontSize: "40"}}/>
                  <div style = {{flex : "0.5", marginTop: "-40px", color: "grey",fontSize: "12px", marginLeft : '10px'}}>
                    SALARY RANGE
                  </div>
                  <div style = {{flex : "0.5", color: "grey", fontWeight: "bold", marginLeft: "15px"}}>
                    {data.startingSalary} - {data.endingSalary}
                  </div>
              </div>
            </div>

            <div style = {{flex : "0.5", marginLeft: "50px"}}>
              <div style = {{display : "flex", flexDirection: "column"}}>
                  <WcIcon style = {{marginLeft: "30px", fontSize: "40"}}/>
                  <div style = {{flex : "0.5", marginTop: "-40px", color: "grey",fontSize: "12px", marginLeft: "20px"}}>
                    GENDER
                  </div>
                  <div style = {{flex : "0.5", color: "grey", fontWeight: "bold", marginLeft: "20px"}}>
                    {data.gender}
                  </div>
              </div>
            </div>
        </div>

        <div style = {{display: "flex", flexDirection : "row", marginTop: "20px"}}>
            <div style = {{flex : "0.5"}}>
              <div style = {{display : "flex", flexDirection: "column"}}>
                  <LanguageIcon style = {{marginLeft: "30px", fontSize: "40"}}/>
                  <div style = {{flex : "0.5", marginTop: "-40px", color: "grey",fontSize: "12px", marginLeft : '10px'}}>
                    LANGUAGE
                  </div>
                  <div style = {{flex : "0.5", color: "grey", fontWeight: "bold", marginLeft: "15px"}}>
                    {data.language}
                  </div>
              </div>
            </div>

            <div style = {{flex : "0.5", marginLeft: "50px"}}>
              <div style = {{display : "flex", flexDirection: "column"}}>
                  <UpdateIcon style = {{marginLeft: "30px", fontSize: "40"}}/>
                  <div style = {{flex : "0.5", marginTop: "-40px", color: "grey",fontSize: "12px", marginLeft: "20px"}}>
                    TIMINGS
                  </div>
                  <div style = {{flex : "0.5", color: "grey", fontWeight: "bold", marginLeft: "20px"}}>
                    {data.timings}
                  </div>
              </div>
            </div>
        </div>

        <div style = {{display: "flex", flexDirection : "row", marginTop: "20px"}}>
            <div style = {{flex : "0.5"}}>
              <div style = {{display : "flex", flexDirection: "column"}}>
                  <CalendarViewDayIcon style = {{marginLeft: "30px", fontSize: "40"}}/>
                  <div style = {{flex : "0.5", marginTop: "-40px", color: "grey",fontSize: "12px", marginLeft : '10px'}}>
                    EXPERIENCE
                  </div>
                  <div style = {{flex : "0.5", color: "grey", fontWeight: "bold", marginLeft: "15px"}}>
                    {data.minYearsOfExperience} - {data.maxYearsOfExperience}
                  </div>
              </div>
            </div>

            <div style = {{flex : "0.5", marginLeft: "50px"}}>
              <div style = {{display : "flex", flexDirection: "column"}}>
                  <TimelineIcon style = {{marginLeft: "30px", fontSize: "40"}}/>
                  <div style = {{flex : "0.5", marginTop: "-40px", color: "grey",fontSize: "12px", marginLeft: "20px"}}>
                    VACANCIES
                  </div>
                  <div style = {{flex : "0.5", color: "grey", fontWeight: "bold", marginLeft: "20px"}}>
                    {data.vacancies}
                  </div>
              </div>
            </div>
        </div>

        <div style = {{display: "flex", flexDirection : "row", marginTop: "20px"}}>
            <div style = {{flex : "0.5"}}>
              <div style = {{display : "flex", flexDirection: "column"}}>
                  <LocationOnIcon style = {{marginLeft: "30px", fontSize: "40"}}/>
                  <div style = {{flex : "0.5", marginTop: "-40px", color: "grey",fontSize: "12px", marginLeft : '10px'}}>
                    LOCATION
                  </div>
                  <div style = {{flex : "0.5", color: "grey", fontWeight: "bold", marginLeft: "15px"}}>
                    {data.location}
                  </div>
              </div>
            </div>

            <div style = {{flex : "0.5", marginLeft: "50px"}}>
              <div style = {{display : "flex", flexDirection: "column"}}>
                  <ContactMailIcon style = {{marginLeft: "30px", fontSize: "40"}}/>
                  <div style = {{flex : "0.5", marginTop: "-40px", color: "grey",fontSize: "12px", marginLeft: "20px"}}>
                    RECRUITER                   </div>
                  <div style = {{flex : "0.5", color: "grey", fontWeight: "bold", marginLeft: "20px"}}>
                    {data.recruiterContact}
                  </div>
              </div>
            </div>
        </div>

        < hr />
        <CardText>
          {data.description}
        </CardText>


        <div style = {{display: "flex", flexDirection: "row"}}>
            <div style = {{marginLeft: "-10px", marginTop: "40px", flex: "0.5"}}>
              <Button 
              style = {{backgroundColor: "green"}}
              onClick = {() => {onClick(data.jobId, JSON.parse(localStorage.getItem('user_login'))?.data.contact)}}>Apply Now</Button>
            </div>
            <div style = {{marginLeft: "10px", marginTop: "50px", flex: "0.5"}}>
              {data.datePosted}
          </div>
        </div>
      </Card>
    </div>
  )
}

const setAsyncTimeout = (cb, timeout = 0) => new Promise(resolve => {
  setTimeout(() => {
      cb();
      resolve();
  }, timeout);
});

class Data extends Component {
  constructor(props){
    super(props);  
    
    this.state = {
      location : "Sangrur",
      startSalary: "",
      endSalary: "",
      YOE: "",
      jobCategory: "Plumber",
      allJobs : null
    }
    this.handleClick = this.handleClick.bind(this)

    this.handleChangeJobCategory = this.handleChangeJobCategory.bind(this)
    this.handleChangeLocation = this.handleChangeLocation.bind(this)

    this.handleChangeYOE = this.handleChangeYOE.bind(this)
    this.handleChangeMinSalary = this.handleChangeMinSalary.bind(this)
    this.handleChangeMaxSalary = this.handleChangeMaxSalary.bind(this)

    this.handleButton = this.handleButton.bind(this)
}

async componentDidMount(){
  const contact = JSON.parse(localStorage.getItem('user_login'))?.data.contact;
  try{
    const responseJson = await axios.get(`/jobSearch/fetchInitialJobFeed?contactNo=${contact}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    })

     await setAsyncTimeout(() => {
      this.setState({
        allJobs: JSON.parse(JSON.stringify(responseJson.data))
       })
  }, 1000);

  }catch(error){
    console.log(error)
  }
      
  }

  handleClick(jobId, contactNo) {
      axios.post(`jobSearch/applyForAJob?jobId=${jobId}&contactNo=${contactNo}`)
      .then((response) => {
        console.log(response);
      })
      window.location.reload(true);
  }

  handleChangeJobCategory(e){
      this.setState({
        jobCategory: e.target.value
      })
  }

  handleChangeLocation(e){
    this.setState({
      location: e.target.value
    })
  }

  handleChangeYOE(e) {
    this.setState({
      YOE : e.target.value
    })  
  }

  handleChangeMaxSalary(e) {
    this.setState({
      maxSalary : e.target.value
    })  
  }

  handleChangeMinSalary(e) {
    this.setState({
      minSalary : e.target.value
    })  
  }



  async handleButton() {
    const obj = {
      contactNo : JSON.parse(localStorage.getItem('user_login'))?.data.contact,
      jobCategory : this.state.jobCategory,
      location : this.state.location,
      startingSalary : this.state.minSalary,
      endingSalary: this.state.maxSalary,
      experience: this.state.YOE
    }
    console.log(obj)

      
      try{
        const responseJson = await axios.post('/jobSearch/fetchJobBySpecifiedFilters', obj)
        await setAsyncTimeout(() => {
          this.setState({
            allJobs: JSON.parse(JSON.stringify(responseJson.data))
           })
      }, 1000);
      
      }catch(error){
        console.log(error)
      }
}


  render() {
    const contact = JSON.parse(localStorage.getItem('user_login'))?.data.contact;
    console.log(contact)

    if(this.state.allJobs === null){

      return(
        <LoopCircleLoading color = "red" />
      )
    }else{
      return (
        <div className = "outer_container_background">
          <span style = {{fontWeight : "bold", fontSize : "25px"}}>Filters</span>
          <div style = {{display: "flex", flexDirection: "row", marginTop: "30px", marginBottom: "30px"}}>
            <div style = {{flex : "0.2", marginLeft: "10px"}}>
            <FormControl variant="outlined" >
              <InputLabel htmlFor="outlined-age-native-simple">Job Category</InputLabel>
                <Select
                native
                value={this.state.jobCategory}
                onChange={this.handleChangeJobCategory}
                inputProps={{
                  name: 'age',
                  id: 'outlined-age-native-simple',
                }}
              >
                <option value={"Plumber"}>Plumber</option>
                <option value={"Electrician"}>Electrician</option>
                <option value={"Carpenter"}>Carpenter</option>
                <option value={"Labour"}>Labour</option>
              </Select>
              </FormControl>
            </div>

            <div style = {{flex : "0.2", marginLeft: "10px"}}>
            <FormControl variant="outlined" >
              <InputLabel htmlFor="outlined-age-native-simple">Location</InputLabel>
                <Select
                native
                value={this.state.location}
                onChange={this.handleChangeLocation}
                inputProps={{
                  name: 'age',
                  id: 'outlined-age-native-simple',
                }}
              >
                <option value={"Sangrur"}>Sangrur</option>
                <option value={"Punjab"}>Punjab</option>
                <option value={"Bangalore"}>Bangalore</option>
                <option value={"Mumbai"}>Mumbai</option>
                <option value={"Delhi"}>Delhi</option>
              </Select>
              </FormControl>
            </div>

            <div style = {{flex : "0.2", marginLeft: "10px"}}>
              <TextField id="minSalary" label="Minimum Salary" variant="outlined" onChange = {this.handleChangeMinSalary}
              style = {{paddingLeft: "10px"}} />
            </div>
            <div style = {{flex : "0.2", marginLeft: "10px"}}>
              <TextField id="maxSalary" label="Maximum Salary" variant="outlined" onChange = {this.handleChangeMaxSalary}
              style = {{paddingLeft: "10px"}} />
            </div>
            <div style = {{flex : "0.2", marginLeft: "10px"}}>
              <TextField id="YOE" label="Experience" variant="outlined" onChange = {this.handleChangeYOE}
              style = {{paddingLeft: "10px"}} />
            </div>
           
            <div style = {{flex : "0.2"}}>
              <Button style = {{width :"100px", marginTop: "10px", color : "white", backgroundColor: "blue"}}
                onClick = {this.handleButton}
              >Apply</Button>
            </div>
          </div>
          <div className = "row">
              {
                  this.state.allJobs.data.map((item) => {
                    return(
                      <JobCard
                          key = {item.jobId}
                          onClick = {this.handleClick}
                          data = {item}
                      />
                    )
                  })
              }
            </div>
        </div>
      )
    }
  }
}

export default Data
