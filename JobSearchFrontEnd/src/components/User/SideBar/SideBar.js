import React, { Component } from 'react'
import './SideBar.css'
import SideBarRow from './SideBarRow'
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
      <div className = "OuterContainer__SideBar">
        
        <SideBarRow link = 'jobs' selected = {this.state.selectedPage === 'jobs'} Icon = {HomeIcon} title = "Jobs"/>
        <SideBarRow link = 'jobs_applied' selected = {this.state.selectedPage === 'jobs_applied'} Icon = {LibraryBooksIcon} title = "Jobs Applied"/>
	      <br />
        <br />
        <br />
        <br />

        <br />
        <br />
        <br />
        <br />
        <hr />
        <SideBarRow link = 'profile' selected = {this.state.selectedPage === 'profile'} Icon = {PersonIcon} title = "Profile"/>
        <SideBarRow link = 'logout' selected = {this.state.selectedPage === 'logout'} Icon = {ExitToAppIcon} title = "Log Out"/>
      </div>
    )
  }
}
