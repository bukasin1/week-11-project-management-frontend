import Kanban from "./Kanban";
import Maintask from "./Maintask";
import  "./Maintask.css"

export default function KanbanAndMainTaks() {
  return (
    <div className="TaskContents">
      
      <Kanban />
      <div className= "taskSeperator"></div>
      <Maintask />
    
    </div>
  );
}
