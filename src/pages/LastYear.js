import React, { useState, useEffect } from 'react';

import NavigationBar from '../components/NavigationBar.js';
import CollectionView from '../components/CollectionView.js';
import Footer from '../components/Footer.js';

import DividerBubbles from '../images/dividerBubbles.png';
import '../styles/styles.less';
import '../styles/LastYear.less';
import BubbleBackground from '../images/Experiment1.svg';
import Carousel from 'react-bootstrap/Carousel';

import BELA from '../images/2018/Image5.JPG';
import ThomasAEdisonHS from '../images/2018/Image6.JPG';
import MS217 from '../images/2018/Image7.JPG';
import Marymount from '../images/2018/Image8.JPG';
import GroupPhoto from '../images/2018/Image10.JPG';

import OverallBest2019 from '../images/2019/PeerPrep_Overall.JPG';
import Safety2019 from '../images/2019/EpicSheep_SaferSociety.jpg';
import Connection2019 from '../images/2019/Kindlee_Connection.jpg';
import Environment2019 from '../images/2019/Gottem_Environment.jpg';

// The page describing the event for this year.
export default function ThisYear() {

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return <div className='root'>
        <NavigationBar />

        <div className="pageTitle">
          <h1 id="main">Last Year</h1>
          <img src={BubbleBackground} alt="" id="bubbleyBackground"/>
        </div>

        <main key='2' className="main">

          <section className="carouselSection">
            <h2 className="yearHeader">2019</h2>
            <Carousel>
              <Carousel.Item>
                <img
                  class="resizeImage"
                  src={OverallBest2019}
                  alt="Overall best idea for 2019: Team PeerPrep"
                />
                <Carousel.Caption>
                  <h3 className="backgroundColor">PeerPrep from MS217</h3>
                  <p className="backgroundColor">Best idea overall</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  class="resizeImage"
                  src={Safety2019}
                  alt="Best idea for creating a safer society: Team Epic Sheep"
                />
                <Carousel.Caption>
                  <h3 className="backgroundColor">Team Epic Sheep</h3>
                  <p className="backgroundColor">Best idea for creating a safer society</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  class="resizeImage"
                  src={Connection2019}
                  alt="Best idea for forming connections outside of school: Team Kindlee"
                />
                <Carousel.Caption>
                  <h3 className="backgroundColor">Team Kindlee</h3>
                  <p className="backgroundColor">Best idea for forming connections outside of school</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  class="resizeImage"
                  src={Environment2019}
                  alt="Best idea for helping the environment: Team Gottem"
                />
                <Carousel.Caption>
                  <h3 className="backgroundColor">Team Gottem</h3>
                  <p className="backgroundColor">Best idea for helping the environment</p>
                </Carousel.Caption>
              </Carousel.Item>

            </Carousel>
          </section>

          <img src={DividerBubbles} className="dividerBubble" alt=""/>

          <section className="carouselSection">
            <h2 className="yearHeader">2018</h2>
            <Carousel>

              <Carousel.Item>
                <img
                  src={Marymount}
                  alt="Group Photo"
                />
                <Carousel.Caption>
                  <h3 className="backgroundColor">Grand Prize Winners</h3>
                  <p className="backgroundColor">A team from Marymount School of New York created Tipper Stopper, a device to keep students safe by alerting them and their teacher when they tip in their chairs.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  src={BELA}
                  alt="Group Photo"
                />
                <Carousel.Caption>
                  <h3 className="backgroundColor">Brooklyn Emerging Leaders Academy Charter High School</h3>
                  <p className="backgroundColor">A school application that allows students to chat, receive important reminders about tests and quizzes, and connect to their classes. It also allows parents to receive alerts and school updates.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  src={ThomasAEdisonHS}
                  alt="Group Photo"
                />
                <Carousel.Caption>
                  <h3 className="backgroundColor">Thomas A. Edison High School</h3>
                  <p className="backgroundColor">An application centered around student life that allows students to communicate with teachers, connect to their peers, and streamlines academic planning.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  src={MS217}
                  alt="Group Photo"
                />
                <Carousel.Caption>
                  <h3 className="backgroundColor">Middle School 217</h3>
                  <p className="backgroundColor">An online peer support network that brings together students and school to support academics and provide mental health services.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  src={GroupPhoto}
                  alt="Group Photo"
                />
                <Carousel.Caption>
                  <h3 className="backgroundColor">Group Photo</h3>
                  <p className="backgroundColor">2018 was a hit!</p>
                </Carousel.Caption>
              </Carousel.Item>

            </Carousel>
          </section>
        </main>

        <Footer />
    </div>
}
