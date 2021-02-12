import React, {Component} from 'react';
import NavBar from '../../NavBar/NavBar'
import EmployerSideBar from '../EmployerSideBar/EmployerSideBar'
import DataEmployerPage from './Data'
import './EmployerPosted.css'

class EmployerPosted extends Component {
  render(){
    return (
      <>
        <NavBar />
        <div className = "OuterContainer__EmployerPosted">
          <EmployerSideBar selectPage = "employerjobposted"/>
          <DataEmployerPage />
        </div>
     </>
    );
  }
}

export default EmployerPosted;
