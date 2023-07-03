import React, { useEffect, useState } from "react";
import styled from "styled-components";

import movieApiClient from "../utils/movieApiClient";
import SimpleMovieCard from "./SimpleMovieCard";

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
      <TrendingContainer>
        {!error &&
          movieListTrending?.map((mov) => (
            <SimpleMovieCard movieData={mov} key={mov.id} />
          ))}
      </TrendingContainer>
      {error && <p>{error?.message}</p>}
    </div>
  );
}

const SectionHeading = styled.h1`
  width: 100%;
  text-align: left;
  padding-left: 10px;
`;

const TrendingContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
`;
