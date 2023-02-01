/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  FaGithub, FaTwitter, FaLinkedin, FaMedium, FaAngellist, FaWhatsapp,
} from 'react-icons/fa';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function AboutMe() {
  return (
    <div className="about-contents">
      <div className="let-connect">
        <img
          src="https://avatars.githubusercontent.com/u/98436409?v=4"
          aria-hidden
          alt="my online profile picture"
        />
        <p>
          My name is Pamphile Musonda, i am a full-stack web developer,
          i play chess in my spare time, like working out and reading books.
          in love with boxing that i started since i was 14.
          and I'm very passionate and dedicated to my work.
          finally i like travelling as a hobby and seekeng for
          new interesting opportuities.
        </p>
      </div>
      <div className="languages">
        <h2>Spoken languages</h2>
        <u className="languages-spoken-list">
          <li>
            <div style={{ width: 100, height: 100 }}>
              <CircularProgressbar value={90} text={`${90}%`} />
            </div>
            <span>English</span>
          </li>
          <li>
            <div style={{ width: 100, height: 100 }}>
              <CircularProgressbar value={95} text={`${95}%`} />
            </div>
            <span>French</span>
          </li>
          <li>
            <div style={{ width: 100, height: 100 }}>
              <CircularProgressbar value={30} text={`${30}%`} />
            </div>
            <span>Turkish</span>
          </li>
          <li>
            <div style={{ width: 100, height: 100 }}>
              <CircularProgressbar value={85} text={`${85}%`} />
            </div>
            <span>Swahili</span>
          </li>
        </u>
      </div>
      <p className="paragrapgh">
        Want to reach out to me? My inbox is always open.
        I'm currently working on an exciting project which I will be announcing soon.If you have a
        question or just want to say hello I'll try my best to get
        back to you! asdfadsfadsfa
      </p>
      <div className="connect">
        <h2 className="connect-title">Let's connect</h2>
        <ul className="media-icons">
          <li>
            <a href="https://twitter.com/PamphileMusonda">
              <FaTwitter className="twitter" />
            </a>
          </li>

          <li>
            <a href="https://linkedin.com/in/pamphile-musonda">
              <FaLinkedin className="linkedin" />
            </a>
          </li>
          <li>
            <a href="https://wa.me/+905338829657?text=Hello">
              <FaWhatsapp className="whatsapp" />
            </a>
          </li>

          <li>
            <a href="https://medium.com/@pamphilemkp">
              <FaMedium className="medium" />
            </a>
          </li>

          <li>
            <a href="https://github.com/pamphilemkp">
              <FaGithub className="github" />
            </a>
          </li>

          <li>
            <a href="https://angel.co/u/pamphile-musonda">
              <FaAngellist className="angelist" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
