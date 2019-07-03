import React, { useState, useEffect } from 'react';

import NavigationBar from '../components/NavigationBar.js';
import CollectionView from '../components/CollectionView.js';
import Footer from '../components/Footer.js';

import LastYearBackground from '../images/LastYearBackground.svg';
import '../styles/LastYear.less';


// The page describing the event for this year.
export default function ThisYear() {
    return <div className='page last-year'>
        <NavigationBar />

        <CollectionView id='last-year-items'
            orientation={CollectionView.Orientation.vertical}
            data={[
                <h1 key='0'>Last Year<br/>2018</h1>,
                <img key='1' className='bubble-background-image' src={LastYearBackground}/>,
                <main key='2' className='information'>
                    <h2>64 attendees, --X-- workshops, one design-a-thon</h2>
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
                            <li>Workshop 1</li>
                            <li>Workshop 2</li>
                            <li>Workshop 3</li>
                            <li>Workshop 4</li>
                            <li>Workshop 5</li>
                        </span>
                    </section>

                    <img src='' className='preview-image'/>

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
                        <br/>
                        Using sound and a warning light, Tipper Stopper aims
                        to keep students safe by alerting them and their
                        teacher when they tip in their chair.
                    </p>

                    <img src='' className='preview-image'/>

                    <br/><br/><br/>
                    <p>
                        Middle School 2017 An online peer support network
                        that brings together students and school to support
                        academics and provide mental health services.
                    </p>

                    <img src='' className='preview-image'/>

                    <br/><br/>
                    <br/><br/>
                    <br/><br/>
                    <br/><br/>
                </main>,
            ]}/>

        <Footer />
    </div>
}