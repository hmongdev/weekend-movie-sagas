import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

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
                <h1>Movie Details</h1>
                <img src={movies[id - 1].poster}></img>
                <h1>{movies[id - 1].title}</h1>
                <h4>{movies[id - 1].description}</h4>
                <p>{genres[0].name}</p>
            </section>
            <button onClick={returnHome}>Home</button>
        </div>
    );
}
