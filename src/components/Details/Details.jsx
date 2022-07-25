import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function Details() {
    //* bring in movies store
    const movie = useSelector((store) => store.movie);
    const genres = useSelector((store) => store.genres);
    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch({
            type: 'FETCH_MOVIE',
            payload: id,
        });
    }, []);

    //* returnHome
    const returnHome = () => {
        history.push('/');
    };

    return (
        <div>
            <section>
                <h1>{movie[0].title}</h1>
                <img src={movie[0].poster}></img>
                <h3>Genre: {genres[0].name}</h3>
                <h4>{movie[0].description}</h4>
            </section>
            <button onClick={returnHome}>Home</button>
        </div>
    );
}
