import React, { useState } from "react";
import "./Maintask.css";
import Avater1 from "./MaintaskImag/Avater1.svg";
import Avater2 from "./MaintaskImag/Avater2.svg";
import pdf from "./MaintaskImag/pdf.svg";
import videoimg from "./MaintaskImag/videoimg.svg";
import mick from "./MaintaskImag/mick.svg";
import terus from "./MaintaskImag/terus.svg";
import vergo from "./MaintaskImag/vergo.svg";

const Maintask = ({ apiSetdata }: any) => {
  console.log(apiSetdata);
  return (
    <div className="maintask-content">
      <div className="maintask-header">
        <h3>{apiSetdata.title}</h3>
      </div>

      <div className="maintask-header2">
        <p>Added by Kristin A. yesterday at 12:41pm</p>
      </div>

      <div className="maintask-2ndHeader">
        <h4>ASIGN TO</h4>
        <h4>DUE ON</h4>
        <h4>TAG</h4>
        <h4>FOLLOWERS</h4>
      </div>
      <div className="maintask-3rdHeader">
        <div className="content55">
          <img src={Avater1} className="maintask-avarter" />
          <h4 className="m3rdHeader0">{apiSetdata.AssaignedUserName}</h4>
        </div>
        <h4 className="m3rdHeader1">Tues, Dec 25</h4>
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
        <p>{apiSetdata.description}</p>
      </div>

      <div className="flex-div">
        <div className="img-content">
          <img src={pdf} className="maintask-pdf" />
        </div>
        <div className="download-pdf">
          <p className="maintask-6rdHeader">Redesign Brief 2019.pdf</p>
          <div className="maintask-7rdHeader">
            <p>
              159 KB<span className="dele">Delete</span>{" "}
            </p>
          </div>
        </div>

        <div className="img-content">
          <img src={videoimg} className="maintask-pdf" />
        </div>
        <div className="download-pdf">
          <p className="maintask-6rdHeader">Redesign Brief 2019.pdf</p>
          <div className="maintask-7rdHeader">
            <p className="size-content">
              159 KB<span className="dele">Delete</span>{" "}
            </p>
          </div>
        </div>
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
          id="email"
          type="name"
          name="email"
          className="maintask-input"
          placeholder="Add a comment…"
        />
      </div>
      <div className="img-content1">
        <img src={mick} className="maintask-comment" />
      </div>
      <div className="maintask-9rdHeader">
        <p className="main4">
          Helena Brauer,<span className="main41">Designer</span>
        </p>{" "}
        <p className="main41">Yesterday at 12:37pm</p>
      </div>
      <div className="maintask-10rdHeader">
        <p className="main5">
          During a project build, it is necessary to evaluate the product design
          and development against project requirements and outcomes
        </p>
      </div>
      <div className="img-content1">
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
      </div>
    </div>
  );
};

export default Maintask;
