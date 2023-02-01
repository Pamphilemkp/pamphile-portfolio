/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-contents">
      <p className="first-paragrapgh">
        Hi
        {' '}
        <span>👋</span>
      </p>
      <h1 className="title">
        I’m Pamphile
        {' '}
        <span className="mkp-span"> MKP</span>
        {' '}
        <br />
        Glad to see you here!
      </h1>
      <p className="paragraph">
        I’m a full-stack software developer! I can help you build a product ,
        feature or website Look through
        some of my work and experience! If you like what you see and have a project you need coded,
        don’t hestiate to contact me.
      </p>
      <Link to="/Contacts" className="get-in-touch">Get in Touch</Link>
    </div>
  );
}

export default Home;
