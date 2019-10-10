import React, { useState, useEffect } from 'react';

import NavigationBar from '../components/NavigationBar.js';
import CollectionView from '../components/CollectionView.js';
import Footer from '../components/Footer.js';

import DividerBubbles from '../images/dividerBubbles.png';
import BubbleBackground from '../images/Experiment1.svg'
import ScheduleGraphic from '../images/ScheduleMiddle.png';
import ScheduleLeft from '../images/ScheduleLeft.png';
import '../styles/styles.less';
import '../styles/ThisYear.less';


// The page describing the event for this year.
export default function ThisYear() {

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return <div className='root'>
        <NavigationBar />

        <div className="pageTitle">
          <h1>This Year</h1>
          <img src={BubbleBackground} alt="" id="bubbleyBackground"/>
        </div>

        <main key='2' className="main">
            <h2>Join us November 2nd, 2019!</h2>
            <p>
              This year, we will once again be at:<br/>
              6 MetroTech Center<br/>
              Brooklyn, NY 11201<br/>
            </p>
            <img tabIndex={-1} src={ScheduleGraphic} id='schedule-image-1'
              alt="Registration is from 11:30am to 12pm. The first round of workshops run from 12 to 1:20pm. There is a lunch break from 1:20 to 1:40pm. The second round of workshops happen afterwards, running until 3pm. After that, the design-a-thon portion of the day begins and attendees spend two hours honing their designs. At five, judging starts. After judging is finished, we award the winners during the closing ceremony. Everything should end around 6pm."
            />

            <img src={DividerBubbles} className="dividerBubble" alt=""/>
            <section>
              <h2>Workshops</h2>
              <p>
                  From learning to code to navigating how to work as a
                  team, sit in on the workshops that interest you and
                  learn something new!
              </p>

              <table id="workshopSessionTable">
                <tr>
                  <th>Session 1 Workshops</th>
                  <th>Session 2 Workshops</th>
                </tr>
                <tr>
                  <td colspan="2" id="twoSessionWorkshop">Discovering Design with Robots!</td>
                </tr>
                <tr>
                  <td>Making Your Design Resonate: Storytelling Great UX Designs</td>
                  <td>We’re all in this together: Getting better at generating and developing ideas as a team</td>
                </tr>
                <tr>
                  <td>Art and Animation with P5.js</td>
                  <td>Problem Solving with Python</td>
                </tr>
                <tr>
                  <td>An Exploration of Machine Learning</td>
                  <td>Editing Video on Mac and Creating Stories with Clips</td>
                </tr>
                <tr>
                  <td>Getting Started with Coding and Sphero Maze Challenge</td>
                  <td></td>
                </tr>
              </table>

              <h3 className="thisYear__h3">We’re all in this together: Getting better at generating and developing ideas as a team</h3>
              <p className="section__leader">
                <i>Kwok Yin Mak and Marco Coppeto from Ueno</i>
              </p>
              <p className="section__description">
                  This workshop will explore several ways for teams to get better at generating and
                  developing design ideas collaboratively, using a general framework for creative
                  teamwork that can be applied to many different scenarios (not just design). The
                  workshop introduces a basic set of principles that teams can use to get better
                  at coming up with ideas, selecting and developing them together.
              </p>

              <h3 className="thisYear__h3">Discovering Design with Robots!</h3>
              <p className="section__leader">
                <i>Parthavi Nerurkar, Sanika Pande, and Neha Sudarshan from siSTEM.io</i>
              </p>
              <p className="section__description">
                  Discover a new tomorrow with robots! Kickstart your journey into the
                  field of robotics by learning the basics of robot building from FTC
                  team siSTEM.io, who has been successfully building competitive robots
                  as well as teaching diverse audiences for the last five years. This
                  workshop will teach you the industrial design approach for robot
                  building which consists of brainstorming the problem, designing,
                  prototyping, building and testing the robot that you built. It’s as
                  close to real-world engineering as you as a student can get. It will
                  be challenging and fun at the same time!
              </p>

              <h3 className="thisYear__h3">Making Your Design Resonate: Storytelling Great UX Designs</h3>
              <p className="section__leader">
                <i>Hyobin Im and Maria Shin from NYU IT STIT</i>
              </p>
              <p className="section__description">
                  Stories excite us. Therefore, storytelling is a crucial skill that
                  designers should develop to make their work resonate for clients and
                  users. The goal of this workshop is to teach students the benefits
                  of storytelling when presenting UX designs and possible approaches to
                  take when pitching or creating case studies. By incorporating case
                  studies such as Find My Club and Print Status, made by students on the
                  NYU Student Technology Innovation Team, this workshop will address how
                  to emphasize UX designs through storytelling.
              </p>

              <h3 className="thisYear__h3">An Exploration of Machine Learning</h3>
              <p className="section__leader">
                <i>Rajat Bapuri, Sean Nordquist, and Andrew Xiao from NYU IT OTSS</i>
              </p>
              <p className="section__description">
                  Get introduced to machine learning and learn about how it affects our
                  everyday lives.
              </p>

              <h3 className="thisYear__h3">Art and Animation with P5.js</h3>
              <p className="section__leader">
                <i>Daniel Fenjves, Taylor Want, and Jeff Olson from Upperline Code</i>
              </p>
              <p className="section__description">
                  p5.js is one of the most powerful and beginner-friendly text-based
                  introductions to code. With it, you can create animations, interactive
                  digital art, and 2D-games that can be run right from your web browser.
                  This workshop will give you the chance to build and play in a language
                  that produces striking visual results in just a few hours even if you’ve
                  never written a line of code before in your life. And if you’ve built
                  some projects before, using Object Orientation to make your code more
                  efficient and readable is a powerful way to kick your projects to the
                  next level.
              </p>

              <h3 className="thisYear__h3">Problem Solving with Python</h3>
              <p className="section__leader">
                <i>Daniel Fenjves, Taylor Want, and Jeff Olson from Upperline Code</i>
              </p>
              <p className="section__description">
                  Python is one of the most readable programming languages, and the
                  robust Python community has built out powerful applications for the
                  language. It’s one of the core languages used at Google, and since
                  it’s both readable and powerful, it can be a great language for both
                  beginner and expert developers. In this workshop, we’ll cover the
                  skills students will need to create a command-line application. Using
                  Python, students will have a chance to build a command-line chatbot, a
                  calculator, a mad-lib, or an adventure game in the style of early
                  classics like Adventure or Oregon Trail.
              </p>

              <h3 className="thisYear__h3">Getting Started with Coding and Sphero Maze Challenge</h3>
              <p className="section__leader">
                <i>Taught by representatives from Apple Inc.</i>
              </p>
              <p className="section__description">
                  Help a Sphero robot navigate obstacles using code in the Sphero
                  Edu app on iPad. Explore block-based coding by programming simple
                  movements, changing colors, and more. Set up obstacles and use
                  iPad to program a path for their robot to navigate. iPad devices
                  will be provided, or bring your own.
              </p>

              <h3 className="thisYear__h3">Editing Video on Mac and Creating Stories with Clips</h3>
              <p className="section__leader">
                <i>Taught by representatives from Apple Inc.</i>
              </p>
              <p className="section__description">
                  Learn how to create visual stories the free Clips app on iPad.
                  You’ll collaborate with others and create a short video to share.
                  Bring your iPad or we’ll provide one.
              </p>
            </section>

            <img src={DividerBubbles} className="dividerBubble" alt=""/>

            <section>
              <h2>Competition Themes</h2>
              <p>
                  While it is not required to adhere to the themes, these are the
                  topics we've decided to focus on for this year:<br/>
                  Environmental impact <br/>
                  Safer society <br/>
                  Connecting outside your school
              </p>
            </section>
        </main>
        <Footer />
    </div>
}
