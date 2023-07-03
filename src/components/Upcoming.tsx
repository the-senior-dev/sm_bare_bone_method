import React, { useEffect, useState } from "react";
import movieApiClient from "../utils/movieApiClient";

import SimpleMovieCard from "./SimpleMovieCard";
import { MovieSliderContainer, SectionHeading } from "./styled";

export default function Upcoming() {
  const [movieListUpcoming, setMovieListUpcoming] = useState<Movie[] | null>();
  const [error, setFetchError] = useState<ApiError | null>();

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
    <div>
      <SectionHeading>Upcoming</SectionHeading>
      <MovieSliderContainer>
        {!error &&
          movieListUpcoming?.map((mov) => (
            <SimpleMovieCard movieData={mov} key={mov.id} />
          ))}
      </MovieSliderContainer>
      <p>{error?.message}</p>
    </div>
  );
}
