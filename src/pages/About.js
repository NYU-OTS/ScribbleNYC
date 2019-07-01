import React, { useState, useEffect } from 'react';

import NavigationBar from '../components/NavigationBar.js';
import CollectionView from '../components/CollectionView.js';
import Footer from '../components/Footer.js';

import AboutBackground from '../images/AboutBackground.svg';
import '../styles/About.less';


// The about page.
export default function About() {
    return <div className='page about'>
        <NavigationBar />

        <CollectionView id='about-items'
            orientation={CollectionView.Orientation.vertical}
            data={[
                <h1>About</h1>,
                <img className='bubble-background-image' src={AboutBackground}/>,
                <main className='information'>
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
                    <section className='about-organizers'>
                        <img src='' />
                        <img src='' />
                        <img src='' />
                    </section>

                    <h2>Who participates?</h2>
                    <p>
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
                    </p>

                    <h2>Who sponsers Scribble NYC?</h2>
                    <p>
                        The below companies have generously donated workshops, 
                        prizes, and other resources as sponsors of Scribble NYC.
                    </p>
                </main>,
            ]}/>

        <Footer />
    </div>
}