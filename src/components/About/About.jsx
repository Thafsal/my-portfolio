import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../photos/thafsal-ab.png";
import "./About.css";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="logo" />
          </div>
        </div>
      
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>2+ Years Working</small>
          </article>
          <article className="about__card">
            <FiUsers className="about__icon" />
            <h5>Clients</h5>
            <small>2+ World Wide</small>
          </article>
          <article className="about__card">
            <VscFolderLibrary className="about__icon" />
            <h5>Projects</h5>
            <small>10+ Completed</small>
          </article>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          soluta accusantium, molestias pariatur dolorum cum voluptas? Est
          maiores, iure, perferendis assumenda itaque voluptatum earum dolorem
          ducimus accusantium magni numquam quis.
        </p>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
      </div>
    </section>
  );
};

export default About;
