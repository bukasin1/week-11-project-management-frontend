import Kanban from "./Kanban";
import Maintask from "./Maintask";
import { useState } from "react";
import "./Maintask.css";

export default function KanbanAndMainTaks() {
  const [allState, setAllState] = useState<any>({});

  return (
    <div className="TaskContents">
      <Kanban setApiData={setAllState} />
      <div className="taskSeperator"></div>
      {allState.comments? <Maintask apiSetdata={allState} /> : <p>Click on a task to see details</p>}
      {/* <Maintask apiSetdata={allState} /> */}
    </div>
  );
}
