import React, { useEffect, useState } from "react";
import movieApiClient from "../utils/movieApiClient";

import MovieCardListDisplay from "./MovieCardListDisplay";

export default function Upcoming() {
  const [movieListUpcoming, setMovieListUpcoming] = useState<Movie[]>();
  const [error, setFetchError] = useState<ApiError | null>(null);

  useEffect(() => {
    movieApiClient.getMovieListUpcoming().then((data) => {
      if ("message" in data) {
        setFetchError(data);
      } else {
        setMovieListUpcoming(data.results);
      }
    });
  }, []);

  return (
    <MovieCardListDisplay
      movieList={movieListUpcoming}
      headingText={"Trending Now"}
      error={error}
    />
  );
}
