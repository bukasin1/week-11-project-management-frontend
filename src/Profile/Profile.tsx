import React, { useState, useEffect } from "react";
import fine from "./Profile Image/fine.jpg";
import "./Profile.css";
import axios from "axios";

export default function Profile() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("")
  const [gender, setGender] = useState("")
  const [location, setLocation] = useState("")
  const [about, setAbout] = useState("")
  const [avatar, setAvatar] = useState("")


  const token = localStorage.getItem("token") as string;
  useEffect(() => {
    axios
      .request({
        url: "https://jaraaa.herokuapp.com/profile",
        method: "get",
        headers: { authorization: token },
        withCredentials: true,
      })
      .then((res: any) => {
        console.log(res.data);
        setName(`${res.data.user.firstname} ${res.data.user.lastname}`);
        setRole(`${res.data.user.role}`);
        setGender(`${res.data.user.gender}`)
        setLocation(`${res.data.user.location}`)
        setAbout(`${res.data.user.about}`)
        setAvatar(`${res.data.user.avatar}`)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  return (
    <div className="profile-container">
      <div className="profile-imgwrap">
        <img src={avatar}></img>
      </div>

      <div className="small-container">
        <div>
          Name
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="profile-input"
          />
        </div>
        <div>
          Role
          <input value = {role}
          onChange = {(e) => setRole(e.target.value)}
          type="text" className="profile-input" />
        </div>
        <div>
          Gender
          <input value = {gender}
            onChange = {(e) => setGender(e.target.value)}
          type="text" className="profile-input" />
        </div>

        <div>
          Location
          <input value = {location}
            onChange = {(e) => setLocation(e.target.value)}
          type="text" className="profile-input" />
        </div>
        <div>
          Teams
          <div>
            <div className="profile-div">
              <div className="teams">Design</div>
            </div>
          </div>
        </div>
        <div>
          About
          <textarea value = {about}
          onChange = {(e) => setAbout(e.target.value)}
          cols={100} rows={10} className="profile-about" />
        </div>

        <button className="profile-button">
          Update Profile
        </button>
        <div className="cancel">
          <div className="profile-cancel">cancel</div>
        </div>
      </div>
    </div>
  );
}
