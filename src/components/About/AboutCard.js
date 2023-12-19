import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ fontSize: "1.25rem", textAlign: "justify" }}>
            Hey Everyone, I'm <span className="purple">Trevor Pratt</span> from <span className="purple">Austin, Texas</span>.
            <br></br>
            <br /> I am a <span className="purple">Full Stack Developer</span> with a background in <span className="purple">semiconductor manufacturing</span> and a graduate of the <span className="purple">MERN Full Stack Bootcamp at UT Austin</span>. My passion lies in using my technical skills to develop innovative, user-centric web applications.
            <br /> <br></br>
            I am proficient in <span className="purple">JavaScript (ES6+), TypeScript, Angular, and React</span>, and have a strong foundation in <span className="purple">MongoDB, Express.js, React, and Node.js</span>. I love tackling complex problems and am always eager to embrace new challenges and technologies.
            <br /><br></br>
            In my professional career, I have been recognized for my <span className="purple">strong work ethic</span>, <span className="purple">dedication to quality</span>, and my ability to <span className="purple">optimize and automate processes</span>.
            <br /><br /><br></br>
            Apart from coding, here are some other activities that I love to do:
          </p>
          <br></br>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Engaging in<span className="purple"> Outdoor </span>Activities
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Exploring </span>New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in<span className="purple"> Tech </span>Meetups
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Reading </span>Technical Books
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
