import React from 'react';

import '../styles/OrganizerCell.less';


export default function OrganizerCell(props) {
    const { image, name, title } = props;

    return <div className='organizer-cell'>
        <img src={image} style={{
            transform: name === 'Adeola Uthman' 
                && window.matchMedia('(max-width: 768px)').matches === false ? 
                    'rotateZ(90deg)' : 'none'
        }}/>
        <h3>{name}</h3>
        <p>{title}</p>
    </div>
}