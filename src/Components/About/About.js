import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="about-info">
          <h2 className="info-title">
            <span>This Is</span> Me
          </h2>
          <h4 className="info-director">Creative Director</h4>
          <p className="info-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est{" "}
            <a href="#">explicabo</a> maxime quibusdam quaerat nihil aliquid
            aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad
            veritatis?
          </p>
          <p className="info-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est
            explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti,
            repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
