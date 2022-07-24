import React from 'react';
//* import history
import { useHistory } from 'react-router-dom';

export default function MovieItem({ movie }) {
    //* useHistory
    const history = useHistory();

    //* handleClick
    const handleClick = () => {
        console.log(`History is:`, history);
        //change view => useHistory => argument is where you want to go
        history.push(`/details/${movie.id}`);
    };

    return (
        <div key={movie.id}>
            <h3>{movie.title}</h3>
            <img onClick={handleClick} src={movie.poster} alt={movie.title} />
        </div>
    );
}
