import React, { Component } from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './Data.css'
import '../../../custom_styles.css'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom';
import { LoopCircleLoading } from 'react-loadingg';
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

function JobCard({data}){
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

        <div style = {{marginLeft: "350px", marginTop: "50px"}}>
          {data.datePosted}
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

export default class Data extends Component {
  constructor(props){
    super(props);

    this.state = {
      applied_jobs :null
    }
  }


  async componentDidMount(){
    const contact = JSON.parse(localStorage.getItem('user_login'))?.data.contact;
    setInterval(() => this.setState({ time: Date.now()}), 1000)
    try{
      const responseJson = await axios.get(`/jobSearch/fetchJobHistory?contactNo=${contact}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      })
  
       await setAsyncTimeout(() => {
        this.setState({
          applied_jobs: JSON.parse(JSON.stringify(responseJson.data))
         })
    }, 1000);
  
    }catch(error){
      console.log(error)
    }
        
    }

  
  render() {  
    if(this.state.applied_jobs === null){
      return(
        <LoopCircleLoading color = "red" />
      )
    }else{
      return(
        <div className = "outer_container_background">
          <div className = "row">
            {
              this.state.applied_jobs.data.map((item) => {
                console.log(item.company)
                return(
                  <JobCard
                      key = {item.jobId}
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




