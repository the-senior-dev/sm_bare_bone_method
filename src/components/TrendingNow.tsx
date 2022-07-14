import React, { useEffect, useState } from "react"
import styled from "styled-components";

import { Movie } from "../utils/types";
import SimpleMovieCard from "./SimpleMovieCard";
import movieApiClient from "../utils/movieApiClient"

export default function TrendingNow(){
    const [movieListTrending, setMovieListTrending] = useState<Movie[] | null>();

    useEffect(() => {
        movieApiClient.getMovieListNowPlaying().then(data => setMovieListTrending(data))
    }, [])

    return (
        <div>
            <SectionHeading>Trending Now</SectionHeading>
            <TrendingContainer>
                {movieListTrending?.map((mov) => <SimpleMovieCard movieData={mov}/>)}
            </TrendingContainer>
        </div>
    )
}

const SectionHeading= styled.h1`
    width: 100%;
    text-align: left;
    padding-left: 10px;
`

const TrendingContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
`