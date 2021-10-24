import "./kanbanStyle.css";
import person from "./businessman-png.png";
import { FC } from "react";

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

function Kanban() {
  return (
    <>
      <div className="Kanban_Container">
        <div className="Kanban_top-most">
          <h2>Backlog</h2>
          <button className="Kanban_add-task">+ Add Task</button>
        </div>
        <div
          style={{ backgroundColor: generateRandomHexColor() }}
          className="Kanban_Info-container"
        >
          <div className="Kanban_Info_right">
            <div className="Kanban_Info_paragraph_container">
              <div className="Kanban_Info_checkbox_container">
                <input className="Kanban_Info_checkbox" type="checkbox" />
              </div>
              <p className="Kanban_Info_paragraph">
                E-mail after registration so that I can confirm my address
              </p>
            </div>
            <div className="Kanban_Info_bottom">
              <div className="Kanban_Info_bottom-image_container">
                <img className="Kanban_Info_bottom-image" src={person} />
              </div>
              <TaskTag tag="APEX " />
            </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: generateRandomHexColor() }}
          className="Kanban_Info-container"
        >
          <div className="Kanban_Info_right">
            <div className="Kanban_Info_paragraph_container">
              <div className="Kanban_Info_checkbox_container">
                <input className="Kanban_Info_checkbox" type="checkbox" />
              </div>
              <p className="Kanban_Info_paragraph">
                E-mail after registration so that I can confirm my address
              </p>
            </div>
            <div className="Kanban_Info_bottom">
              <div className="Kanban_Info_bottom-image_container">
                <img className="Kanban_Info_bottom-image" src={person} />
              </div>
              <TaskTag tag="APEX " />
            </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: generateRandomHexColor() }}
          className="Kanban_Info-container"
        >
          <div className="Kanban_Info_right">
            <div className="Kanban_Info_paragraph_container">
              <div className="Kanban_Info_checkbox_container">
                <input className="Kanban_Info_checkbox" type="checkbox" />
              </div>
              <p className="Kanban_Info_paragraph">
                E-mail after registration so that I can confirm my address
              </p>
            </div>
            <div className="Kanban_Info_bottom">
              <div className="Kanban_Info_bottom-image_container">
                <img className="Kanban_Info_bottom-image" src={person} />
              </div>
              <TaskTag tag="APEX " />
            </div>
          </div>
        </div>
        <div className="Kanban_top-most">
          <h2>Backlog</h2>
          <button className="Kanban_add-task">+ Add Task</button>
        </div>
        <div
          style={{ backgroundColor: generateRandomHexColor() }}
          className="Kanban_Info-container"
        >
          <div className="Kanban_Info_right">
            <div className="Kanban_Info_paragraph_container">
              <div className="Kanban_Info_checkbox_container">
                <input className="Kanban_Info_checkbox" type="checkbox" />
              </div>
              <p className="Kanban_Info_paragraph">
                E-mail after registration so that I can confirm my address
              </p>
            </div>
            <div className="Kanban_Info_bottom">
              <div className="Kanban_Info_bottom-image_container">
                <img className="Kanban_Info_bottom-image" src={person} />
              </div>
              <TaskTag tag="APEX " />
            </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: generateRandomHexColor() }}
          className="Kanban_Info-container"
        >
          <div className="Kanban_Info_right">
            <div className="Kanban_Info_paragraph_container">
              <div className="Kanban_Info_checkbox_container">
                <input className="Kanban_Info_checkbox" type="checkbox" />
              </div>
              <p className="Kanban_Info_paragraph">
                E-mail after registration so that I can confirm my address
              </p>
            </div>
            <div className="Kanban_Info_bottom">
              <div className="Kanban_Info_bottom-image_container">
                <img className="Kanban_Info_bottom-image" src={person} />
              </div>
              <TaskTag tag="DESIGN" />
            </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: generateRandomHexColor() }}
          className="Kanban_Info-container"
        >
          <div className="Kanban_Info_right">
            <div className="Kanban_Info_paragraph_container">
              <div className="Kanban_Info_checkbox_container">
                <input className="Kanban_Info_checkbox" type="checkbox" />
              </div>
              <p className="Kanban_Info_paragraph">
                E-mail after registration so that I can confirm my address
              </p>
            </div>
            <div className="Kanban_Info_bottom">
              <div className="Kanban_Info_bottom-image_container">
                <img className="Kanban_Info_bottom-image" src={person} />
              </div>
              <TaskTag tag="DEVELOPMENT" />
            </div>
          </div>
        </div>
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
      DEVELOPMENT
    </p>
  );
};

export default Kanban;
