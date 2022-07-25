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
        history.push(`/details/${movie.id}`);
    };

    return (
        <div className="movie-item" key={movie.id}>
            <img onClick={handleClick} src={movie.poster} alt={movie.title} />
        </div>
    );
}
