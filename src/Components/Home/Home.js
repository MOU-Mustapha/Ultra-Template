import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="home-information">
          <h2 className="home-title">Muhamed Mustapha</h2>
          <h4 className="home-info">Creative Director</h4>
          <p className="home-desc">
            Iam a professional <span>UX Designer</span> and{" "}
            <span>Front-End Developer</span> creating modern and responsive
            designs to Web and Mobile. Let us work together. Thank you.
          </p>
          <button className="home-btn">Let`s Begin</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
