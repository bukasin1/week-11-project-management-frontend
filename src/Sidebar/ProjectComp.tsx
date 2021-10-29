import { useParams } from "react-router";
import { ActivityPage } from "../Activity/activity";
import { FilesPage } from "../filesPage/files";
import KanbanComp from "../kanban/Kanban";
import Kanban from "../Tasks/Kanban";
import { Navbar, ProjectNavbar } from "./navbar";
import KanbanAndMainTaks from "../Tasks/KanbanAndMainTask";
import Side from "./Side";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProjectComponent(props: any) {
  const path = props.location.pathname;

    const {projectname, projectid, owner}: {projectname: string, projectid: string, owner: string} = useParams()
    const project = {
        projectname ,
        projectid,
        owner
    }

    const [collaborators, setCollab] = useState([])

    const token = localStorage.getItem("token") as string
    useEffect(() => {
      axios.request({
        url: `https://jaraaa.herokuapp.com/profile/${project.projectid}/collaborators`,
        method: "get",
        headers: { authorization: token },
        withCredentials: true
      })
      .then((res: any) => {
        console.log(res.data)
        setCollab(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
    }, [token])
  
    console.log(collaborators, "set collabs")

    return (
        <>
            <Side projectId = {project.projectid} owner = {project.owner}/>
            <div className="content">

                <ProjectNavbar project = {project} />
                <div className="test">
                    {path.includes('task') && <KanbanAndMainTaks />}
                    {path.includes('kanban') && <KanbanComp collaborators = {collaborators} project = {project.projectid} />}
                    {path.includes('activity') && <ActivityPage project = {project.projectid} />}
                    {path.includes('files') && <FilesPage project = {project.projectid} />}

                </div>

            </div>
        </>
    );
}