import React from "react";
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

  function handleLogout() {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    window.location.href = "/login"
  }

  const pathToFiles = `/${props.project.projectname}/${props.project.projectid}/${props.project.owner}/files`
  const pathToTask = `/${props.project.projectname}/${props.project.projectid}/${props.project.owner}/task`
  const pathToKanban = `/${props.project.projectname}/${props.project.projectid}/${props.project.owner}/kanban`
  const pathToActivity = `/${props.project.projectname}/${props.project.projectid}/${props.project.owner}/activity`
  const pathToCalender = `/${props.project.projectname}/${props.project.projectid}/${props.project.owner}/calender`

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
          <div className = "nav-item"><Link className = "nav-item2" to = {pathToTask}>Tasks</Link></div>
          <div className = "nav-item"><Link className = "nav-item2" to = {pathToKanban}>Kanban</Link></div>
          <div className = "nav-item"><Link className = "nav-item2" to = {pathToActivity}>Activity</Link></div>
          <div className = "nav-item"><Link className = "nav-item2" to = {pathToCalender}>Calender</Link></div>
          <div className = "nav-item"><Link className = "nav-item2" to = {pathToFiles}>Files</Link></div>
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
          <div className = "nav-item"><Link className = "nav-item2" to = "/profile">Profile</Link></div>
          <div className = "nav-item"><Link className = "nav-item2" to = "/changepassword">Change password</Link></div>
        </div>
    </div>
  );
}

