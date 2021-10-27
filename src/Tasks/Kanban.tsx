import "./kanbanStyle.css";
import person from "./businessman-png.png";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function generateRandomHexColor() {
  const colors = ["#F7F6F3", "#FFF8DD", "#EAEAEA"];
  const randomIndex = Math.floor(Math.random() * colors.length + 0);
  return colors[randomIndex];
}

function generateRandomFontColor() {
  const backgroundOpacity = 0.1;
  const colors = [
    { color: [237, 100, 0, 1], background: [237, 100, 0, backgroundOpacity] },
    { color: [118, 76, 237, 1], background: [118, 76, 237, backgroundOpacity] },
    { color: [25, 117, 208, 1], background: [25, 117, 208, backgroundOpacity] },
  ];
  const randomIndex = Math.floor(Math.random() * colors.length + 0);
  return colors[randomIndex];
}

function Kanban({ setApiData }: any) {
  const { projectid }: any = useParams();
  const [data, setData] = useState([]);
  const [backlog, setBacklog] = useState();
  useEffect(() => {
    const token = localStorage.getItem("token") as string;
    axios
      .request({
        url: `https://jaraaa.herokuapp.com/tasks/${projectid}`,
        method: "get",
        headers: { authorization: token },
        withCredentials: true,
      })
      .then((res: any) => {
        console.log(res.data, "i am data haha");
        const data = res.data;
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="Kanban_Container">
        <div className="Kanban_top-most">
          <h2>Backlog</h2>
          <button className="Kanban_add-task">+ Add Task</button>
        </div>
        {data.map((obj: any) => {
          return (
            obj.status === "backlog" && (
              <div
                onClick={() => setApiData(obj)}
                key={obj._id}
                style={{ backgroundColor: generateRandomHexColor() }}
                className="Kanban_Info-container"
              >
                <div className="Kanban_Info_right">
                  <div className="Kanban_Info_paragraph_container">
                    <div className="Kanban_Info_checkbox_container">
                      <input className="Kanban_Info_checkbox" type="checkbox" />
                    </div>
                    <p className="Kanban_Info_paragraph">{obj.title}</p>
                  </div>
                  <div className="Kanban_Info_bottom">
                    <div className="Kanban_Info_bottom-image_container">
                      <img
                        className="Kanban_Info_bottom-image"
                        src={obj.AssignedUserAvatar}
                      />
                    </div>
                    <TaskTag tag={obj.AssaignedUserName} />
                  </div>
                </div>
              </div>
            )
          );
        })}
        <div className="Kanban_top-most">
          <h2>To Do</h2>
          <button className="Kanban_add-task">+ Add Task</button>
        </div>
        {data.map((obj: any) => {
          return (
            obj.status === "todo" && (
              <div
                key={obj._id}
                style={{ backgroundColor: generateRandomHexColor() }}
                className="Kanban_Info-container"
                onClick={() => setApiData(obj)}
              >
                <div className="Kanban_Info_right">
                  <div className="Kanban_Info_paragraph_container">
                    <div className="Kanban_Info_checkbox_container">
                      <input className="Kanban_Info_checkbox" type="checkbox" />
                    </div>
                    <p className="Kanban_Info_paragraph">{obj.title}</p>
                  </div>
                  <div className="Kanban_Info_bottom">
                    <div className="Kanban_Info_bottom-image_container">
                      <img
                        className="Kanban_Info_bottom-image"
                        src={obj.AssignedUserAvatar}
                      />
                    </div>
                    <TaskTag tag={obj.AssaignedUserName} />
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
    </>
  );
}

const TaskTag: FC<{ tag: string }> = ({ tag }) => {
  const bgAndColor = generateRandomFontColor();
  return (
    <p
      style={{
        color: `rgba(${bgAndColor.color.join()})`,
        backgroundColor: `rgba(${bgAndColor.background.join()})`,
      }}
      className="Kanban_Info_bottom-content"
    >
      {tag}
    </p>
  );
};

export default Kanban;
