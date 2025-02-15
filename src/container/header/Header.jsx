import React from "react";
import "./header.css";
import people from "../../assets/people.png"
import illustration from "../../assets/Illustration.png"
const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let's Build Something amazing With GPT-3 OPen AI</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
      <div  className="gpt3__header-content-input">
      <input type="email" placeholder="Your Email Address"/>
      <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content-signup">
        <img src={people} alt="people" />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
      </div>
      <div className="gpt3__header-illustration">
        <img src={illustration} alt="header-image" />
      </div>
    </div>
  );
};

export default Header;
