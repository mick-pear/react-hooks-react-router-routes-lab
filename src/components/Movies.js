import React from "react";
import { movies } from "../data";

function Movies() {

    const movieInfo = movies.map((movie) =>
        <div key={movie.title}>
            <h2>{movie.title}</h2>
            <p key={movie.time}>Time: {movie.time} minutes</p>
            <ul key={movie.genres}>
                {movie.genres.map((genre) =>
                <li key={genre}>{genre}</li>)}
            </ul>
        </div>
    )
    return <div>
        <h1>Movies Page</h1>
        {movieInfo}
    </div>;
}

export default Movies;
