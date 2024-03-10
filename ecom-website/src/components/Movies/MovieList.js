// MovieList.js
import React from 'react';
import MovieItem from './MovieItem';

const MovieList = (props) => {
    return (
        <ul>
            {props.movies.map((movie) => (
                <MovieItem
                    key={movie.id}
                    title={movie.title}
                    releaseDate={movie.releaseDate}
                    openingText={movie.openingText}
                />
            ))}
        </ul>
    );
}

export default MovieList;
