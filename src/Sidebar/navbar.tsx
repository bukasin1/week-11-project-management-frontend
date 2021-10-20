import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Navbar() {
  return (
    <div>
        <nav className="navbar_content">
          <div className="navbar_title">
            Home
            <IconButton>
              <MoreHorizIcon style={{ fill: "black" }} />
            </IconButton>
          </div>
          <div className="navbar_content_add">+Add</div>
        </nav>
    </div>
  );
}

export default Navbar;
