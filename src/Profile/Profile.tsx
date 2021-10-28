import React, { useState, useEffect } from "react";
import fine from "./Profile Image/fine.jpg";
import "./Profile.css";
import axios from "axios";
export default function Profile() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [profileImage, setProfileImage] = useState<File>();
  const [profileImgUrl, setProfileImgUrl] = useState("");
  const [about, setAbout] = useState("");
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState("");
  const [file, setFile] = useState("");
  const [update, setUpdate] = useState("");
  const [message, setMessage] = useState("");
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
        setGender(`${res.data.user.gender}`);
        setLocation(`${res.data.user.location}`);
        setAbout(`${res.data.user.about}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);
  const cancelAll = () => {
    setName("");
    setRole("");
    setGender("");
    setLocation("");
    setAbout("");
    //i don't know if the teams should also be cancelled
  };
  const leaveTeamFunc = () => {
    //this should prompt the leave-team end-point
  };
  const submitHandler = (e: any) => {
     e.preventDefault();
     //setLoading(true);
    //this should prompt the update-[profile end-point
    const nameSplit= name.split(' ')
    const value = {firstname: nameSplit[0], lastname:nameSplit[1], gender:gender, role: role, location: location, about: about}
    console.log(value)
    axios
      .request({
        url: "https://jaraaa.herokuapp.com/profile/edit",
        method: "put",
        data: value,
        headers: { authorization: token },
        withCredentials: true,
      })
      .then((res: any) => {
        setUpdate(res.data.user);
        setFailed("Updated successfully");
        setMessage("Profile Updated successfully")
        console.log(res.data);
      })
      .catch((err) => {
        setFailed(err);
        setMessage(err)
        console.log(err);
      });
  };
  // function sampleHandle(e: ChangeEvent<HTMLInputElement>){
  //     setProfileImage( e.target.files![0])
  // }
  const changePicFile = (e: any) => {
    // e.preventDefault() ///to allow the reload of the page when the pic is changed
    const formData = new FormData();
    formData.append("file", profileImage as File);
    axios
      .request({
        url: "https://jaraaa.herokuapp.com/profile",
        method: "post",
        data: formData,
        headers: { authorization: token! },
      })
      .then((res: any) => {
        setLoading(false);
        setFailed("Updated successfully");
        setMessage("Profile Updated successfully")
        console.log("Change PicFile says: ", res);
        setProfileImgUrl(res.data.user.profileImage);
      })
      .catch((err) => {
        setFailed(err.response.data.messsage);
        console.log(err.response);
      });
  };
  return (
    <form onSubmit={submitHandler} className="profile-container">
      <div className="profile-imgwrap">
        <img className="profile-img" src={fine}></img>
      </div>
      <div className="small-container">
        <div className="input-content">
          Name
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="profile-input"
          />
        </div>
        <div className="input-content">
          Role
          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            type="text"
            className="profile-input"
          />
        </div>
        <div className="input-content">
          Gender
          <select onChange={(e) => setGender(e.target.value)} className="profile-input" name="" id="">
            <option value={gender}>{gender}</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          {/* <input
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            type="text"
            className="profile-input"
          /> */}
        </div>
        <div className="input-content">
          Location
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            className="profile-input"
          />
        </div>
        {/* <div>
          Teams
          <div>
            <div className="profile-div">
              <div className="teams">Design</div>
            </div>
          </div>
        </div> */}
        <div className="input-content">
          About
          <textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            cols={100}
            rows={10}
            className="profile-about"
          />
        </div>
        <p className="profile-meassage">{message}</p>
        <button
          onClick={submitHandler}
          className="profile-button"
          disabled={loading}
          type="submit"
        >
          Update Profile
        </button>
        <div className="cancel">
          <div className="profile-cancel">cancel</div>
        </div>
      </div>
    </form>
  );
}