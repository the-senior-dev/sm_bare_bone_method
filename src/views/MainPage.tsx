import React, { useState, useEffect } from 'react'

import MovieList from '../components/MovieList'
import PageContainer from '../components/styled/PageContainer'
import SearchBar from "../components/SearchBar"
import { Movie} from "../utils/types"

import ApiClient from "../utils/movieApiClient"

export default function MainPage() {
    const [movieList, setMovieList] = useState<Movie[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [pageTotal, setPageTotal] = useState(1)
    const [searchText, setSearchText] = useState("Star Wars")

    async function getMovies(){
        const {total_pages,results } = await ApiClient.getMovieList(searchText, currentPage)
        setMovieList(results)
        setPageTotal(total_pages)
    }

    const onSearchClick = () => {
        getMovies()
    }

    useEffect(() => {
        getMovies()
    }, [currentPage])

    return (
        <PageContainer>
            <SearchBar searchText={searchText} onChange={setSearchText} onClick={onSearchClick}></SearchBar>
            <MovieList movieList={movieList} searchText={searchText}></MovieList>
        </PageContainer>
    )
}






