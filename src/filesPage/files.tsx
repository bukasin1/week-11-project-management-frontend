import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./files.css"
import logo from './logo.svg'
import { useParams } from 'react-router'

export const FilesPage = (props:any) => {

    const testFiles = [{ _id: 'test', fileName: "test", fileUrl: './logo512.png', uploadedBy:{userName: "test"}, uploadedOn: 'date' },
    { _id: 'test', fileName: "test", fileUrl: './logo512.png', uploadedBy:{userName: "test"}, uploadedOn: 'date' },
    { _id: 'test', fileName: "test", fileUrl: './logo512.png', uploadedBy:{userName: "test"}, uploadedOn: 'date' },
    { _id: 'test', fileName: "test", fileUrl: './logo512.png', uploadedBy:{userName: "test"}, uploadedOn: 'date' }]
    const [files, setFiles] = useState([])

    const {} = useParams()
    console.log(useParams())

    useEffect(() => {
        // axios.get('http://localhost:3004/getfileuploads', { withCredentials: true })
        //     .then((res: any) => {
        //         console.log(res.data.data)
        //         setFiles(res.data.data)
        //     })
        //     .catch(err => {
        //         console.log(err.response.data)
        //         // window.location.href = "/"
        //     })
        const token = localStorage.getItem('token')
        console.log(token)
        fetch(`https://jaraaa.herokuapp.com/${props.project}/getfileuploads`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json', "authorization": `${token}` }
        }).then(res => res.json())
            .then(data => {
                if (data.msg) {
                    console.log("Major:", data)
                } else {
                    console.log(data.data, 'data')
                    setFiles(data.data)
                }
                // window.location.href = "/success"
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    if(props.project){
        return (
            <div className = "main-flex-container">
                {/* <div className = "flex-item-left"></div> */}
                <div className="fileDiv flex-item-right">
                    <div className="flex-container">
                        <div className="first"><h3>Image</h3></div>
                        <div className="second"><h3>Name</h3></div>
                        <div className="first"><h3>Size</h3></div>
                        <div className="fourth"><h3>Uploaded By</h3></div>
                        <div className="fourth"><h3>Tag</h3></div>
                        <div className="fourth"><h3>Date</h3></div>
                        <div className="fourth"><h3></h3></div>
                    </div>
                    {files.length > 0? files.map((file: any, index) => (<div key={index} className="file-container">
                        <div key={index + 1} className="first file-logo"><img src={file.fileUrl} alt={file.fileName.split('.').slice(-1)[0].toUpperCase()} /></div>
                        <div key={index + 2} className="second"><h3>{file.fileName}</h3></div>
                        <div key={index + 3} className="first"><h3>{file.fileSize}</h3></div>
                        <div key={index + 4} className="fourth user">{file.uploadedBy.userAvatar? <img className = "userLogo" src={file.uploadedBy.userAvatar} alt="User" />: <img className = "userLogo" src="/Avatar.png" alt="User" /> }<h3>{file.uploadedBy.userName}</h3></div>
                        <div key={index + 5} className="fourth"><h3>Tag</h3></div>
                        <div key={index + 6} className="fourth"><h3>{file.uploadedOn.split('T')[0]}</h3></div>
                        <div key={index + 7} className="fourth"><h3>Action</h3></div>
                    </div>)) : <div>No files uploaded yet</div> }
                </div>
            </div>
        )
    }
    return (<></>)

}