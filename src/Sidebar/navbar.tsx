import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FineIcon from "../assets/designicon.svg";

export function Navbar() {

  function handleLogout() {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    window.location.href = "/login"
  }

  return (
    <div className = "nav-fixed">
      <nav className="navbar_content">
        <div className="navbar_title">
          Home
          <IconButton>
            <MoreHorizIcon style={{ fill: "black" }} />
          </IconButton>
        </div>
        <button className="navbar_content_add" onClick={handleLogout}>Log Out</button>
      </nav>
    </div>
  );
}

export function TeamNavbar(props: any) {

  function handleLogout() {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    window.location.href = "/login"
  }

  return (
    <div className = "nav-fixed">
      <nav className="navbar_content">
        <div className="navbar_title">
        <span className="FineIcon2"><img src={FineIcon} alt ="ion"/></span>
          {props.team.teamname}
          <IconButton>
            <MoreHorizIcon style={{ fill: "black" }} />
          </IconButton>
        </div>
        <button className="navbar_content_add" onClick={handleLogout}>Log Out</button>
      </nav>
    </div>
  );
}

export function ProjectNavbar(props: any) {
  const [activeId, setActiveId] = useState(null)
  const [activeId2, setActiveId2] = useState(null)
  const [activeId3, setActiveId3] = useState(null)
  const [activeId4, setActiveId4] = useState(null)
  const [activeId5, setActiveId5] = useState(null)
  
  function handleLogout() {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    window.location.href = "/login"
  }

  function handleClick() {
    setActiveId(props.project.projectId)
    setActiveId2(null)
    setActiveId3(null)
    setActiveId4(null)
    setActiveId5(null)
  }
  function handleClick2() {
    setActiveId2(props.project.projectId)
    setActiveId(null)
    setActiveId3(null)
    setActiveId4(null)
    setActiveId5(null)
  }
  function handleClick3() {
    setActiveId3(props.project.projectId)
    setActiveId2(null)
    setActiveId(null)
    setActiveId4(null)
    setActiveId5(null)
  }
  function handleClick4() {
    setActiveId4(props.project.projectId)
    setActiveId2(null)
    setActiveId3(null)
    setActiveId(null)
    setActiveId5(null)
  }
  function handleClick5() {
    setActiveId5(props.project.projectId)
    setActiveId2(null)
    setActiveId3(null)
    setActiveId4(null)
    setActiveId(null)
  }
 
  const pathToFiles = `/${props.project.projectname}/${props.project.projectid}/${props.project.owner}/files`
  const pathToTask = `/${props.project.projectname}/${props.project.projectid}/${props.project.owner}/task`
  const pathToKanban = `/${props.project.projectname}/${props.project.projectid}/${props.project.owner}/kanban`
  const pathToActivity = `/${props.project.projectname}/${props.project.projectid}/${props.project.owner}/activity`
  const pathToCalender = `/${props.project.projectname}/${props.project.projectid}/${props.project.owner}/calender`
  console.log(props)
  return (
    <div className = "nav-fixed">
      <nav className="navbar_content">
        <div className="navbar_title">
        <span className="FineIcon2"><img src={FineIcon} alt ="ion"/></span>
          {props.project.projectname}
          <IconButton>
            <MoreHorizIcon style={{ fill: "black" }} />
          </IconButton>
        </div>
        <button className="navbar_content_add" onClick={handleLogout}>Log Out</button>
      </nav>
        <div className = "navbar-nav">
          <div className = {activeId === props.project.projectId ? "nav-item active": "nav-item"} onClick={handleClick}><Link className = "nav-item2" to = {pathToTask}>Tasks</Link></div>
          <div className = {activeId2 === props.project.projectId ? "nav-item active": "nav-item"} onClick={handleClick2}><Link className = "nav-item2" to = {pathToKanban}>Kanban</Link></div>
          <div className = {activeId3 === props.project.projectId ? "nav-item active": "nav-item"} onClick={handleClick3}><Link className = "nav-item2" to = {pathToActivity}>Activity</Link></div>
          <div className = {activeId4 === props.project.projectId ? "nav-item active": "nav-item"} onClick={handleClick4}><Link className = "nav-item2" to = {pathToCalender}>Calender</Link></div>
          <div className = {activeId5 === props.project.projectId ? "nav-item active": "nav-item"} onClick={handleClick5}><Link className = "nav-item2" to = {pathToFiles}>Files</Link></div>
        </div>
    </div>
  );
}

export function ProfileNavbar(props: any) {

  function handleLogout() {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    window.location.href = "/login"
  }

  return (
    <div className = "nav-fixed">
      <nav className="navbar_content">
        <div className="navbar_title">
          Profile Settings
          <IconButton>
            <MoreHorizIcon style={{ fill: "black" }} />
          </IconButton>
        </div>
        <button className="navbar_content_add" onClick={handleLogout}>Log Out</button>
      </nav>
        <div className = "navbar-nav">
          <div className = "nav-item active"><Link className = "nav-item2" to = "/profile">Profile</Link></div>
          <div className = "nav-item"><Link className = "nav-item2" to = "/changepassword">Change password</Link></div>
        </div>
    </div>
  );
}

