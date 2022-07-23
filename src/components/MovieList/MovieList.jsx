import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';

//* import history
import { useHistory } from 'react-router-dom';

function MovieList() {
    //const
    const dispatch = useDispatch();
    const movies = useSelector((store) => store.movies);
    //* useHistory
    const history = useHistory();

    //useEffect
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    //* handleClick
    const handleClick = () => {
        console.log(`History is:`, history);
        //alert message
        alert(`We're going to Details!`);
        //change view => useHistory => argument is where you want to go
        history.push('/details');
    };

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map((movie) => {
                    return (
                        <div key={movie.id}>
                            <h3>{movie.title}</h3>
                            <img
                                onClick={handleClick}
                                src={movie.poster}
                                alt={movie.title}
                            />
                        </div>
                    );
                })}
            </section>
        </main>
    );
}

export default MovieList;
