import React, { useState, useEffect } from 'react';

import NavigationBar from '../components/NavigationBar.js';
import Footer from '../components/Footer.js';
import '../styles/styles.less';
import '../styles/Home.less';
import DividerBubbles from '../images/dividerBubbles.png';
import ScribbleLogo from '../images/ScribbleLogo.svg';
import BubbleBackground from '../images/Experiment1.svg'
import GroupPhoto from '../images/2019/IMG_5929.jpg';
import WorkshopPhoto from '../images/2019/IMG_1616.jpg';


// The about page.
export default function Home() {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return <div className="root">
        <NavigationBar />

        <div className="pageTitle">
          <img className='logo' src={ScribbleLogo}
              alt='Scribble NYC Logo'/>
          <img src={BubbleBackground} alt="" id="bubbleyBackground"/>
        </div>

        <main key='3' className="home main" id="main">
          <section>
            <h1 className="scribbleDescription">
              Design forum & design-a-thon
              <br/>
              for middle school and high school students
            </h1>
          </section>

          <img src={DividerBubbles} className="dividerBubble" alt=""/>

          <section>
            <h2>Scribble 2019 was a blast!</h2>

            <div className="infoPiece">
              <p className="numberFont" id="attendees">52<br/>attendees</p>
              <p className="numberFont" id="schools">11<br/>schools</p>
            </div>
            <img src={GroupPhoto} alt="" className="photo"/>

            <p className="numberFont" id="workshops">8 workshops</p>
            <ul className="workshopList">
                <li>Discovering Design with Robots!</li>
                <li>Making Your Design Resonate: Storytelling Great UX Designs</li>
                <li>We’re all in this together: Getting better at generating and developing ideas as a team</li>
                <li>Art and Animation with P5.js</li>
                <li>Problem Solving with Python</li>
                <li>An Exploration of Machine Learning</li>
                <li>Editing Video on Mac and Creating Stories with Clips</li>
                <li>Getting Started with Coding and Sphero Maze Challenge</li>
            </ul>
            <img src={WorkshopPhoto} alt="" className="photo"/>
            <a className="photoLink" target="_blank" href="https://drive.google.com/drive/folders/1EvHFxJZkIyxBL2gRCwe9kELlBEW2HFFR?usp=sharing">
              More photos from 2019's event
            </a>
          </section>

          <img src={DividerBubbles} className="dividerBubble" alt=""/>
          <h2>
            Thanks for attending Scribble.
            <br/>
            Stay tuned for 2020!
          </h2>

        </main>
      <Footer />
    </div>
}
