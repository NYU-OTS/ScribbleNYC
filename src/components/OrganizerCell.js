import React from 'react';

import '../styles/OrganizerCell.less';


export default function OrganizerCell(props) {
    const { image, name, title } = props;

    return <div className='organizerCell'
                aria-label={`${title}: ${name}`}>
        <img tabIndex={-1} aria-hidden='true' src={image}/>
        <p tabIndex={-1}>
          <b>{name}</b>
          <br/>
          {title}
        </p>
    </div>
}
