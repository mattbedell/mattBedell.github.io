import React from 'react'
import './About.css'

const About = (props) => (
  <div className="container">
    <div className="main">
      <div className="header">
        <div className="headshot"></div>
        <div className="headline">
          <h3>I'm a learner that is also a developer</h3>
        </div>
        <div className="linkBar">
          <a href="https://github.com/mattBedell?tab=stars" target="_blank">Github</a>
          <a href="https://www.linkedin.com/in/matthewbedell" target="_blank">LinkedIn</a>
          <a href="https://twitter.com/mj_Bedell" target="_blank">Twitter</a>
        </div>
      </div>
      <div className="content">
        I'm a developer based in NYC. I have experience building full-stack web apps,
        responsive, mobile friendly websites, and I love to code.
        <br />
        <br />
        I have the most fun when I'm solving problems with code. I like to build
        backend servers with Node, and am proficient with postgreSQL, and MongoDB.
        <br />
        <br />
        I've recently rediscovered my love for the frontend
        with the help of React. I'm also proficient with HTML5 and CSS.
        <br />
        <br />
        Check out my most recent app: Asteroid-Tracker
      </div>
      <div className="skills">
        <div className="skillBox">React.js</div>
        <div className="skillBox">Node.js</div>
        <div className="skillBox">Express.js</div>
        <div className="skillBox">PostgreSQL</div>
        <div className="skillBox">Javascript</div>
        <div className="skillBox">jQuery</div>
        <div className="skillBox">GIT</div>
        <div className="skillBox">HTML5</div>
        <div className="skillBox">CSS</div>
      </div>
    </div>
    <div className="aside">
      <a className="twitter-timeline" data-width="200" data-height="400" data-dnt="true" href="https://twitter.com/mj_Bedell">Tweets by mj_Bedell</a>
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    </div>
  </div>
)


export default About
