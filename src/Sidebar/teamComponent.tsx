import { ProfileNavbar, TeamNavbar } from "../Sidebar/navbar";
//import { FilesPage } from "../filesPage/files";
//import Password from "../ChangePassword/Password";
import Side from "./Side";
//import Profile from "../Profile/Profile";
import { useParams } from "react-router";
import Team from "../teams/Team";
//import PersonalData from "../teams/personalData";
import "./TeamComponent.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function TeamComponent(props: any) {
  const path = props.location.pathname;
  const {
    projectid,
    teamname,
    teamid,
    owner
  }: { projectid: string; teamname: string; teamid: string, owner: string } = useParams();
  const team = {
    teamname,
    teamid,
  };
  const loggedUser = JSON.parse(localStorage.getItem("user") as string);

  const [collaborators, setCollab] = useState([])

  const token = localStorage.getItem("token") as string
  useEffect(() => {
    axios.request({
      url: `https://jaraaa.herokuapp.com/profile/${projectid}/collaborators`,
      method: "get",
      headers: { authorization: token },
      withCredentials: true
    })
    .then((res: any) => {
      console.log(res.data)
      setCollab(res.data.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [token])

  return (
    <>
      <Side projectId={projectid} owner = {owner} />
      <div className="content">
        <TeamNavbar team={team} />
        <div className="test">
          <div className="sub-test">
            <Team team={team} projectId={projectid} collaborators = {collaborators} />
          </div>
          {/* <div className="sub-test2">
            {" "}
            <PersonalData />
          </div> */}
        </div>
      </div>
    </>
  );
}
