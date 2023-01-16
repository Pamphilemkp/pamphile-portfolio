import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>
        I’m Pamphile MKP
        {' '}
        <br />
        Glad to see you here!
      </h1>
      <p>
        I’m a full-stack software developer! I can help you build a product ,
        feature or website Look through
        some of my work and experience! If you like what you see and have a project you need coded,
        don’t hestiate to contact me.
      </p>
      <Link to="/Contacts">Get in Touch</Link>
    </div>
  );
}

export default Home;
