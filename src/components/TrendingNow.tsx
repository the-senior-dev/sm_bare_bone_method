import React, { useEffect, useState } from "react";
import movieApiClient from "../utils/movieApiClient";
import SimpleMovieCard from "./SimpleMovieCard";
import { MovieSliderContainer, SectionHeading } from "./styled";

export default function TrendingNow() {
  const [movieListTrending, setMovieListTrending] = useState<Movie[] | null>();
  const [error, setFetchError] = useState<ApiError | null>();

  useEffect(() => {
    movieApiClient.getMovieListNowPlaying().then((data) => {
      if ("message" in data) {
        setFetchError({ message: data.message, isError: true });
      } else {
        setMovieListTrending(data.results);
      }
    });
  }, []);

  return (
    <div>
      <SectionHeading>Trending Now</SectionHeading>
      <MovieSliderContainer>
        {!error &&
          movieListTrending?.map((mov) => (
            <SimpleMovieCard movieData={mov} key={mov.id} />
          ))}
      </MovieSliderContainer>
      <p>{error?.message}</p>
    </div>
  );
}
