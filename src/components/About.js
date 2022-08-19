import React from "react";

function About() {
  return (
    <div id="about" className="container flex items-center justify-center mb-5">
      <article className="text-center px-5">
        <h2 className="font-bold text-3xl">About Me</h2>
        <p className="mb-3">
          Experienced Web Developer adept in all stages of advanced web
          development. Knowledgeable in user interface, testing, and debugging
          processes. Bringing forth expertise in design, installation, testing,
          and maintenance of web systems.
        </p>
        <p className="font-bold text-lg mb-3">
          School Name:{" "}
          <span>
            <a href="https://aul.edu.ng/" target="_blank" rel="noreferrer">
              Anchor University, Lagos
            </a>
          </span>
        </p>{" "}
        <p className="font-bold text-lg mb-3">
          Course of Study: <span>Computer Science</span>
        </p>{" "}
        <p className="font-bold text-lg mb-3">
          Date of Study: <span>2016</span>
        </p>
      </article>
    </div>
  );
}

export default About;
