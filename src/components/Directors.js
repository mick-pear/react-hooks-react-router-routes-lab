import React from "react";
import { directors } from "../data";

function Directors() {

    const directorInfo = directors.map((director) =>
    <div key={director.name}>
        <h2 key={director.name}>{director.name}</h2>
        <ul key={director.movies}>
            {director.movies.map((directorMovies) => 
                <li key={directorMovies}>{directorMovies}</li>)}
        </ul>
    </div>
    )

    return <div>
        <h1>Directors Page</h1>
        {directorInfo}
    </div>;
}

export default Directors;
