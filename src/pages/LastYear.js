import React, { useState, useEffect } from 'react';

import NavigationBar from '../components/NavigationBar.js';
import CollectionView from '../components/CollectionView.js';
import Footer from '../components/Footer.js';
import '../components/DividerBubbles';

import BubbleBackground from '../images/SlideTemplateLow.svg';
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
import '../styles/LastYear.less';


// The page describing the event for this year.
export default function ThisYear() {
    
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);
    
    return <div className='page last-year'>
        <NavigationBar />

        <CollectionView id='last-year-items'
            orientation={CollectionView.Orientation.vertical}
            data={[
                <h1 key='0'>Last Year (2018)</h1>,
                <img loading='lazy' key='1' className='bubble-background-image' src={BubbleBackground}/>,
                <main key='2' className='information'>
                    <h2>64 attendees, 8 workshops, one design-a-thon</h2>
                    <p>
                        Middle school and high school students from all over 
                        New York came to join us on October 14th to learn about
                        product design. They participated in workshops and then
                        applied their knowledge to compete in a design-a-thon,
                        where the winners were chosen based on creativity, 
                        originality, and positive impact on their school.
                    </p>

                    <h2>Workshops</h2>
                    <section>
                        Teams started the day by participating in a series
                        of workshops where they learned how to articulate
                        a project concept, design a solution based program,
                        and develop a system prototype.

                        <br/><br/>
                        <b style={{ fontWeight: 'bolder' }}>Workshops Provided:</b>
                        <span>
                            <li>
                                <b>Making the Most of Slack in Product Development</b>
                                <span>
                                    &nbsp; - Karsten Konopath, Mark Benussi, and Meghan Haenn from Slack
                                </span>
                            </li>
                            <li>
                                <b>Designer-Developer Collaboration</b>
                                <span>
                                    &nbsp; - Vidia Anindhita, Tianyue Wu, Yu-Hsuan Lin, and Hyobin Im from NYU IT
                                </span>
                            </li>
                            <li>
                                <b>Art + Code with p5</b>
                                <span>
                                    &nbsp; - Taylor Want and Jeff Olson from UpperlineCode
                                </span>
                            </li>
                            <li>
                                <b>How to Earn a Seat on a Rocketship</b>
                                <span>
                                    &nbsp; - Karsten Konopath, Mark Benussi, and Meghan Haenn from Slack
                                </span>
                            </li>
                            <li>
                                <b>Editing Video on Mac and Video Stories with Clips</b>
                                <span>
                                    &nbsp; - Juliana Velez and Anthony Morales from Apple Inc.
                                </span>
                            </li>
                            <li>
                                <b>Basic 2D Character Assembly for Animations</b>
                                <span>
                                    &nbsp; - Jodie Rae Charity and Elizabeth McAplin from NYU IT
                                </span>
                            </li>
                            <li>
                                <b>Virtual Reality</b>
                                <span>
                                    &nbsp; - Taylor Want and Jeff Olson from UpperlineCode
                                </span>
                            </li>
                            <li>
                                <b>Getting Started with Coding and Sphero Maze Challenge</b>
                                <span>
                                    &nbsp; - Juliana Velez and Anthony Morales from Apple Inc.
                                </span>
                            </li>
                        </span>
                    </section>

                    <div className='image-group'>
                        <img loading='lazy' src={Image1} className='preview-image'/>
                        <img loading='lazy' src={Image2} className='preview-image'/>
                        <img loading='lazy' src={Image3} className='preview-image'/>
                        <img loading='lazy' src={Image4} className='preview-image'/>
                        <img loading='lazy' src={Image5} className='preview-image'/>
                    </div>

                    <div className='divider-button-holder'>
                        <divider-bubbles></divider-bubbles>
                    </div>

                    <h2>The Competition</h2>
                    <p>
                        After participating in these workshops, students formed
                        teams and participated in a Design-A-Thon competition!
                        Each group was able to present their work to a panel of
                        judges, which included representatives from NYU, local
                        schools, and the tech community.
                    </p>

                    <h2>Grand Prize Winners</h2>
                    <p>
                        The Marymount School of Manhattan
                        <br/><br/>
                        Using sound and a warning light, Tipper Stopper aims to 
                        keep students safe by alerting them and their teacher 
                        when they tip in their chair.
                    </p>
                    <img loading='lazy' src={Image8} />
                    <br/><br/><br/>

                    <div className='divider-button-holder'>
                        <divider-bubbles></divider-bubbles>
                    </div>

                    <h2>More Winners</h2>
                    <p>
                        Middle School 2017
                        <br/><br/>
                        An online peer support network that brings together 
                        studentsand school to support academics and provide 
                        mental health services.
                    </p>
                    <img loading='lazy' src={Image7} />
                    <br/>

                    <p>
                        Thomas Alvin Edison High School
                        <br/><br/>
                        A student life application that allows students to 
                        communicate with teachers, connect to their peers, 
                        and streamlines academic planning
                    </p>
                    <img loading='lazy' src={Image6} />
                    <br/>

                    <p>
                        Brooklyn Emerging Leaders Academy Charter High School
                        <br/><br/>
                        A school application that allows students to chat, 
                        receive important reminders about tests and quizzes, 
                        and connect to their classes. It also allows parents 
                        to receive alerts and school updates.
                    </p>
                    <img loading='lazy' src={Image9} />
                    <br/>

                    <a href='/thisyear'>Click to join us again this year!</a>
                    <img loading='lazy' src={Image10} />

                    <br/><br/>
                    <br/><br/>
                    <br/><br/>
                    <br/><br/>
                </main>,
            ]}/>

        <Footer />
    </div>
}