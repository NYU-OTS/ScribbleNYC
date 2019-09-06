import React, { useState, useEffect } from 'react';

import NavigationBar from '../components/NavigationBar.js';
import CollectionView from '../components/CollectionView.js';
import Footer from '../components/Footer';

import BubbleBackground from '../images/SlideTemplateLow.svg';
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

        <CollectionView id='this-year-items'
            orientation={CollectionView.Orientation.vertical}
            data={[
                <h1 key='0'>This Year</h1>,
                <img key='1' className='bubble-background-image' src={BubbleBackground}/>,
                <main key='2' className='information'>
                    <img src={ScheduleGraphic} className='preview-image' id='schedule-image-1' />
                    <img src={ScheduleLeft} className='preview-image' id='schedule-image-2' />

                    <h2>Workshops</h2>
                    <p>
                        From learning to code to navigating how to work as a
                        team, sit in on the workshops that interest you and
                        learn something new!
                    </p>


                    <h2>Art + Code with p5</h2>
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
                    <p>- Coming Soon -</p>

                    <br/><br/>
                    <br/><br/>
                    <br/><br/>
                    <br/><br/>
                </main>,
            ]}/>

        <Footer />
    </div>
}