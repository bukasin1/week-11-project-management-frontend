import { ProfileNavbar, TeamNavbar } from "../Sidebar/navbar";
import { FilesPage } from "../filesPage/files";
import Password from "../ChangePassword/Password";
import Side from "./Side";
import Profile from "../Profile/Profile";
import { useParams } from "react-router";


export default function TeamComponent(props: any) {
    const path = props.location.pathname;
    const {projectid, teamname, teamid}: {projectid: string,teamname: string, teamid: string} = useParams()
    const team = {
        teamname ,
        teamid
    }
    const loggedUser = JSON.parse(localStorage.getItem('user') as string)

    return (
        <>

            <Side projectId = {projectid} />
            <div className="content">

                <TeamNavbar team = {team} />
                <div className="test">
                    <div>{team.teamname}</div>
                </div>

            </div>
        </>
    );
}