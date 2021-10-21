import React from "react";
import { Link } from 'react-router-dom'
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

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

export function ProjectNavbar(props: any) {

  function handleLogout() {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    window.location.href = "/login"
  }

  return (
    <div className = "nav-fixed">
      <nav className="navbar_content">
        <div className="navbar_title">
          {props.project.projectName}
          <IconButton>
            <MoreHorizIcon style={{ fill: "black" }} />
          </IconButton>
        </div>
        <button className="navbar_content_add" onClick={handleLogout}>Log Out</button>
      </nav>
        <div className = "navbar-nav">
          <div className = "nav-item"><Link className = "nav-item2" to = "/welcome">Tasks</Link></div>
          <div className = "nav-item"><Link className = "nav-item2" to = "/welcome">Kanban</Link></div>
          <div className = "nav-item"><Link className = "nav-item2" to = "/welcome">Activity</Link></div>
          <div className = "nav-item"><Link className = "nav-item2" to = "/welcome">Calender</Link></div>
          <div className = "nav-item"><Link className = "nav-item2" to = "/files">Files</Link></div>
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

