import { useState } from 'react'
import './mod.css'
import axios from 'axios'
import { useParams } from 'react-router'

interface Props {
  closeModal(): void,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

// http://localhost:3001/

export function ProjectModalComp(props: any): JSX.Element {

  const path = window.location.pathname
  console.log(path)

  const [input, setInput] = useState<string>('')

  function handleChange(e: any) {
    setInput(e.target.value)
  }

  function createProject() {
    console.log('Creating project...')
    console.log(input)

    const send = {projectName: input}

    const token = localStorage.getItem('token') as string

    axios
    .request({
      url: `https://jaraaa.herokuapp.com/profile/create-project`,
      method: "post",
      headers: { authorization: token },
      withCredentials: true,
      data: send
    })
    .then((res: any) => {
      console.log(res.data, 'data');
        window.location.href = path
        // setFiles(data.data)
    })
    .catch((err: any) => {
      console.log(err.response, 'err');
    });
  }

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <span onClick={props.closeModal} className="close">&times;</span>
          <h2><strong>Add a New Project</strong></h2>
          <hr />
          <div>
            <label>Name</label>
            <input onChange={handleChange} type="text" style={{ width: '100%' }} value={input} />
          </div>

          <button onClick={createProject} type="button" style={{ width: '100%', backgroundColor: '#a9f19d', height: '40px', marginTop: '30px', borderRadius: '25px', border: 'none' }}>Create Project</button>
        </div>
      </div>
    </>
  )
}

export function TeamModalComp(props: Props): JSX.Element {

  const params: {projectid: string} = useParams()
  const path = window.location.pathname
  console.log(path)

  const [input, setInput] = useState<string>('')

  function handleChange(e: any) {
    setInput(e.target.value)
  }

  function createTeam() {
    console.log('Creating team...')
    console.log(input)

    const send = {teamName: input}

    const token = localStorage.getItem('token') as string

    axios
    .request({
      url: `https://jaraaa.herokuapp.com/${params.projectid}/createteam`,
      method: "post",
      headers: { authorization: token },
      withCredentials: true,
      data: send
    })
    .then((res: any) => {
      console.log(res.data, 'data');
        window.location.href = path
        // setFiles(data.data)
    })
    .catch((err: any) => {
      console.log(err.response, 'err');
    });
  }

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <span onClick={props.closeModal} className="close">&times;</span>
          <h2><strong>Add a New Team</strong></h2>
          <hr />
          <div>
            <label>Name</label>
            <input onChange={handleChange} type="text" style={{ width: '100%' }} placeholder="  e.g Designer, Developers or Finance" value={input} />
          </div>

          <button onClick={createTeam} type="button" style={{ width: '100%', backgroundColor: '#a9f19d', height: '40px', marginTop: '30px', borderRadius: '25px', border: 'none' }}>Create Team</button>
        </div>
      </div>
    </>
  )
}


export function InviteModalComp(props: any): JSX.Element {

  const path = window.location.pathname
  console.log(path)

  const [input, setInput] = useState<string>('')
  const [project, setProjectId] = useState('')
  const [message, setMessage] = useState('')

  function handleChange(e: any) {
    setInput(e.target.value)
    setMessage('')
  }

  function setProject(e: any){
    setProjectId(e.target.value)
    setMessage('')
    console.log(project, 'project id')
  }

  console.log(project, 'project id, after')

  function sendInvite() {
    if(project && input){
      console.log('Creating project...')
      console.log(input)
  
      const send = {email: input}
  
      const token = localStorage.getItem('token') as string
  
      axios
      .request({
        url: `https://jaraaa.herokuapp.com/profile/${project}/project-invite`,
        method: "post",
        headers: { authorization: token },
        withCredentials: true,
        data: send
      })
      .then((res: any) => {
        console.log(res.data, 'data');
        setMessage("Invite sent!")
          // window.location.href = path
          // setFiles(data.data)
      })
      .catch((err: any) => {
        console.log(err.response.data, 'err');
      });
    }else{
      setMessage("Please select a project and enter an email")
    }
  }

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <span onClick={props.closeModal} className="close">&times;</span>
          <h2><strong>Send a collaboration invite</strong></h2>
          <hr />
          <div>
            <label htmlFor="Project">Projects</label>
            <select onChange={setProject} name="" id="">
              <option value="---">---</option>
              {props.projects.map((project: any) => (
                <option key = {project.projectId} value={project.projectId}>{project.projectName}</option>
              ))}
            </select>
            <label>Email</label>
            <input onChange={handleChange} type="text" style={{ width: '100%' }} value={input} />
          </div>

          {message && <p>{message}</p>}
          <button onClick={sendInvite} type="button" style={{ width: '100%', backgroundColor: '#a9f19d', height: '40px', marginTop: '30px', borderRadius: '25px', border: 'none' }}>Send Invite</button>
        </div>
      </div>
    </>
  )
}
