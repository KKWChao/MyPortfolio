import React from "react";
import { Jumbopart } from '../About'

export const Resume = () => (
  
  <section className="m-2 p-2 d-flex flex-column min-vh-100">
    { Jumbopart() }
    
    <h3 className="">Resume</h3>
    <div className="d-flex justify-content-around">
      <div className="resumeBullet">
        <h4>Front End Proficiencies</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Bootstrap</li>
        </ul>
      </div>

      <div>
        <h4>Back End Proficiencies</h4>
        <ul>
          <li>SQL</li>
          <li>NoSQL</li>
          <li>APIs</li>
          <li>GraphQL</li>
          <li>React</li>
          <li>PWAs</li>
        </ul>
      </div>
    </div>

    <div className="text-center">
      <h5>Education</h5>
      <div>
        <p><strong>University of California, Berkeley</strong> - Coding Bootcamp - July 2022</p> 
        <p><strong>University of California, Davis</strong> - B.Sc Statistics/Economics</p>
      </div>
    </div>
  </section>
)