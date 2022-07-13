import React from 'react'
import {
    Link
} from "react-router-dom";
import styled from "styled-components"

import {Movie} from "../types"
 
interface MovieCardProps{
    movie: Movie
}

export default function MovieCard({movie}:MovieCardProps) {
    return (
        <MovieCardContainer>
            <Link to={`/movie/${movie.imdbID}`} style={{width: "100%"}}>
                <div style={{display: "flex"}}>
                    <img height="200" src={movie.Poster}></img>
                    <div>
                        <h4>{movie.Title}</h4>

                        <p>
                        {movie.Year}
                        </p>
                    </div>
                </div>
            </Link>
        </MovieCardContainer>

    )
}

const MovieCardContainer = styled.div`
    display: flex;
    width: 100%;
`