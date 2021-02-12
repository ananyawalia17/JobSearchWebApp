import React, {Component} from 'react';
import NavBar from '../../NavBar/NavBar'
import SideBar from '../SideBar/SideBar'
import DataJobs from './Data'
import './Jobs.css'

class Jobs extends Component {
  render(){
    return (
      <>
        <NavBar />
        <div className = "OuterContainer__Jobs">
           <SideBar selectPage = "jobs"/>
           <DataJobs history = {this.props.history}/>
        </div>
     </>
    );
  }
}

export default Jobs;
