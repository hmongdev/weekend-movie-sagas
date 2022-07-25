import React from 'react';
//* import history
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-redux';

export default function MovieItem({ movie }) {
    //* useHistory
    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();

    //* handleClick
    const handleClick = () => {
        //GET ALL GENRES
        dispatch({
            type: 'FETCH_GENRES',
            payload: id,
        });

        //setTimeout
        setTimeout(() => {
            history.push(`/details/${id}`);
        }, 25);
    };

    return (
        <div className="movie-item" key={id}>
            <img onClick={handleClick} src={movie.poster} alt={movie.title} />
        </div>
    );
}
