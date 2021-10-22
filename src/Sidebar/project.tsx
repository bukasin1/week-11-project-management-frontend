import React from "react";
import { Link } from 'react-router-dom'
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Navbar, ProjectNavbar, ProfileNavbar } from './navbar';

export function ProjectComp(props:any) {

  return (
    <div className = "test">
        <ProjectNavbar project={props.project} />
        <div className="test">
            Trial
        </div>
    </div>
  );
}