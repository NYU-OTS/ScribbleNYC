import React, { useState, useEffect } from 'react';

import NavigationBar from '../components/NavigationBar.js';
import CollectionView from '../components/CollectionView.js';
import Footer from '../components/Footer';

import ThisYearBackground from '../images/ThisYearBackground.svg';
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
                <img key='1' className='bubble-background-image' src={ThisYearBackground}/>,
                <main key='2' className='information'>
                    <img src={ScheduleGraphic} className='preview-image' id='schedule-image-1' />
                    <img src={ScheduleLeft} className='preview-image' id='schedule-image-2' />

                    <h2>Workshops</h2>
                    <p>
                        From learning to code to navigating how to work as a
                        team, sit in on the workshops that interest you and
                        learn something new!
                    </p>

                    <h2>Virtual Reality with A-Frame</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Nam mauris nisi, condimentum efficitur
                        diam ac, tempor ultrices nisl. Fusce aliquam placerat
                        justo, vel vestibulum velit vestibulum sed. Maecenasviverra
                        tortor at odio placerat posuere. Cras ac lacinia odio.
                    </p>

                    <br/><br/>
                    <br/><br/>
                    <br/><br/>
                    <br/><br/>
                </main>,
            ]}/>

        <Footer />
    </div>
}