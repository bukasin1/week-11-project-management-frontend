import { useParams } from "react-router";
import { ActivityPage } from "../Activity/activity";
import { FilesPage } from "../filesPage/files";
import { Navbar, ProjectNavbar } from "./navbar";
import Side from "./Side";

export default function ProjectComponent(props: any) {

    const path = props.location.pathname

    const {projectname, projectid, owner}: {projectname: string, projectid: string, owner: string} = useParams()
    const project = {
        projectname ,
        projectid,
        owner
    }

    return (
        <>
            <Side projectId = {project.projectid} owner = {project.owner}/>
            <div className="content">

                <ProjectNavbar project = {project} />
                <div className="test">
                    {/* {path.includes('task') && <FilesPage />} */}
                    {/* {path.includes('kanban') && <FilesPage />} */}
                    {path.includes('activity') && <ActivityPage project = {project.projectid} />}
                    {path.includes('files') && <FilesPage project = {project.projectid} />}

                </div>

            </div>
        </>
    );
}