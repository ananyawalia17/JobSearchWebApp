import React, { Component } from 'react'
import './Data.css'
import Avatar from '@material-ui/core/Avatar';
import Image from '../../../assets/Capture.PNG'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import '../../../custom_styles.css'
import axios from 'axios'
import { LoopCircleLoading } from 'react-loadingg';
import {Link, Redirect} from 'react-router-dom';

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



const setAsyncTimeout = (cb, timeout = 0) => new Promise(resolve => {
  setTimeout(() => {
      cb();
      resolve();
  }, timeout);
});


export default class Data extends Component {
  constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this)
      this.state = {
        resp: null
        }
      }

  handleClick(id){
    this.setState({
      name: id
    })
  }

  

  async componentDidMount(){
    setInterval(() => this.setState({ time: Date.now()}), 1000)
    const contact = JSON.parse(localStorage.getItem('user_login'))?.data.contact;
    try{
      const responseJson = await axios.get(`/user/fetchJobSeekerDetails?contactNo=${contact}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      })
  
       await setAsyncTimeout(() => {
        this.setState({
          resp: JSON.parse(JSON.stringify(responseJson.data))
        })
        console.log(this.state.resp)
    }, 1000);
  
    }catch(error){
      console.log(error)
    }
        
    }

    
  render() {
    const contact = JSON.parse(localStorage.getItem('user_login'))?.data.contact;
    const password = JSON.parse(localStorage.getItem('user_login'))?.data.password;
    

    if(this.state.resp === null){
      return(
        <LoopCircleLoading color = "red"/>
      )
    }else{
      return (
        <div className = " outer_container_background">
          <div className = "row" style = {{marginTop: "-20px"}}>
            <div className = "col-12  d-flex justify-content-center">
              <div>
                <Avatar alt = "AG" src = {Image} style = {{height: "150px", width: "150px", top: "40px"}} />
                <h3 style = {{marginTop: "40px", marginLeft: "-20px"}}>{this.state.resp.data.firstName} {this.state.resp.data.lastName}</h3>
              </div>
            </div>
          </div>

          <hr />


          <div className = "row">
            <div className = "col-xsm-12 col-md-6 col-lg-6 my-3 d-flex justify-content-center">
              <Card className = "Card_style" style = {{borderRadius: "25px"}}>
                <CardBody className = "CardBody_style" style = {{borderRadius: "25px"}} >
                  <div style = {{display : "flex", flexDirection: "column"}}>
                    <ContactMailIcon style = {{marginLeft: "30px", marginTop: "30px", fontSize: "80"}}/>
                    <div style = {{flex : "0.5", marginTop: "-80px", color: "grey",fontSize: "18px", marginLeft : '10px'}}>
                      Contact Number
                    </div>
                    <div style = {{flex : "0.5", color: "grey", fontWeight: "bold", marginLeft: "15px", marginTop: "20px", fontSize: "30px"}}>
                      {this.state.resp.data.contactNumber}
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>

            <div className = "col-xsm-12 col-md-6 col-lg-6 my-3 d-flex justify-content-center">
              <Card className = "Card_style" style = {{borderRadius: "25px"}}>
                <CardBody className = "CardBody_style" style = {{borderRadius: "25px"}} >
                  <div style = {{display : "flex", flexDirection: "column"}}>
                    <WcIcon style = {{marginLeft: "30px", marginTop: "30px", fontSize: "80"}}/>
                    <div style = {{flex : "0.5", marginTop: "-80px", color: "grey",fontSize: "18px", marginLeft : '10px'}}>
                      Gender
                    </div>
                    <div style = {{flex : "0.5", color: "grey", fontWeight: "bold", marginLeft: "15px", marginTop: "10px", fontSize: "30px"}}>
                      {this.state.resp.data.gender}
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
            
          </div>


          <div className = "row">
            <div className = "col-xsm-12 col-md-6 col-lg-6 my-3 d-flex justify-content-center">
              <Card className = "Card_style" style = {{borderRadius: "25px"}}>
                <CardBody className = "CardBody_style" style = {{borderRadius: "25px"}} >
                  <div style = {{display : "flex", flexDirection: "column"}}>
                    <PersonIcon style = {{marginLeft: "30px", marginTop: "30px", fontSize: "80"}}/>
                    <div style = {{flex : "0.5", marginTop: "-80px", color: "grey",fontSize: "18px", marginLeft : '10px'}}>
                      Job Title
                    </div>
                    <div style = {{flex : "0.5", color: "grey", fontWeight: "bold", marginLeft: "15px", marginTop: "10px", fontSize: "30px"}}>
                      {this.state.resp.data.jobTitle}
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>

            <div className = "col-xsm-12 col-md-6 col-lg-6 my-3 d-flex justify-content-center">
              <Card className = "Card_style" style = {{borderRadius: "25px"}}>
                <CardBody className = "CardBody_style" style = {{borderRadius: "25px"}} >
                  <div style = {{display : "flex", flexDirection: "column"}}>
                    <QueryBuilderIcon style = {{marginLeft: "30px", marginTop: "30px", fontSize: "80"}}/>
                    <div style = {{flex : "0.5", marginTop: "-80px", color: "grey",fontSize: "18px", marginLeft : '10px'}}>
                      Years of Experience
                    </div>
                    <div style = {{flex : "0.5", color: "grey", fontWeight: "bold", marginLeft: "15px", marginTop: "10px", fontSize: "30px"}}>
                      {this.state.resp.data.yearsOfExperience}
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
            
          </div>


          <div className = "row">
            <div className = "col-xsm-12 col-md-6 col-lg-6 my-3 d-flex justify-content-center">
              <Card className = "Card_style" style = {{borderRadius: "25px"}}>
                <CardBody className = "CardBody_style" style = {{borderRadius: "25px"}} >
                  <div style = {{display : "flex", flexDirection: "column"}}>
                    <LocationOnIcon style = {{marginLeft: "30px", marginTop: "30px", fontSize: "80"}}/>
                    <div style = {{flex : "0.5", marginTop: "-80px", color: "grey",fontSize: "18px", marginLeft : '10px'}}>
                      LOCATION
                    </div>
                    <div style = {{flex : "0.5", color: "grey", fontWeight: "bold", marginLeft: "15px", marginTop: "10px", fontSize: "30px"}}>
                      {this.state.resp.data.location}
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>

            <div className = "col-xsm-12 col-md-6 col-lg-6 my-3 d-flex justify-content-center">
              <Card className = "Card_style" style = {{borderRadius: "25px"}}>
                <CardBody className = "CardBody_style" style = {{borderRadius: "25px"}} >
                  <div style = {{display : "flex", flexDirection: "column"}}>
                    <CalendarViewDayIcon style = {{marginLeft: "30px", marginTop: "30px", fontSize: "80"}}/>
                    <div style = {{flex : "0.5", marginTop: "-80px", color: "grey",fontSize: "18px", marginLeft : '10px'}}>
                      Education
                    </div>
                    <div style = {{flex : "0.5", color: "grey", fontWeight: "bold", marginLeft: "15px", marginTop: "10px", fontSize: "30px"}}>
                      {this.state.resp.data.education}
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>


          <div className = "row">
            <div className = "col-xsm-12 col-md-6 col-lg-6 my-3 d-flex justify-content-center">
              <Card className = "Card_style" style = {{borderRadius: "25px"}}>
                <CardBody className = "CardBody_style" style = {{borderRadius: "25px"}} >
                  <div style = {{display : "flex", flexDirection: "column"}}>
                    <CalendarViewDayIcon style = {{marginLeft: "30px", marginTop: "30px", fontSize: "80"}}/>
                    <div style = {{flex : "0.5", marginTop: "-80px", color: "grey",fontSize: "18px", marginLeft : '10px'}}>
                      Date of Birth
                    </div>
                    <div style = {{flex : "0.5", color: "grey", fontWeight: "bold", marginLeft: "15px", marginTop: "10px", fontSize: "30px"}}>
                      {this.state.resp.data.dateOfBirth}
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>

            <div className = "col-xsm-12 col-md-6 col-lg-6 my-3 d-flex justify-content-center">
              <Card className = "Card_style" style = {{borderRadius: "25px"}}>
                <CardBody className = "CardBody_style" style = {{borderRadius: "25px"}} >
                  <div style = {{display : "flex", flexDirection: "column"}}>
                    <LanguageIcon style = {{marginLeft: "30px", marginTop: "30px", fontSize: "80"}}/>
                    <div style = {{flex : "0.5", marginTop: "-80px", color: "grey",fontSize: "18px", marginLeft : '10px'}}>
                      Language
                    </div>
                    <div style = {{flex : "0.5", color: "grey", fontWeight: "bold", marginLeft: "15px", marginTop: "10px", fontSize: "30px"}}>
                      {this.state.resp.data.language}
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
            
          </div>

          
        </div>
      )
    }
  }
}
