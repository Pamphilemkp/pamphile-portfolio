/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  FaUser, FaPhone, FaEnvelope, FaLocationArrow,
} from 'react-icons/fa';
import ProgressBar from '@ramonak/react-progress-bar';

function SkillsList() {
  return (
    <div className="Skills-contents">
      <div className="skiils-navbar">
        <img
          src="https://avatars.githubusercontent.com/u/98436409?v=4"
          aria-hidden
          alt="my online profile picture"
          className="home-hide"
        />
        <h2 className="home-hide">
          Pamphile
          {' '}
          <span>MKP</span>
        </h2>
        <p className="home-hide">Full-stack developer</p>
        <div className="skills-icon-container">
          <FaUser />
          <p>Pamphile MKP</p>
        </div>
        <div className="skills-icon-container">
          <FaLocationArrow />
          <a href="https://maps.app.goo.gl/WPWqKBo4etBGG4Wn7?g__st=ic">Yenikent street, Nicosia, North Cyprus</a>
        </div>
        <div className="skills-icon-container">
          <FaPhone />
          <a href="https://wa.me/+905338829657?text=Hello">+905338829657</a>
        </div>
        <div className="skills-icon-container">
          <FaEnvelope />
          <a href="https://wa.me/+905338829657?text=Hello">pamphilemkp@gmail.com</a>
        </div>
        <a href="../assets/mycv.pdf" className="cv-button" download>Dowload CV</a>
      </div>
      <div className="skills-parts">
        <div className="frontend">
          <h3>Frontend</h3>
          <ul>
            <li>
              {' '}
              <div className="code-skill">
                <p>
                  HTML5 -
                  {' '}
                  <span>CSS3</span>
                </p>
                <ProgressBar completed={90} maxCompleted={100} bgColor="rgb(65, 105, 225)" width="100%" height="9px" labelSize="9px" />
              </div>
            </li>
            <li>
              <div className="code-skill">
                <p>JavaScript</p>
                <ProgressBar completed={90} maxCompleted={100} bgColor="rgb(65, 105, 225)" height="9px" labelSize="9px" />
              </div>
            </li>
            <li>
              <div className="code-skill">
                <p>JQuery</p>
                <ProgressBar completed={70} maxCompleted={100} bgColor="rgb(65, 105, 225)" height="9px" labelSize="9px" />
              </div>
            </li>
            <li>
              <div className="code-skill">
                <p>React - Redux</p>
                <ProgressBar completed={90} maxCompleted={100} bgColor="rgb(65, 105, 225)" height="9px" labelSize="9px" />
              </div>
            </li>
          </ul>
        </div>
        <div className="programming-skills">
          <h3>Backend</h3>
          <ul className="backend-list">
            <li>
              <div className="code-skill">
                <p>Ruby</p>
                <ProgressBar completed={90} maxCompleted={100} bgColor="rgb(65, 105, 225)" height="9px" labelSize="9px" />
              </div>

            </li>
            <li>
              <div className="code-skill">
                <p>Rails</p>
                <ProgressBar completed={90} maxCompleted={100} bgColor="rgb(65, 105, 225)" height="9px" labelSize="9px" />
              </div>
            </li>
            <li>
              <div className="code-skill">
                <p>MySQL</p>
                <ProgressBar completed={85} maxCompleted={100} bgColor="rgb(65, 105, 225)" height="9px" labelSize="9px" />
              </div>
            </li>
          </ul>
        </div>

        <div className="programming-skills">
          <h3>WordPress</h3>
          <ul className="backend-list">
            <li>
              <div className="code-skill">
                <p>Project Management</p>
                <ProgressBar completed={90} maxCompleted={100} bgColor="rgb(65, 105, 225)" height="9px" labelSize="9px" />
              </div>

            </li>
          </ul>
        </div>

        <div className="tools-methods-tests">
          <h3>Tools, Tests & Methods</h3>
          <ul className="tool-methos">
            <li>
              <div className="code-skill">
                <p>Jest, Mocha, Capybara</p>
                <ProgressBar completed={90} maxCompleted={100} bgColor="rgb(65, 105, 225)" height="9px" labelSize="9px" />
              </div>
            </li>
            <li>
              <div className="code-skill">
                <p>Git-Github</p>
                <ProgressBar completed={90} maxCompleted={100} bgColor="rgb(65, 105, 225)" height="9px" labelSize="9px" />
              </div>
            </li>
          </ul>
        </div>
        <div className="soft-skils">
          <h3>Professional</h3>
          <ul className="soft-skills-list">
            <li>Remote work</li>
            <li>Pair Programming</li>
            <li>Teamwork</li>
            <li>Mentoring</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SkillsList;
