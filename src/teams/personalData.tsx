import "./personalData.css";

function PersonalData(props: any) {
  return (
    <div className="main-container-personal">
      <div className="first-division">
        <div className="sub-main">
          <div className="avatar-personal">
            <img
              src={
                props.member.avatar
                  ? props.member.avatar
                  : `/Avatar.png`
              }
              alt="profile-pic"
              className="profile-pic-personal"
            />
          </div>
          <div className="personal-details">
            <div className="name-container-personal">
              <h2 className="firstname">{props.member.firstname}</h2>
              <h2 className="lastname">{props.member.lastname}</h2>
            </div>
            <div className="role-location-container">
              <p className="role-personal">{props.member.role}</p>
              <p className="location-personal">{props.member.location}</p>
            </div>
          </div>
        </div>
        <div className="logo-picture">
          <img
            className="logo-picture-personal"
            src="https://www.vhv.rs/dpng/d/429-4293806_commercial-floating-floor-menu-button-menu-button-icon.png"
            alt="logo"
          />
        </div>
      </div>

      <div className="task-container-personal">
        <div className="closed-task">
          <h1>{props.member.closedTasks.length}</h1>
          <br />
          <p>
            {" "}
            {props.member.closedTasks.length > 1
              ? "Closed Tasks"
              : "Closed Task"}
          </p>
        </div>
        <div className="open-task">
          <h1>{props.member.openedTasks.length}</h1>
          <br />
          <p>
            {" "}
            {props.member.openedTasks.length > 1 ? "Open Tasks" : "Open Task"}
          </p>
        </div>
      </div>
      <div className="task-assigned-container">
        <div className="number-of-task">
          <h2 className="assihned-task-personal">
            {props.member.openedTasks.length > 1
              ? "Assigned Tasks"
              : "Assigned Task"}
          </h2>
          <h2 className="number-task-personal">
            {props.member.openedTasks.length}
          </h2>
        </div>
        <div className="task-details-personal">
          {props.member.openedTasks.map((task: any, index: number) => (
            <p key={index} className="task-detail">{task.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PersonalData;
