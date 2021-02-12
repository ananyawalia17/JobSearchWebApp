import React, {Component} from 'react';
import NavBar from '../../NavBar/NavBar'
import EmployerSideBar from '../EmployerSideBar/EmployerSideBar'
import DataEmployerProfile from './Data'
import './EmployerProfile.css'

class EmployerProfile extends Component {
  render(){
    return (
      <>
        <NavBar />
        <div className = "OuterContainer__EmployerProfile">
           <EmployerSideBar selectPage = "Employerprofile"/>
           <DataEmployerProfile />
        </div>
     </>
    );
  }
}

export default EmployerProfile;
