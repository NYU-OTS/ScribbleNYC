import React, { useState, useEffect } from 'react';

import NavigationBar from '../components/NavigationBar.js';
import CollectionView from '../components/CollectionView.js';
import Footer from '../components/Footer.js';
import TopButton from '../components/BackToTopButton';

import FAQBackground from '../images/FAQBackground.svg';
import '../styles/FAQ.less';


// The about page.
export default function FAQ() {
    return <div className='page faq'>
        <NavigationBar />

        <CollectionView id='faq-items'
            orientation={CollectionView.Orientation.vertical}
            data={[
                <h1 key='0'>Frequently Asked Questions</h1>,
                <img key='1' className='bubble-background-image' src={FAQBackground}/>,
                <main key='2' className='information'>
                    <h2>What should I bring to Scribble NYC?</h2>
                    <p>
                        Please bring a valid student or government ID. 
                        We also recommend attendees to bring laptops, 
                        as some workshops be heavily reliant on a laptop
                    </p>

                    <h2>Who can attend?</h2>
                    <p>
                        Anyone can purchase a ticket, which will give them 
                        admission to the workshops. However, only middle and 
                        high school students can compete in the design-a-thon.
                    </p>

                    <h2>How much does it cost?</h2>
                    <p>
                        Tickets cost $20 per person. However, if you purchase 
                        tickets as a group, they are $15 per person. Groups are 
                        limited to five people
                    </p>

                    <h2>How many people can be on a team for the design-a-thon?</h2>
                    <p>
                        Teams must consist of 2-4 students.
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