import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import movieApiClient from "../utils/movieApiClient";
import { Movie } from "../utils/typesApi";

export default function SimpleMovieCard({ movieData }: { movieData: Movie }) {
  const navigate = useNavigate();

  const onCardClick = (event: any) => {
    navigate(`/movie/${movieData.id}`);
  };

  return (
    <SimpleMovieCardContainer>
      <SimpleMovieCardImage
        src={movieApiClient.buildMoviePosterUrl(movieData.poster_path)}
        height="174"
        onClick={onCardClick}
        data-testid={`simple-movie-card-${movieData.id}`}
      ></SimpleMovieCardImage>
    </SimpleMovieCardContainer>
  );
}

const SimpleMovieCardContainer = styled.div`
  margin-left: 2px;
  margin-right: 2px;
`;

const SimpleMovieCardImage = styled.img`
  &:hover {
    cursor: pointer;
  }
`;
