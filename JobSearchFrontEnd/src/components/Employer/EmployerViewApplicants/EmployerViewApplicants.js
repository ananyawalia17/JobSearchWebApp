import React, {Component} from 'react';
import NavBar from '../../NavBar/NavBar'
import EmployerSideBar from '../EmployerSideBar/EmployerSideBar'
import DataEmployerViewApplicants from './Data'
import './EmployerViewApplicants.css'

class EmployerViewApplicants extends Component {
  render(){
    return (
      <>
        <NavBar />
        <div className = "OuterContainer__EmployerViewApplicants">
          <EmployerSideBar selectPage = "none"/>
          <DataEmployerViewApplicants props = {this.props}/>
        </div>
     </>
    );
  }
}

export default EmployerViewApplicants;
