import React, { useState, useEffect } from 'react';

import NavigationBar from '../components/NavigationBar.js';
import CollectionView from '../components/CollectionView.js';
import Footer from '../components/Footer.js';

import Image1 from '../images/LastYear/Image3.JPG';
import Image2 from '../images/LastYear/Image2.JPG';
import Image3 from '../images/LastYear/Image1.JPG';
import Image4 from '../images/LastYear/Image4.JPG';
import Image5 from '../images/LastYear/Image5.JPG';
import Image6 from '../images/LastYear/Image6.JPG';
import Image7 from '../images/LastYear/Image7.JPG';
import Image8 from '../images/LastYear/Image8.JPG';
import Image9 from '../images/LastYear/Image9.JPG';
import Image10 from '../images/LastYear/Image10.JPG';
import DividerBubbles from '../images/dividerBubbles.png';
import '../styles/styles.less';
import '../styles/LastYear.less';
import BubbleBackground from '../images/Experiment1.svg'


// The page describing the event for this year.
export default function ThisYear() {

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return <div className='root'>
        <NavigationBar />

        <div className="pageTitle">
          <h1>Last Year</h1>
          <img src={BubbleBackground} alt="" id="bubbleyBackground"/>
        </div>

        <main key='2' className="main" tabIndex={1}>
            <h2>64 attendees, 8 workshops, one design-a-thon</h2>
            <p>
                Middle school and high school students from all over
                New York came last year, on October 14th, to learn about
                product design. They participated in workshops and then
                applied their new knowledge to compete in a design-a-thon,
                where the winners were chosen based on creativity,
                originality, and positive impact on their school.
            </p>

            <h2>Workshops</h2>
                <p>
                Teams started the day by participating in a series
                of workshops where they learned how to articulate
                a project concept, design a solution based program,
                and develop a system prototype.
                <br/>
                <br/>
                Workshops provided:
            </p>

            <ul className="workshopList">
                <li>Making the Most of Slack in Product Development</li>
                <li>Designer-Developer Collaboration</li>
                <li>Art + Code with p5</li>
                <li>How to Earn a Seat on a Rocketship</li>
                <li>Editing Video on Mac and Video Stories with Clips</li>
                <li>Basic 2D Character Assembly for Animations</li>
                <li>Virtual Reality</li>
                <li>Getting Started with Coding and Sphero Maze Challenge</li>
            </ul>

            <div tabIndex={-1} aria-hidden='true' className='imageGroup'>
                <img loading='lazy' src={Image1} alt='First image from Scribble 2018' className='previewImage'/>
                <img loading='lazy' src={Image2} alt='Second image from Scribble 2018'className='previewImage'/>
                <img loading='lazy' src={Image3} alt='Third image from Scribble 2018'className='previewImage' id="middleImage"/>
                <img loading='lazy' src={Image4} alt='Fourth image from Scribble 2018'className='previewImage'/>
                <img loading='lazy' src={Image9} alt='Fifth image from Scribble 2018'className='previewImage'/>
            </div>

            <img src={DividerBubbles} className="dividerBubble" alt=""/>

            <h2>The Competition</h2>
            <p>
                After participating in these workshops, students formed
                teams and participated in a design-a-thon competition!
                Each group presented their work to a panel of
                judges, which included representatives from NYU, local
                schools, and the tech community.
            </p>

            <section id="grandPrizeWinners">
              <h2>Grand Prize Winners</h2>
              <p>
                  <b>The Marymount School of New York</b>
                  <br/>
                  Using sound and a warning light, Tipper Stopper aims to
                  keep students safe by alerting them and their teacher
                  when they tip in their chair.
              </p>
              <img aria-hidden='true' loading='lazy' src={Image8} alt='Grand Prize Winner image'/>
              <br/><br/><br/>
            </section>

            <img src={DividerBubbles} className="dividerBubble" alt=""/>

            <section id="moreWinners">
            <h2 className="moreMargin">More Winners</h2>
            <p>
                <b>Middle School 217</b>
                <br/>
                An online peer support network that brings together
                students and school to support academics and provide
                mental health services.
            </p>
            <img tabIndex={-1} aria-hidden='true' loading='lazy' src={Image7} alt='Another winner from Scribble 2018'/>

            <p>
                <b>Thomas A. Edison High School</b>
                <br/>
                An application centered around student life that allows
                students to communicate with teachers, connect to their peers,
                and streamlines academic planning.
            </p>
            <img tabIndex={-1} aria-hidden='true' loading='lazy' src={Image6} alt='Another winner from Scribble 2018'/>

            <p>
                <b>Brooklyn Emerging Leaders Academy Charter High School</b>
                <br/>
                A school application that allows students to chat,
                receive important reminders about tests and quizzes,
                and connect to their classes. It also allows parents
                to receive alerts and school updates.
            </p>
            <img tabIndex={-1} aria-hidden='true' loading='lazy' src={Image5} alt='Another winner from Scribble 2018'/>
            </section>

            <img src={DividerBubbles} className="dividerBubble" alt=""/>
            <a id="comeAgain" href='/thisyear'>Click to join us again this year on November 2nd, 2019!</a>
            <img id="groupPicture" tabIndex={-1} aria-hidden='true' loading='lazy' src={Image10}
                alt='Promotional Image'/>
        </main>
        <Footer />
    </div>
}
