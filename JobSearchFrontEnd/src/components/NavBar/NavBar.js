import React, {useState} from 'react'
import "./NavBar.css"
import Avatar from '@material-ui/core/Avatar';
import Image from '../../assets/person.png'
import Logo from '../../assets/Capture.PNG'

function NavBar() {
    const contact = JSON.parse(localStorage.getItem('user_login'))?.data.contact || JSON.parse(localStorage.getItem('admin_login'))?.data.contact || null;
    const password = JSON.parse(localStorage.getItem('user_login'))?.data.password || null;
    return (
        <>
            <div className = "NavBar">
                <div className = "NavBar__left">
                    <img className = "NavBar__logo" 
                    src = {Logo} 
                    style = {{marginLeft : "40px" }}/>
                </div>
            
                <div className = "NavBar__right">
                    <div className = "NavBar__right__content">
                        <span className = "NavBar__right__option__1"> Hi , User </span>
                        <span className = "NavBar__right__option__2"> Contact --> {contact} </span>
                    </div>

                    <Avatar alt = "AG" src = {Image} style = {{height : "35px", width : "35px"}} />

                    {/* <div className = "NavBar__right__content">
                        <span className = "NavBar__right__option__1"> Returns </span>
                        <span className = "NavBar__right__option__2"> & Orders </span>
                    </div>

                    <div className = "NavBar__right__content">
                        <span className = "NavBar__right__option__1"> Try </span>
                        <span className = "NavBar__right__option__2"> Prime </span>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default NavBar
