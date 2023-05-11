import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SocialMedia.css";

function SocialMedia() {
  const [social, setSocial] = useState([]);
  useEffect(() => {
    axios.get("/js/data.json").then((res) => {
      setSocial(res.data.social);
    });
  }, []);
  const socialDisplay = social.map((item) => {
    return (
      <div className={item.class} key={item.id}>
        <i className={item.icon}></i>
        <div>
          <p className="info1">{item.title}</p>
          <p className="info2">{item.body}</p>
        </div>
      </div>
    );
  });
  return <div className="social-media">{socialDisplay}</div>;
}

export default SocialMedia;
