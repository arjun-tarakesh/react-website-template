import React from 'react';
import { Container, Progress } from 'reactstrap';
import "./skills.css"

const Skills = (props) => {
  return (
    <div className="skills" id="skills">
        <h1>Skills - using reactstrap progress bars</h1>
        <p>change value below</p>
    <Container >
      <div className="text-center">0%</div>
      <Progress className="padding"/>
      <div className="text-center">25%</div>
      <Progress className="padding" value="25" />
      <div className="text-center">50%</div>
      <Progress className="padding" value={50} />
      <div className="text-center">75%</div>
      <Progress className="padding" value={78}  />
      <div className="text-center">100%</div>
      <Progress className="padding" value="100" />
      
      
      </Container>
    </div>
  );
};

export default Skills;