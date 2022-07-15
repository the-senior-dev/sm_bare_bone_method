import React from "react";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import { PageContainer } from "../components/styled/PageContainer";
import TrendingNow from "../components/TrendingNow";
import Upcoming from "../components/Upcoming";

export default function MainPage() {
  return (
    <PageContainer>
      <SearchBar />
      <MovieList />
      <TrendingNow />
      <Upcoming></Upcoming>
    </PageContainer>
  );
}
