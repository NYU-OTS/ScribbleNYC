import React, { useState, useEffect } from 'react';
import Media from 'react-media';

import NavigationBar from '../components/NavigationBar.js';
import CollectionView from '../components/CollectionView.js';
import Footer from '../components/Footer.js';
import '../styles/FAQ.less';
import BubbleBackground from '../images/Experiment1.svg'


// The about page.
export default function FAQ() {

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return <div className='root'>
        <NavigationBar />

        <div className="pageTitle">
          <h1>FAQs</h1>
          <img src={BubbleBackground} alt="" id="bubbleyBackground"/>
        </div>
        <main key='2' className="main">
            <h2 className="faq__h2">What should I bring to Scribble NYC?</h2>
            <p className="faq__p">
                Please bring the signed&nbsp;
                <a href="https://drive.google.com/open?id=1pnBufeiSjfhqYajQZNNH85s9jXhwa-QLVuuG7qRK5d0" aria-label="open new tab for liability waiver"
                target="_blank">liability waiver</a>
                , the signed&nbsp;
                <a href="https://drive.google.com/open?id=13JRgCMZjTXoXK1NjPXHmZG8rvYCibimSzLZEGxazSKs" aria-label="open new tab for photo/video release form"
                target="_blank">photo/video release form</a>
                , and a valid student or government ID.
                We also recommend attendees to bring laptops,
                as some workshops be heavily reliant on them.
            </p>

            <h2 className="faq__h2">Who can attend?</h2>
            <p className="faq__p">
                Anyone can purchase a ticket, which will give them
                admission to the workshops. However, only middle and
                high school students can compete in the design-a-thon.
            </p>

            <h2 className="faq__h2">How much does it cost?</h2>
            <p className="faq__p">
                General admission tickets cost $20. However, if you purchase
                tickets as a group, it is $15 per person. Groups are limited to
                five people (four students and one adult chaperone) and expected
                to participate in the design-a-thon.
            </p>

            <h2 className="faq__h2">How many people can be on a team for the design-a-thon?</h2>
            <p className="faq__p">
                Teams must consist of 2-4 students.
            </p>
        </main>
        <Footer />
    </div>
}
