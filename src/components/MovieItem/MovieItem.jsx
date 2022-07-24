import React from 'react';
//* import history
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function MovieItem({ movie }) {
    //* useHistory
    const history = useHistory();
    const dispatch = useDispatch();

    //* handleClick
    const handleClick = () => {
        //GET ALL GENRES
        dispatch({
            type: 'FETCH_GENRES',
            payload: movie.id,
        });
        //* useHistory
        history.push(`/details/${movie.id}`);
    };

    return (
        <div key={movie.id}>
            <h3>{movie.title}</h3>
            <img onClick={handleClick} src={movie.poster} alt={movie.title} />
        </div>
    );
}
