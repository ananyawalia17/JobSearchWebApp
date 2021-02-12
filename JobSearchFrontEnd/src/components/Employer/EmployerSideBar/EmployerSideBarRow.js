import React from 'react'
import {Link} from 'react-router-dom'
import './EmployerSideBar.css'

export default function EmployerSideBarRow({link,selected, Icon,title}) {
  const url = '/' + link
  return (
    <>
    <Link to = {url} style = {{color: 'black', textDecoration : 'none'}}>
        <div className = {`EmployerSideBarRow ${selected && 'selected'}`}>
          <Icon className = "EmployerSideBarRow__icon"/>
          <h2 className = "EmployerSideBarRow__title">{title}</h2>
        </div>
      </Link>
    </>
  )
}
