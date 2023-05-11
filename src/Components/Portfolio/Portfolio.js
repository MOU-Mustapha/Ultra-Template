import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Portfolio.css";

function Portfolio() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get("/js/data.json").then((res) => {
      setImages(res.data.portfolio);
    });
  }, []);
  const portfolioDisplay = images.map((img) => {
    return (
      <div className="box" key={img.id}>
        <img src={img.image} alt="" />
        <p className="overlay">
          <span>Show Image</span>
        </p>
      </div>
    );
  });
  return (
    <div className="portfolio">
      <h2 className="portfolio-title">
        <span>My</span> Portfolio
      </h2>
      <ul className="portfolio-list">
        <li className="portfolio-item active">All</li>
        <li className="portfolio-item">HTML</li>
        <li className="portfolio-item">Photoshop</li>
        <li className="portfolio-item">Wordpress</li>
        <li className="portfolio-item">Mobile</li>
      </ul>
      <div className="box-container">{portfolioDisplay}</div>
    </div>
  );
}

export default Portfolio;
