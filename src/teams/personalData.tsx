import "./personalData.css";

const person = {
  _id: "5b21ca3eeb7f6fbccd471815",
  firstname: "Carl",
  lastname: "Edit",
  role: "Team Lead",
  tasksAssigned: 100,
  location: "Oklahoma",
  img: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg",
};
function PersonalData() {
  return (
    <div className="main-container-personal">
      <div className="first-division">
        <div className="sub-main">
          <div className="avatar">
            <img src={person.img} alt="profile-pic" className="profile-pic" />
          </div>
          <div className="personal-details">
            <div className="name-container">
              <h2 className="name">
                {person.firstname}
                {person.lastname}
              </h2>
            </div>
            <div className="role-location-container">
              <p>{person.role}</p>
              <p>{person.location}</p>
            </div>
          </div>
        </div>
        <div className="logo-picture">
          <img src="/person/logo copy.png" alt="logo" />
        </div>
      </div>
      <hr />
      <div className="task-container-personal">
        <div className="closed-task">
          <h1>400</h1>
          <br />
          <p>Closed Task</p>
        </div>
        <div className="open-task">
          <h1>100</h1>
          <br />
          <p>Open Task</p>
        </div>
      </div>

      <hr />
    </div>
  );
}

export default PersonalData;
