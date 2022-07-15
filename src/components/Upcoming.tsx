import React, { useEffect, useState } from "react";
import movieApiClient from "../utils/movieApiClient";
import { ApiError, isApiError, Movie } from "../utils/typesApi";
import SimpleMovieCard from "./SimpleMovieCard";
import { MovieSliderContainer, SectionHeading } from "./styled/PageContainer";

export default function Upcoming() {
  const [movieListTrending, setMovieListTrending] = useState<Movie[] | null>();
  const [error, setFetchError] = useState<ApiError | null>();

  useEffect(() => {
    movieApiClient.getMovieListUpcoming().then((data) => {
      if (isApiError(data)) {
        setFetchError(data);
      } else {
        setMovieListTrending(data.results);
      }
    });
  }, []);

  return (
    <div>
      <SectionHeading>Upcoming</SectionHeading>
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
