import "./teamData.css";

function TeamData(props: any) {
  return (
    <div className="main-container">
      <div className="first-sub-main">
        <div className="image-container">
          <img src={props.img} alt="" className="image" />
        </div>
        <div className="name-role-container">
          {" "}
          <h2>{`${props.firstname} ${props.lastname}`}</h2>
          <p>{props.role}</p>
        </div>
      </div>

      <div className="task-container">
        <h3>{props.tasksAssigned}</h3>
        <p>Tasks</p>
      </div>
    </div>
  );
}

export default TeamData;
