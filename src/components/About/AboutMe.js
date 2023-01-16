/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  FaGithub, FaTwitter, FaLinkedin, FaMedium, FaAngellist,
} from 'react-icons/fa';

function AboutMe() {
  return (

    <div className="let-connect">
      <h2 className="coonect-title">Let's connect</h2>
      <ul className="media-icons">
        <li>
          <a href="https://twitter.com/PamphileMusonda">
            <FaTwitter />
          </a>
        </li>

        <li>
          <a href="https://linkedin.com/in/PamphileMusonda">
            <FaLinkedin />
          </a>
        </li>

        <li>
          <a href="https://medium.com/@pamphilemkp">
            <FaMedium />
          </a>
        </li>

        <li>
          <a href="https://github.com/pamphilemkp">
            <FaGithub />
          </a>
        </li>

        <li>
          <a href="https://angel.co/u/pamphile-musonda">
            <FaAngellist />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default AboutMe;
