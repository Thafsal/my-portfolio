import React from "react";
import IMG1 from "../../photos/IMG1.jpg";
import IMG2 from "../../photos/IMG2.jpg";
import IMG4 from "../../photos/IMG4.jpg";
import IMG3 from "../../photos/IMG3.jpg";
import IMG5 from "../../photos/IMG5.jpg";
import IMG6 from "../../photos/IMG6.jpg";
import "./Portfolio.css";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Landing Page Using HTML & Bootstrap",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19734333-Real-Estate-Landing-Page",
  },
  {
    id: 2,
    image: IMG2,
    title: "Landing Page Using HTML & Bootstrap",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19724306-Stellar-Quest",
  },
  {
    id: 3,
    image: IMG3,
    title: "Landing Page Using HTML & Bootstrap",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19733837-Kyezo-Finance-Website-Landing-Page",
  },
  {
    id: 4,
    image: IMG4,
    title: "Landing Page Using HTML & Bootstrap",
    github: "https://github.com",
    demo: "https://cdn.dribbble.com/userupload/3875482/file/original-dd253faa9ab0b1f696f989ecb15d9e82.png?compress=1&resize=752x",
  },
  {
    id: 5,
    image: IMG5,
    title: "Landing Page Using HTML & Bootstrap",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19734192-Saas-Unity-Landing-Page",
  },
  {
    id: 6,
    image: IMG6,
    title: "Landing Page Using HTML & Bootstrap",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19731322-Tarocchi-Toast-Mocktober",
  },
];

const Portfolio = () => {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="__blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="__blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
