import React from "react";
import "./Contact.css";
import Footer from "../Footer/Footer";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <h2 className="contact-title">
          <span>Drop</span> Me A Line
        </h2>
        <form>
          <div className="form-input">
            <input type="text" placeholder="Your Name..." />
            <input type="email" placeholder="Your Email..." />
          </div>
          <input
            type="text"
            placeholder="Your Subject..."
            className="subject"
          />
          <textarea
            placeholder="Your Message..."
            cols="30"
            rows="10"
          ></textarea>
          <input type="submit" value="Send Message" />
        </form>
      </div>
      <div>
      <Footer />
      </div>
    </div>
  );
}

export default Contact;
