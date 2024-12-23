import React from 'react';
import avatar from '../assets/avatar.jpg'; // Add your avatar image here

const AboutMe = () => {
  return (
    <div>
      <h2>About Me</h2>
      <img src={avatar} alt="Developer Avatar" className="avatar" />
      <p>
        I'm a passionate web developer with experience in building web applications
        using modern JavaScript frameworks and technologies. I specialize in front-end
        development but have experience in full-stack development as well.
      </p>
    </div>
  );
};

export default AboutMe;
