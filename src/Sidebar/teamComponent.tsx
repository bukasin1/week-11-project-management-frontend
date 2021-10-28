import { ProfileNavbar, TeamNavbar } from "../Sidebar/navbar";
//import { FilesPage } from "../filesPage/files";
//import Password from "../ChangePassword/Password";
import Side from "./Side";
//import Profile from "../Profile/Profile";
import { useParams } from "react-router";
import Team from "../teams/Team";
//import PersonalData from "../teams/personalData";
import "./TeamComponent.css";

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

  return (
    <>
      <Side projectId={projectid} owner = {owner} />
      <div className="content">
        <TeamNavbar team={team} />
        <div className="test">
          <div className="sub-test">
            <Team team={team} projectId={projectid} />
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
