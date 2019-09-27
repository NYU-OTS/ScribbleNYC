import React from 'react';

import '../styles/OrganizerCell.less';


export default function OrganizerCell(props) {
    const { image, name, title } = props;

    return <div className='organizer-cell'
                aria-label={`${title}: ${name}`}>
        <img tabIndex={-1} aria-hidden='true' src={image}/>
        <h3 tabIndex={-1} aria-hidden='true'>{name}</h3>
        <p tabIndex={-1} aria-hidden='true'>{title}</p>
    </div>
}