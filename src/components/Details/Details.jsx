import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

export default function Details() {
    //* bring in movies store
    const movies = useSelector((store) => store.movies);
    const genres = useSelector((store) => store.genres);
    const history = useHistory();
    const { id } = useParams();

    //* returnHome
    const returnHome = () => {
        history.push('/');
    };

    return (
        <div>
            <section>
                <h1>{movies[id - 1].title}</h1>
                <img src={movies[id - 1].poster}></img>
                <h3>Genre: {genres[0].name}</h3>
                <h4>{movies[id - 1].description}</h4>
            </section>
            <button onClick={returnHome}>Home</button>
        </div>
    );
}
