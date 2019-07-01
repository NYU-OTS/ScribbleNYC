import React from 'react';

export default function BackToTopButton() {
    return <button className='back-to-top-button' onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }}>
        <span className='fa fa-arrow-up'/>
        <br/>
        <p>Back to Top</p>
    </button>
}