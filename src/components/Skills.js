import React from "react";

function Skills() {
  return (
    <div id="skills" className="container flex items-center justify-center">
      <article className="text-center px-5">
        <h2 className="font-bold text-3xl mb-3">Skills & Experience</h2>
        <p className="font-bold text-lg mb-3">
          Company Name:{" "}
          <span>
            <a href="https://makinsight.com/" target="_blank" rel="noreferrer">
              Makinsight
            </a>
          </span>
        </p>{" "}
        <p className="font-bold text-lg mb-3">
          Position Title: <span>Full Stack Developer</span>
        </p>{" "}
        <p className="font-bold text-lg mb-3">
          <span>2021 - Present</span>
        </p>
      </article>
    </div>
  );
}

export default Skills;
