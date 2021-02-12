import React, { Component } from 'react'
import './Employer\SideBar.css'
import EmployerSideBarRow from './EmployerSideBarRow'
import HomeIcon from '@material-ui/icons/Home'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SchoolIcon from '@material-ui/icons/School';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import PersonIcon from '@material-ui/icons/Person';

export default class SideBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedPage : this.props.selectPage
    }
  }


  render() {
    return (
      <div className = "OuterContainer__EmployerSideBar">
        <EmployerSideBarRow link = 'employer' selected = {this.state.selectedPage === 'employer'} Icon = {HomeIcon} title = "Post a Job"/>
        <EmployerSideBarRow link = 'employerjobposted' selected = {this.state.selectedPage === 'employerjobposted'} Icon = {LibraryBooksIcon} title = "Posted Jobs"/>
	      <br />
        <br />
        <br />
        <br />

        <br />
        <br />
        <br />
        <br />

        <hr />
        <EmployerSideBarRow link = 'employerprofile' selected = {this.state.selectedPage === 'employerprofile'} Icon = {PersonIcon} title = "Employer Profile"/>
        <EmployerSideBarRow link = 'logout' selected = {this.state.selectedPage === 'logout'} Icon = {ExitToAppIcon} title = "Log Out"/>
      </div>
    )
  }
}
