import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Details() {
    //* bring in movies store
    const movies = useSelector((store) => store.movies);
    const history = useHistory();

    //* returnHome
    const returnHome = () => {
        history.push('/');
    };

    return (
        <div>
            <section>
                <h1>Movie Details</h1>
                <p>Movie Title is: {movies.title}</p>
                <p>{movies.description}</p>
            </section>
            <button onClick={returnHome}>Home</button>
        </div>
    );
}
