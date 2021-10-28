import Kanban from "./Kanban";
import Maintask from "./Maintask";
import { useState } from "react";
import "./Maintask.css";

export default function KanbanAndMainTaks() {
  const [allState, setAllState] = useState({});

  return (
    <div className="TaskContents">
      <Kanban setApiData={setAllState} />
      <div className="taskSeperator"></div>
      <Maintask apiSetdata={allState} />
    </div>
  );
}
