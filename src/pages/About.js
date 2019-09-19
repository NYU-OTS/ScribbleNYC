import React, { useState, useEffect } from 'react';

import NavigationBar from '../components/NavigationBar.js';
import CollectionView from '../components/CollectionView.js';
import Footer from '../components/Footer.js';
import OrganizerCell from '../components/OrganizerCell';

import BubbleBackground from '../images/NewAboutBackground.svg';

import Adeola from '../images/Adeola Uthman.jpg';
import Felicty from '../images/Felicity Ng.JPG';
import Meenakshi from '../images/Meenakshi.svg';
import Ueno from '../images/Ueno.png';
import Upperline from '../images/UpperlineCode.svg';
import Square from '../images/Square.svg';
import Apple from '../images/Apple.svg';
import '../styles/About.less';


// The about page.
export default function About() {

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return <div className='page about'>
        <NavigationBar />

        <img src={BubbleBackground} className='bubble-background' />
        <main key='3' className='information'>
            <h2>What is Scribble NYC?</h2>
            <p>
                Scribble NYC is a design forum and design-a-thon 
                aimed at teaching middle and high school students 
                about the world of product design.
            </p>

            <h2>Who organizes Scribble NYC?</h2>
            <p>
                Scribble NYC is organized and hosted by NYU IT 
                Operations Technology Services & Support (OTSS), 
                in collaboration with industry partners from across 
                the software design and development field.
            </p>
            <div className='about-organizers'>
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
            <section>
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
            </section>

            <h2>Who sponsers Scribble NYC?</h2>
            <p>
                The below companies have generously donated workshops, 
                prizes, and other resources as sponsors of Scribble NYC.
            </p>
            <p><img src={Ueno} alt='Ueno' height={80}/></p>
            <p><img src={Upperline} alt='Upperline Code' height={80}/></p>
            <p id='last-sponser'><img src={Apple} alt='Apple' height={80}/></p>
        </main>
        <Footer />
    </div>
}