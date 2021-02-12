import React, {Component} from 'react';
import NavBar from '../../NavBar/NavBar'
import DataJobsApplied from './Data'
import SideBar from '../SideBar/SideBar'
import './JobsApplied.css'

class JobsApplied extends Component {
  render(){
    return (
      <>
        <NavBar />
        <div className = "OuterContainer__JobsApplied">
           <SideBar selectPage = "jobs_applied"/>
           <DataJobsApplied />
        </div>
     </>
    );
  }
}

export default JobsApplied;
