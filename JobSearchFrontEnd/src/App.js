import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Jobs from './components/User/Jobs/Jobs'
import JobsApplied from './components/User/JobsApplied/JobsApplied'
import Login from './components/Login/Login'
import Logout from './components/LogOut/LogOut'
import Default from './components/Default/Default'
import Profile from './components/User/Profile/Profile'
import Register from './components/Login/Register'

import EmployerJobs from './components/Employer/Employer/Employer'
import EmployerPosted from './components/Employer/EmployerPosted/EmployerPosted'
import EmployerProfile from './components/Employer/EmployerProfile/EmployerProfile'
import EmployerViewApplicants from './components/Employer/EmployerViewApplicants/EmployerViewApplicants'


class App extends Component {
  render(){
    return (
      <Router>
        <Switch >
          <Route path = "/" exact component = {Login} />
          <Route path = "/register" exact component = {Register} />
          <Route path = "/jobs" exact component = {Jobs} />
          <Route path = "/jobs_applied" exact component = {JobsApplied} />
	        <Route path = "/profile" exact component = {Profile}/>

          <Route path = "/employer" exact component = {EmployerJobs} />
          <Route path = "/employerjobposted" exact component = {EmployerPosted} />
          <Route path = "/employerviewapplicants/:jobId" exact component = {EmployerViewApplicants} />
	        <Route path = "/employerprofile" exact component = {EmployerProfile}/>
          <Route path = "/logout" exact component = {Logout} />
          <Route path = "/"  component = {Default} />
        </Switch>
     </Router>
    );
  }
}

export default App;
