// MovieItem.js
import React from 'react';

const MovieItem = ({ title,openingText,releaseDate }) => {
    return (
        <li>
            <h2>{title}</h2>
            <p>{openingText}</p>
            <p><h3>Release Date:</h3>{releaseDate}</p>
            
        </li>
    );
}

export default MovieItem;
