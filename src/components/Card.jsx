import React from 'react';

function Card(props) {
    return (
        <div className='name--box'>
            <h1>{props.name}</h1>
        </div>
    );
}

export default Card;