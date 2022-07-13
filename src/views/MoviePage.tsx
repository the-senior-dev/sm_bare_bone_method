import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

import { FullMovie } from '../utils/types'
import PageContainer from "../components/styled/PageContainer"
import movieApiClient from '../utils/movieApiClient'

export default function MoviePage() {
    const {id} = useParams() as {id: string};

    const [movieData,setMovieData] = useState<FullMovie | null>();

    useEffect(()=>{
        movieApiClient.getMovieDetail(id).then((data) => {
            setMovieData(data)
        })
    }, [])

    return (
        <PageContainer>
            <div style={{display: "flex"}}>
                {movieData ?
                    <MoviePoster src={movieApiClient.buildMoviePosterUrl(movieData?.poster_path)}></MoviePoster>
                    :  
                    <MoviePoster src={movieApiClient.buildMoviePosterUrl("")}></MoviePoster>
                }
                <MovieDetailWrapper>
                    <h1>{movieData?.title}</h1>
                    <p>Tagline: {movieData?.tagline}</p>
                    <p>Rating: {movieData?.vote_average}</p>
                    <p>Plot: {movieData?.overview}</p>
                </MovieDetailWrapper>
            </div>
            <Link to="/">Go Back</Link>
        </PageContainer>
    )
}

const MoviePoster = styled.img`
    width: 50%;
    margin-right: 40px;
    margin-bottom: 40px;
    margin-top: 40px;
`   

const MovieDetailWrapper= styled.div`
    padding: 20px;
`

