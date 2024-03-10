
import React, { useState, useEffect, useCallback } from 'react';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

const Movie = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]= useState(null);


    const fetchMoviesHandler = useCallback(async()=> {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch("https://ecom-app-d53dd-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json");
            if (!response.ok) {
                throw new Error('Failed to fetch movies');
            }
            const data = await response.json();

            const loadedMovies = [];
      
            for (const key in data) {
              loadedMovies.push({
                id: key,
                title: data[key].title,
                openingText: data[key].openingText,
                releaseDate: data[key].releaseDate,
              });
            }
      
            setMovies(loadedMovies);


            //setIsLoading(false);
        } catch (error) {
            console.error('Error fetching movies:', error.message);
            setError(error.message);
        } 
        setIsLoading(false);
    },[]);

    
    useEffect(()=>{
        fetchMoviesHandler();
    },[fetchMoviesHandler]);

    
  async function addMovieHandler(movie) {
    const response = await fetch(
        "https://ecom-app-d53dd-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",
        {
          method: "POST",
          body: JSON.stringify(movie),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
  }

  let content = <p>Found No Movies.</p>;

  if (movies.length > 0) {
    content = <MovieList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }
    

    return (
        <div>
        <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>{content}</section>
        </div>
    );
}

export default Movie;
