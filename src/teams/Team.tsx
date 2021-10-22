import TeamData from "./teamsData";
import "./Team.css";
//import { getTeams } from "./teams/teamsMembers";

function Team() {
  const teams: any[] = [];
  let team = teams.map((team: any) => (
    <TeamData
      key={team._id}
      firstname={team.firstname}
      lastname={team.lastname}
      role={team.role}
      tasksAssigned={team.tasksAssigned}
      img={team.img}
    />
  ));
  return (
    <div className="main-page">
      <div className="members-container">
        <h1>Members </h1>
        <h1>{team.length}</h1>
      </div>
      {team}
    </div>
  );
}
export default Team;
