import "./teamData.css";

function TeamData(props: any) {
  return (
    <div className="main-container-team">
      <div className="first-sub-main">
        <div className="image-container">
          <img src={props.img} alt="" className="image" />
        </div>
        <div className="name-role-container">
          {" "}
          <h2
            style={{ fontSize: "18px" }}
          >{`${props.firstname} ${props.lastname}`}</h2>
          <p style={{ fontSize: "14px" }}>{props.role}</p>
        </div>
      </div>

      <div className="task-container">
        <h3 style={{ fontSize: "22px", margin: 0 }}>{props.tasksAssigned}</h3>
        <p>{props.tasksAssigned > 1 ? "Tasks" : "Task"}</p>
      </div>
    </div>
  );
}

export default TeamData;
