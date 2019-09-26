import React, { useState, useEffect } from 'react';

import NavigationBar from '../components/NavigationBar.js';
import CollectionView from '../components/CollectionView.js';
import Footer from '../components/Footer';

import BubbleBackground from '../images/NewThisYearBackground.svg';
import ScheduleGraphic from '../images/ScheduleMiddle.png';
import ScheduleLeft from '../images/ScheduleLeft.png';
import '../styles/ThisYear.less';


// The page describing the event for this year.
export default function ThisYear() {

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return <div className='page this-year'>
        <NavigationBar />

        <img key='1' className='bubble-background' src={BubbleBackground}/>,
        <main key='2' className='information'>
            <img src={ScheduleGraphic} className='preview-image' id='schedule-image-1' />
            <img src={ScheduleLeft} className='preview-image' id='schedule-image-2' />

            <div className='divider-button-holder'>
                <divider-bubbles></divider-bubbles>
            </div>

            <h2>Workshops</h2>
            <p>
                From learning to code to navigating how to work as a
                team, sit in on the workshops that interest you and
                learn something new!
            </p>

            <h2>We’re all in this together: Getting better at generating and developing ideas as a team</h2>
            <h3><i>Kwok Yin Mak and Marco Coppeto from Ueno</i></h3>
            <p>
                This workshop will explore several ways for teams to get better at generating and
                developing design ideas collaboratively, using a general framework for creative
                teamwork that can be applied to many different scenarios (not just design). The
                workshop introduces a basic set of principles that teams can use to get better
                at coming up with ideas, selecting and developing them together.
            </p>

            <h2>Discovering Design with Robots!</h2>
            <h3><i>Parthavi Nerurkar from siSTEM.io</i></h3>
            <p>
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

            <h2>Making Your Design Resonate: Storytelling Great UX Designs</h2>
            <h3><i>Hyobin Im from NYU IT STIT</i></h3>
            <p>
                Stories excite us. Therefore, storytelling is a crucial skill that
                designers should develop to make their work resonate for clients and
                users. The goal of this workshop is to teach students the benefits
                of storytelling when presenting UX designs and possible approaches to
                take when pitching or creating case studies. By incorporating case
                studies such as Find My Club and Print Status, made by students on the
                NYU Student Technology Innovation Team, this workshop will address how
                to emphasize UX designs through storytelling.
            </p>

            <h2>An Exploration of Machine Learning</h2>
            <h3><i>Rajat Bapuri, Sean Nordquist, and Andrew Xiao from NYU IT OTSS</i></h3>
            <p>
                Get introduced to machine learning and learn about how it affects our
                everyday lives.
            </p>

            <h2>Art and Animation with P5.js</h2>
            <h3><i>Daniel Fenjves, Taylor Want, and Jeff Olson from Upperline Code</i></h3>
            <p>
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

            <h2>Problem Solving with Python</h2>
            <h3><i>Daniel Fenjves, Taylor Want, and Jeff Olson from Upperline Code</i></h3>
            <p>
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

            <h2>Getting Started with Coding and Sphero Maze Challenge</h2>
            <h3><i>Taught by representatives from Apple Inc.</i></h3>
            <p>
                Help a Sphero robot navigate obstacles using code in the Sphero
                Edu app on iPad. Explore block-based coding by programming simple
                movements, changing colors, and more. Set up obstacles and use
                iPad to program a path for their robot to navigate. iPad devices
                will be provided, or bring your own.
            </p>

            <h2>Editing Video on Mac and Creating Stories with Clips</h2>
            <h3><i>Taught by representatives from Apple Inc.</i></h3>
            <p>
                Learn how to create visual stories the free Clips app on iPad.
                You’ll collaborate with others and create a short video to share.
                Bring your iPad or we’ll provide one.
            </p>

            <div className='divider-button-holder'>
                <divider-bubbles></divider-bubbles>
            </div>
            <h2>Competition Themes</h2>
            <p>
                While it is not required to adhere to the themes, these are the
                topics we've decided to focus on for this year:
                Environmental impact <br/>
                Safer society <br/>
                Connecting outside your school
            </p>

            {/* <h2>Art + Code with p5</h2>
            <p>Taylor Want and Jeff Olson from UpperlineCode</p>

            <h2>Editing Video on Mac and Video Stories with Clips</h2>
            <p>Juliana Velez and Anthony Morales from Apple Inc.</p>

            <h2>Virtual Reality</h2>
            <p>Taylor Want and Jeff Olson from UpperlineCode</p>

            <h2>Getting Started with Coding and Sphero Maze Challenge</h2>
            <p>Juliana Velez and Anthony Morales from Apple Inc.</p>

            <h2>Robotics Design</h2>
            <p>Parthavi Nerurkar from siStem.io</p>

            <h2>Ueno</h2>
            <p>- Coming Soon -</p> */}

            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
        </main>
        <Footer />
    </div>
}
