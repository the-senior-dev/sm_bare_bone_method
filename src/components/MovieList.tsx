import React from 'react'
import styled from "styled-components"

import MovieCard from './MovieCard'
import {Movie} from "../utils/types"

 
interface MovieProps{
    movieList: Movie[],
    searchText: string
}

export default function MovieList({movieList, searchText}:MovieProps) {
    return (
        <MovieListContainer>
            <h3>Results for: "{searchText}"</h3>
            <MovieCardListWrapper>
                {movieList.map(movie => {
                    return <MovieCard movie={movie}/>
                })}
            </MovieCardListWrapper>

        </MovieListContainer>
    )
}

const MovieCardListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

const MovieListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`