import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import moment from "moment"

import movieApiClient from "../utils/movieApiClient";
import { Movie } from "../utils/types";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const navigate = useNavigate();
  const onCardClick = () => {
    navigate(`/movie/${movie.id}`);
  };
  return (
    <MovieCardContainer onClick={onCardClick}>
      <div style={{ display: "flex" }}>
        <img
          height="238"
          src={movieApiClient.buildMoviePosterUrl(movie.poster_path)}
        ></img>
        <MovieCardSummary>
          <MovieTitle>{movie.title}</MovieTitle>

          <p>Release Date: {moment(movie.release_date).format("MMM Do YY")}</p>
          <MoviePlot>Plot: {movie.overview}</MoviePlot>
        </MovieCardSummary>
      </div>
    </MovieCardContainer>
  );
}

const MovieCardSummary = styled.div`
  padding: 10px;
  text-decoration: none;
`;

const MovieTitle = styled.h2`
  color: #2d3436;
  text-decoration: none;
`;

const MoviePlot = styled.p`
  color: #636e72;
  text-decoration: none;
`;

const MovieCardContainer = styled.div`
  display: flex;
  width: calc(50% - 20px);
  border: solid 1px #b2bec3;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 4px;
  box-sizing: border-box;
  height: 240px;
  background-color: white;
  &:hover {
    // background-color: #b2bec3;
    cursor: pointer;
    transform: scale(1.03);
    border-color: black;
  }
`;
