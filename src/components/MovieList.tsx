import React, { useEffect, useState } from 'react'
import styled from "styled-components"

import MovieCard from './MovieCard'
import {Movie} from "../utils/types"
import movieApiClient from '../utils/movieApiClient'


export default function MovieList() {

    const [movieList, setMovieList] = useState<Movie[]>([])

    async function getMovies(){
        const {results } = await movieApiClient.getMovieList()
        setMovieList(results)
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <MovieListContainer>
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