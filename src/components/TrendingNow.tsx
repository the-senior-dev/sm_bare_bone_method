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
            <h1>Trending Now</h1>
            <TrendingContainer>
                {movieListTrending?.map((mov) => <SimpleMovieCard movieData={mov}/>)}
            </TrendingContainer>
        </div>
    )
}

const TrendingContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`