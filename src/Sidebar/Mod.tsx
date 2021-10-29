import { useState } from 'react'
import './mod.css'
import axios from 'axios'
import { useParams } from 'react-router'

interface Props {
  closeModal(): void,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  collaborators?: any,
  project?: string
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
            <input onChange={handleChange} type="text" style={{ width: '100%', background: '#EAEAEA', height: '30px', 
            border: 'none', outline: 'none', marginTop: '5px'}} placeholder="  e.g Designer, Developers or Finance" value={input} />
          </div>

          <button onClick={createProject} type="button" style={{ width: '100%', backgroundColor: '#a9f19d', height: '40px', marginTop: '20px', borderRadius: '25px', border: 'none' }}>Create Project</button>
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
            <input onChange={handleChange} type="text" style={{ width: '100%', background: '#EAEAEA', height: '30px', 
            border: 'none', outline: 'none', marginTop: '5px'}}  placeholder="  e.g Designer, Developers or Finance" 
            
            value={input} />
          </div>

          <button onClick={createTeam} type="button" style={{ width: '100%', backgroundColor: '#a9f19d', height: '40px', marginTop: '20px', borderRadius: '25px', border: 'none' }}>Create Team</button>
        </div>
      </div>
    
    </>
  )
}


export function TaskModalComp(props: Props): JSX.Element {

  const params: {projectid: string} = useParams()
  const path = window.location.pathname;
  console.log(path)

  const [title, setTitle] = useState<string>('')
  const [description, setDesc] = useState('')
  const [assignedUser, setAssignee] = useState('')
  const [dueDate, setDate] = useState('')
  const [message, setMessage] = useState('')

  function handleChange(e: any) {
    setTitle(e.target.value)
    setMessage('')
  }

  function handleDate(e: any){
    setDate(e.target.value)
    setMessage('')
    console.log(dueDate, 'date due')
  }
  console.log(typeof dueDate, 'date due')
  console.log(assignedUser, "assignee")

  function createtask() {
    if(title && description && assignedUser && dueDate){
      console.log('Creating Task...')
      console.log(title)
  
      const send = {title, description, assignedUser, dueDate}
  
      console.log(send, "data to send")
  
      const token = localStorage.getItem('token') as string
  
      axios
      .request({
        url: `https://jaraaa.herokuapp.com/profile/${props.project}/task`,
        method: "post",
        headers: { authorization: token },
        withCredentials: true,
        data: send
      })
      .then((res: any) => {
        console.log(res.data, 'data');
          // window.location.href = path
          setTitle('')
          setDesc('')
          setAssignee('')
          setDate('')
          setMessage("Task Created Successfully!")
      })
      .catch((err: any) => {
        console.log(err.response.data, 'err');
        if(err.response.data.message){
          setMessage(err.response.data.message)
        }else{
          setMessage("Error with creating task")}
      });
    }else{
      setMessage("Please complete all fields")
    }
  }

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <span onClick={props.closeModal} className="close">&times;</span>
          <h2><strong>Add a New Task</strong></h2>
          <hr/>
          <div>
            <label>Title</label>
            <input onChange={handleChange} type="text" style={{ width: '100%', background: '#EAEAEA', height: '30px', 
            border: 'none', outline: 'none', marginTop: '10px', marginBottom: '10px'}} placeholder="  Add your task here" value={title} />
            <label style={{marginTop: '10px'}}>Description</label>
            <input onChange={e => {setDesc(e.target.value); setMessage('')}} type="text" style={{ width: '100%', background: '#EAEAEA', height: '30px', 
            border: 'none', outline: 'none', marginTop: '10px', marginBottom: '20px'}} placeholder="  Add description here" value={description} />
            <label>Assigned user</label>
           <select onChange = {e => {setAssignee(e.target.value); setMessage('')}} style={{ width: '100%', padding: '6px', background: '#EAEAEA', border: 'none', outline: "none", marginTop: '10px', marginBottom: '10px'}}>
             <option value="">-------------</option>
             {props.collaborators && props.collaborators.map((member:any) => (
               <option key = {member.userId} value={member.userId}>{member.firstname} {member.lastname}</option>
             ))}
           </select>
           <label>Due Date</label>
           <input onChange = {handleDate} type="date" style={{width: '100%',marginTop: '10px', background: '#EAEAEA',height: '30px', border: 'none', outline: "none"}}/>
          </div>
          {message && <p>{message}</p>}
          <button onClick={createtask} type="button" style={{ width: '100%', backgroundColor: '#a9f19d', height: '40px', marginTop: '20px', borderRadius: '25px', border: 'none' }}>Create Task</button>
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


export function TeamMemberModalComp(props: any): JSX.Element {

  const path = window.location.pathname
  console.log(path)

  const [input, setInput] = useState<string>('')
  const [project, setProjectId] = useState('')
  const [message, setMessage] = useState('')

  function handleChange(e: any) {
    setInput(e.target.value)
    setMessage('')
  }

  console.log(project, 'project id, after')

  function addMember() {
    if(input){
      console.log('Creating project...')
      console.log(input)
  
      const send = {memberId: input}
  
      const token = localStorage.getItem('token') as string
  
      axios
      .request({
        url: `https://jaraaa.herokuapp.com/${props.team.teamid}/addmembertoteam`,
        method: "post",
        headers: { authorization: token },
        withCredentials: true,
        data: send
      })
      .then((res: any) => {
        console.log(res.data, 'data');
        setMessage("Member added succesfully !")
          window.location.href = path
          // setFiles(data.data)
      })
      .catch((err: any) => {
        console.log(err.response.data, 'err');
        setMessage(err.response.data.message)
      });
    }else{
      setMessage("Please select a member to add")
    }
  }

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <span onClick={props.closeModal} className="close">&times;</span>
          <h2><strong>Add a Team member</strong></h2>
          <hr />
          <div>
            <label htmlFor="Project">Collaborators</label>
            <select onChange={handleChange} name="" id="">
            <option value="">-------------</option>
             {props.collaborators && props.collaborators.map((member:any) => (
               <option key = {member.userId} value={member.userId}>{member.firstname} {member.lastname}</option>
             ))}
            </select>
            {/* <label>Email</label>
            <input onChange={handleChange} type="text" style={{ width: '100%' }} value={input} /> */}
          </div>

          {message && <p>{message}</p>}
          <button onClick={addMember} type="button" style={{ width: '100%', backgroundColor: '#a9f19d', height: '40px', marginTop: '30px', borderRadius: '25px', border: 'none' }}>Add To Team</button>
        </div>
      </div>
    </>
  )
}
