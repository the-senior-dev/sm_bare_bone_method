import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import { PageContainer } from "../components/styled";
import TrendingNow from "../components/TrendingNow";
import Upcoming from "../components/Upcoming";
import { ApiError, isApiError, Movie } from "../utils/typesApi";
import movieApiClient from "../utils/movieApiClient";

export default function MainPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [error, setFetchError] = useState<ApiError | null>();
  const [totalPages, setTotalPages] = useState<number>(1);
  const [searchText, setSearchText] = useState<string>("star wars");

  async function getMovies() {
    const response = await movieApiClient.getMovieList(searchText, currentPage);
    if (isApiError(response)) {
      setFetchError(response);
    } else {
      setMovieList(response.results);
      setTotalPages(response.total_pages);
    }
  }

  useEffect(() => {
    getMovies();
  }, [currentPage, searchText]);

  return (
    <PageContainer>
      <SearchBar setSearchText={setSearchText} />
      <MovieList movieList={movieList} error={error} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lastPage={totalPages}
      />
      <TrendingNow />
      <Upcoming />
    </PageContainer>
  );
}
