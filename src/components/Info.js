import React from "react";
import ProfileImage from "../images/profile.png";

export default function Info() {
  return (
    <nav className="info--top">
      <img
        src={ProfileImage}
        alt="profile image"
        className="info--profile_image"
      ></img>
      <div className="info--container">
        <h2 className="info--name">Laura Smith</h2>
        <h3 className="info--title">Frontend Developer</h3>
        <p className="info--connect">laurasmith.website</p>
        <button className="info--button">Email</button>
      </div>
    </nav>
  );
}
