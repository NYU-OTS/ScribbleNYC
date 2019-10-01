import React, { useState, useEffect } from 'react';

import NavigationBar from '../components/NavigationBar.js';
import Footer from '../components/Footer.js';
import OrganizerCell from '../components/OrganizerCell';

import Adeola from '../images/Adeola Uthman.jpg';
import Felicty from '../images/Felicity Ng.JPG';
import Meenakshi from '../images/Meenakshi.png';
import NYU from '../images/NYU_Logo.png';
import Ueno from '../images/Ueno.png';
import Upperline from '../images/UpperlineCode.svg';
import Apple from '../images/Apple.svg';
import '../styles/styles.less';
import '../styles/About.less';
import BubbleBackground from '../images/Experiment1.svg'


// The about page.
export default function About() {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return <div class="root">
        <NavigationBar />

        <div class="pageTitle">
          <h1>About</h1>
          <img src={BubbleBackground} alt="" id="bubbleyBackground"/>
        </div>

        <main key='3' class="main">
            <h2>What is Scribble NYC?</h2>
            <p>
                Scribble NYC is a design forum and design-a-thon
                aimed at teaching middle and high school students
                about the world of product design.
            </p>

            <h2>Who organizes Scribble NYC?</h2>
            <p className='relatedPhotoUnder'>
                Scribble NYC is organized and hosted by NYU IT
                Operations Technology Services & Support (OTSS),
                in collaboration with industry partners from across
                the software design and development field.
            </p>
            <div className='about__organizers'>
                <OrganizerCell image={Meenakshi}
                    name='Meenakshi Baker'
                    title='Event Manager'/>
                <OrganizerCell image={Felicty}
                    name='Felicity Ng'
                    title='Event Organizer'/>
                <OrganizerCell image={Adeola}
                    name='Adeola Uthman'
                    title='Event Organizer'
                    id='twister'/>
            </div>

            <h2>Who participates?</h2>
            <ul style={{ textAlign: 'left' }}>
                <li>
                    Students, teachers, and faculty entering our
                    competition and/or attending our workshops.
                </li>
                <li>
                    Designers and developers from many different companies
                    all over New York will host workshops and provide support
                    while teams are working on projects.
                </li>
                <li>
                    Anyone who wants to learn more, including students,
                    teachers, faculty, parents, and school administrators.
                </li>
            </ul>

            <h2>Who sponsors Scribble NYC?</h2>
            <p>
                The companies below have generously donated workshops,
                prizes, and other resources as sponsors of Scribble NYC.
            </p>
            <div className="sponsors" aria-label='Sponsors for this event are: NYU, Ueno, Upperline Code, Apple'>
              <img id="nyuLogo" tabIndex={-1} src={NYU} alt='NYU' height={80}/>
              <img id="uenoLogo" tabIndex={-1} src={Ueno} alt='Ueno' height={80}/>
              <img id="upperlineLogo" tabIndex={-1} src={Upperline} alt='Upperline Code' height={80}/>
              <img id="appleLogo" tabIndex={-1} src={Apple} alt='Apple' height={80}/>
            </div>
        </main>
      <Footer />
    </div>
}
