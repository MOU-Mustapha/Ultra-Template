import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-skills">
      <div className="container-pro">
        <div className="profile">
          <h2 className="profile-title">
            <span>My</span> Profile
          </h2>
          <ul className="profile-list">
            <li className="profile-item">
              <span>Name</span> Muhamed Mustapha
            </li>
            <li className="profile-item">
              <span>Birthday</span> 18/01/1996
            </li>
            <li className="profile-item">
              <span>Adress</span> Cairo, Hadaek El Koba
            </li>
            <li className="profile-item">
              <span>Phone</span> +201128694149
            </li>
            <li className="profile-item">
              <span>Email</span> muhamedmustapha90@gmail.com
            </li>
            <li className="profile-item">
              <span>Website</span>{" "}
              <a href="http://www.google.com" className="web">
                www.google.com
              </a>
            </li>
          </ul>
        </div>
        <div className="skills">
          <h2 className="skills-title">
            <span>Some</span> Skills
          </h2>
          <p className="skills-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            praesentium blanditiis esse cupiditate, omnis similique.
          </p>
          <div className="skill">
            <div className="group">
              <span className="title">Bootstrap</span>
              <span className="perc1">100%</span>
            </div>
            <div className="parent">
              <span className="sp1"></span>
            </div>
          </div>
          <div className="skill">
            <div className="group">
              <span className="title">CSS</span>
              <span className="perc2">90%</span>
            </div>
            <div className="parent">
              <span className="sp2"></span>
            </div>
          </div>
          <div className="skill">
            <div className="group">
              <span className="title">Javascript</span>
              <span className="perc3">80%</span>
            </div>
            <div className="parent">
              <span className="sp3"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
