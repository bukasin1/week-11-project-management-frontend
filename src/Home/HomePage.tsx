import { useEffect, useState } from "react";
import "./HomePage.css";
const HomePage = () => {
  const [userInfo, setUserInfo] = useState<any>({
    openedTasks: [],
    closedTasks: [],
  });
  //let parsedUser: any;
  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`https://jaraaa.herokuapp.com/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
    })
      .then((data) => data.json())
      .then((data) => setUserInfo(data.sendUser));
  }, []);
  const user: any = localStorage.getItem("user");
  const parsedUser = JSON.parse(user);
  console.log("logged in user home page: ", userInfo.openedTasks);
  const closedTasks = userInfo.closedTasks;
  const openTasks = userInfo.openedTasks;

  const todayTasks = openTasks.filter(
    (task: any) =>
      task.updatedAt.toString().split("T")[0].substring(0, 15) ===
      new Date().toString().split("T")[0].substring(0, 15)
  );
  const dateToday = new Date().toString().split("T")[0].substring(0, 15);
  console.log("today date", dateToday);
  console.log("today task for loggged User", todayTasks);
  console.log("closed task for loggged User", closedTasks);
  console.log("open task for loggged User", openTasks);
  return (
    <div className="main-homepage">
      <div className="home-main-container">
        <div className="Top">
          <div className="number-of-tasks">
            <h2 style={{ fontSize: "22px", fontWeight: 500 }}>
              {userInfo.closedTasks.length > 1
                ? "Completed Tasks"
                : "Completed Task"}
            </h2>
            <p style={{ fontSize: "50px", fontWeight: 700 }}>
              {userInfo.closedTasks.length}
            </p>
          </div>
          <div className="tsks-logo">
            <img
              className="task-logo-home"
              src="https://reactscript.com/wp-content/uploads/2017/01/React-wrapper-for-Chart.js-2.png"
              alt="Chart Logo"
            />
          </div>
        </div>
        <div className="Middle">
          <div className="today-task-main">
            <div className="today-task">
              {todayTasks.length === 1 ? (
                "Today Task"
              ) : todayTasks.length > 1 ? (
                "Today Tasks"
              ) : (
                <h2 className="no-task-today">No Task Assigned for today</h2>
              )}
            </div>
          </div>
          <div className="middle-content-container">
            {todayTasks.map((task: any) => (
              <div className="middle-content" key={task._id}>
                {task.title}
              </div>
            ))}
          </div>
        </div>
        <div className="Bottom">
          <div className="pending-task-main">
            <div className="pending-task">
              {openTasks.length === 1 ? (
                "Pending Task"
              ) : openTasks.length > 1 ? (
                "Pending Tasks"
              ) : (
                <h2 className="no-task-today">No Pending Task</h2>
              )}
            </div>
          </div>
          <div className="bottom-content-container">
            {openTasks.map((task: any) => (
              <div className="bottom-content" key={task._id}>
                {task.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
