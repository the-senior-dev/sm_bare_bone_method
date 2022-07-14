import React, { useState, useEffect } from 'react'

import MovieList from '../components/MovieList'
import PageContainer from '../components/styled/PageContainer'
import SearchBar from "../components/SearchBar"
import { Movie} from "../utils/types"

import ApiClient from "../utils/movieApiClient"
import { useSearchParams } from 'react-router-dom'
import TrendingNow from '../components/TrendingNow'

export default function MainPage() {
    const [movieList, setMovieList] = useState<Movie[]>([])
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchText, setSearchText] = useState(searchParams.get("search") || "Star Wars")


    async function getMovies(){
        setSearchParams({ search: searchText });
        const {results } = await ApiClient.getMovieList(searchText)
        setMovieList(results)
    }

    const onSearchClick = () => {
        getMovies()
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <PageContainer>
            <SearchBar searchText={searchText} onChange={setSearchText} onClick={onSearchClick}></SearchBar>
            <MovieList movieList={movieList} searchText={searchText}></MovieList>
            <TrendingNow></TrendingNow>
        </PageContainer>
    )
}






