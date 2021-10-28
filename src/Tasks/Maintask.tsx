import React, { useState } from "react";
import "./Maintask.css";
import Avater1 from "./MaintaskImag/Avater1.svg";
import Avater2 from "./MaintaskImag/Avater2.svg";
import pdf from "./MaintaskImag/pdf.svg";
import videoimg from "./MaintaskImag/videoimg.svg";
import mick from "./MaintaskImag/mick.svg";
import terus from "./MaintaskImag/terus.svg";
import vergo from "./MaintaskImag/vergo.svg";
import { useParams } from "react-router-dom";
import dateFormat from "dateformat"
import axios from 'axios'

const Maintask = ({ apiSetdata }: any) => {
  console.log(apiSetdata)

  const createdOn = dateFormat(apiSetdata.createdAt, "dddd,  h:MM TT")
  const dueOn = dateFormat(apiSetdata.dueDate, "dddd,  h:MM TT");

  const { taskID }: any = useParams();


  const [comment, setComments] = useState({
    comment: '',
  })


  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target
    setComments({
      ...comment,
      [name]: value
    })
  }

  const handleKeyDown = async (event: { key: string; }) => {
    if (event.key === 'Enter') {
      console.log(comment)
      const token = localStorage.getItem('token') as string
      console.log(token)
      await axios.request({ url: `https://jaraaa.herokuapp.com/tasks/${apiSetdata._id}/create-comment`, method: "post", data: comment, headers: { authorization: token }, withCredentials: true })
        .then(response => {
          console.log(response.data)
          console.log("Major:", response.data)
          alert("Your comment has been added successfully")
          // window.location.href = "/success"

        }).catch(err => {
          alert("Click on a Task to comment")
          console.log(err);


        })
    }
  }

  return (
    <div className="maintask-content">
      <div className="maintask-header">
        <h3>{!apiSetdata.title ? <h3> No Title </h3> : apiSetdata.title}</h3>
      </div>

      <div className="maintask-header2">
        <p>Added by Kristin A. {createdOn}</p>
      </div>

      <div className="maintask-2ndHeader">
        <h4>ASIGN TO</h4>
        <h4>DUE ON</h4>
        <h4>TAG</h4>
        <h4>FOLLOWERS</h4>
      </div>
      <div className="maintask-3rdHeader">
        <div className="content55">
          <img src={apiSetdata.AssignedUserAvatar ? apiSetdata.AssignedUserAvatar : Avater1} className="maintask-avarter" />
          <h4 className="m3rdHeader0">{apiSetdata.AssaignedUserName}</h4>
        </div>
        <h4 className="m3rdHeader1">{dueOn}</h4>
        <h4 className="m3rdHeader2">MARKETING</h4>
        <h4 className="m3rdHeader3">
          <img src={Avater1} className="maintask-avarter" />
          <img src={Avater2} className="maintask-avarter" />
          <img src={Avater1} className="maintask-avarter" />
          <img src={Avater2} className="maintask-avarter" />
        </h4>
      </div>
      <hr className="hor6" />
      <div className="maintask-4rdHeader">
        <h3>DESCRIPTION</h3>
      </div>

      <div className="maintask-5rdHeader">
        <p>{!apiSetdata.description ? <p> No Description Yet</p> : apiSetdata.description}</p>
      </div>

      <div className="flex-div">

        {apiSetdata.files && apiSetdata.files.slice(0, 2).map((file: any) => (
          <div>

            <div className="img-content">
              <img src={file.fileUrl} alt={file.fileName} className="maintask-pdf" />
            </div>
            <div className="download-pdf">
              <p className="maintask-6rdHeader">{file.fileName}</p>
              <div className="maintask-7rdHeader">
                <p>
                  {file.fileSize}<span className="dele"></span>{" "}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* <div>
                <div className="img-content">
                  <img src={videoimg} className="maintask-pdf" />
                </div>
                <div className="download-pdf">
                  <p className="maintask-6rdHeader">Redesign Brief 2019.pdf</p>
                  <div className="maintask-7rdHeader">
                    <p className="size-content">
                      159 KB<span className="dele"></span>{" "}
                    </p>
                  </div>
                </div>

        </div> */}
      </div>

      <hr className="hor6" />
      <div className="maintask-4rdHeader">
        <h3>DISCUSSION</h3>
      </div>

      <div className="img-content1">
        <img src={vergo} className="maintask-comment1" />
      </div>
      <div className="maintask-8rdHeader">
        <input
          id="comment"
          type="text"
          name="comment"
          className="maintask-input"
          placeholder="Add a comment…"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>

      {apiSetdata.comments && apiSetdata.comments.slice(0, 2).map((comment: any) => (
        <div>
          <div className="img-content1">
            <img src={mick} className="maintask-comment" />
          </div>
          <div className="maintask-9rdHeader">
            <p className="main4">
              {comment.createdBy.userName},<span className="main41">{comment.createdBy.userRole}</span>
            </p>{" "}
            <p className="main41">{dateFormat(comment.createdAt , "dddd,  h:MM TT")}</p>
          </div>
          <div className="maintask-10rdHeader">
            <p className="main5">
              {comment.content}
            </p>
          </div>
        </div>
      ))}


      {/* <div className="img-content1">
        <img src={terus} className="maintask-comment" />
      </div>
      <div className="maintask-9rdHeader">
        <p className="main4">
          Prescott MacCaffery,<span className="main41">Developer</span>
        </p>{" "}
        <p className="main41">Yesterday at 12:37pm</p>
      </div>
      <div className="maintask-10rdHeader">
        <p className="main5">
          @Helena Software quality assurance activity in which one or several
          humans check a program mainly{" "}
        </p>
      </div> */}
    </div>
  );
};

export default Maintask;
