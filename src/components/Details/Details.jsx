import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Details() {
    //* bring in movies store
    const movies = useSelector((store) => store.movies);
    const history = useHistory();
    const { id } = useParams();

    //* returnHome
    const returnHome = () => {
        history.push('/');
    };

    return (
        <div>
            <section>
                <h1>Movie Details</h1>
                <p>Movie Title: {movies[id - 1].title}</p>
                <p>Movie Id: {movies[id - 1].id}</p>
                <p>Movie Desc:{movies[id - 1].description}</p>
                <img src={movies[id - 1].poster}></img>
            </section>
            <button onClick={returnHome}>Home</button>
        </div>
    );
}
