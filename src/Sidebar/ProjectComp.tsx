import { useParams } from "react-router";
import { FilesPage } from "../filesPage/files";
import Kanban from "../Tasks/Kanban";
import { Navbar, ProjectNavbar } from "./navbar";
import KanbanAndMainTaks from "../Tasks/KanbanAndMainTask";
import Side from "./Side";

export default function ProjectComponent(props: any) {
  const path = props.location.pathname;

  const {
    projectname,
    projectid,
    owner,
  }: { projectname: string; projectid: string; owner: string } = useParams();
  const project = {
    projectname,
    projectid,
    owner,
  };

  return (
    <>
      <Side projectId={project.projectid} owner={project.owner} />
      <div className="content">
        <ProjectNavbar project={project} />
        <div className="test">
          {path.includes("files") && <FilesPage project={project.projectid} />}
          {path.includes("task") && <KanbanAndMainTaks />}
          {/* {path.includes('kanban') && <FilesPage />} */}
        </div>
      </div>
    </>
  );
}