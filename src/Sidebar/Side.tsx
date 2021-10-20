import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Navbar from './navbar';
import "./Side.css";
import { ModalComp } from "./Mod";
import MainContent from './mainContent'
import { FilesPage } from "../filesPage/files";

function Side() {
    const [modalIsOpen, setIsOpen] = React.useState<boolean>(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
    <div className="sidebar_header">
      <div className="sidebar">
        <div className="sidebar_header">
          <div>
            <div className="firstDivElement">
              <div className="mark"></div>
              <div className="dash"></div>
            </div>
            <div className="firstDivElement">
              <div className="mark"></div>
              <div className="dash"></div>
            </div>
          </div>
          <div className="projectus">PROJECTUS</div>
          <IconButton>
            <SearchIcon style={{ fill: "#878787" }} />
          </IconButton>
        </div>
        <div className="profile_sidebar">
          <IconButton>
            <Avatar style={{ width: "55px",height: "55px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZx41E6X-WX4Q7rru7Ut0tRUHgdkJn-qTDg&usqp=CAU" />
          </IconButton>
          <div>
            <p className="sidebar_name">Emilee Simchenko</p>
            <h5 className="product_name"> Product Owner </h5>
          </div>
          <IconButton>
              <MoreHorizIcon style={{ fill: "#878787" }} />
            </IconButton>
        </div>
        <div className="Task">
          <div className="completed_Task">
            <h1>372</h1>
            <h5 className="task_text">Completed Tasks</h5>
          </div>
          <div className="open_Task">
            <h1>11</h1>
            <h5 className="task_text">Open Tasks</h5>
          </div>
        </div>
        <div className="Menu_section">
          <div>
            <h4 className="menu">MENU</h4>
          </div>
          <div>Home</div>
          <div>My Tasks</div>
          <div className="notifications">
            <div>Notfications </div>
            <p className="circle_yellow">
            <span>3</span>
            </p>
          </div>
        </div>
        <div className="Menu_projects">
          <div>
            <h4 className="project">PROJECTS</h4>
          </div>
          <div>Dashboard UI Kit</div>
          <div>CRM System</div>
          <div>Website Redesign</div>
          <div>Communication Tool</div>
        </div>
        <div onClick={openModal} className="addProject">+Add a Project</div>
        <div className="Team_projects">
          <div>
            <h4 className="team">TEAMS</h4>
          </div>
          <div className="designers">
           <p>Designers</p>
          {/* .MuiSvgIcon-root */}
          <IconButton>
            <Avatar style={{ width: "25px",height: "25px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZx41E6X-WX4Q7rru7Ut0tRUHgdkJn-qTDg&usqp=CAU" />
          </IconButton>
          <IconButton>
            <Avatar style={{ width: "25px",height: "25px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZx41E6X-WX4Q7rru7Ut0tRUHgdkJn-qTDg&usqp=CAU" />
          </IconButton>
          <IconButton>
            <Avatar style={{ width: "25px",height: "25px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZx41E6X-WX4Q7rru7Ut0tRUHgdkJn-qTDg&usqp=CAU" />
          </IconButton>
          </div>
          <div className="backend">Backend
          <IconButton>
            <Avatar style={{ width: "25px",height: "25px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZx41E6X-WX4Q7rru7Ut0tRUHgdkJn-qTDg&usqp=CAU" />
          </IconButton>
          </div>
          <div className="frontend">Frontend
          <IconButton>
            <Avatar style={{ width: "25px",height: "25px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZx41E6X-WX4Q7rru7Ut0tRUHgdkJn-qTDg&usqp=CAU" />
          </IconButton>
          <IconButton>
            <Avatar style={{ width: "25px",height: "25px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZx41E6X-WX4Q7rru7Ut0tRUHgdkJn-qTDg&usqp=CAU" />
          </IconButton>
          </div>
        </div>
        <div onClick={openModal} className="addTeam">+Add a Team</div>
        <div className="sidebar_footer">
          <span>Invite your team</span> and start collaborating!
        </div>
      </div>


    </div>
      <div className="content">
        <Navbar/>
        <div className = "test">
        <FilesPage/>

        </div>
      </div>
    {modalIsOpen && <ModalComp setIsOpen={setIsOpen} closeModal={closeModal} />}
    </>

  );
}

export default Side;
