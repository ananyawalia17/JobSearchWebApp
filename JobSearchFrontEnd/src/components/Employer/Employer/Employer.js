import React, {Component} from 'react';
import NavBar from '../../NavBar/NavBar'
import DataEmployer from './Data'
import EmployerSideBar from '../EmployerSideBar/EmployerSideBar'
import './Employer.css'

class Employer extends Component {
  render(){
    return (
      <>
        <NavBar />
        <div className = "OuterContainer__Employer">
           <EmployerSideBar selectPage = "employer"/>
           <DataEmployer />
        </div>
     </>
    );
  }
}

export default Employer;
