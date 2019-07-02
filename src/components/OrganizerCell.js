import React from 'react';

import '../styles/OrganizerCell.less';


export default function OrganizerCell(props) {
    const { image, name, title } = props;

    return <span className='organizer-cell'>
        <img src={image} />
        <h3>{name}</h3>
        <p>{title}</p>
    </span>
}