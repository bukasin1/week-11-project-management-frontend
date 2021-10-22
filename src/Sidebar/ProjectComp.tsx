import { useParams } from "react-router";
import { FilesPage } from "../filesPage/files";
import { Navbar, ProjectNavbar } from "./navbar";
import Side from "./Side";

export default function ProjectComponent(props: any) {

    const path = props.location.pathname

    const {projectname, projectid}: {projectname: string, projectid: string} = useParams()
    const project = {
        projectname ,
        projectid
    }

    return (
        <>
            <Side projectId = {project.projectid}/>
            <div className="content">

                <ProjectNavbar project = {project} />
                <div className="test">
                    {path.includes('files') && <FilesPage project = {project.projectid} />}
                    {/* {path.includes('task') && <FilesPage />} */}
                    {/* {path.includes('kanban') && <FilesPage />} */}

                </div>

            </div>
        </>
    );
}