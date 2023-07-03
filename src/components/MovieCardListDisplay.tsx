import React from "react";

import SimpleMovieCard from "./SimpleMovieCard";
import { MovieSliderContainer, SectionHeading } from "./styled";

interface MovieListCardDisplayProps {
  movieList?: Movie[];
  error?: ApiError | null;
  headingText: string;
}

export default function MovieCardListDisplay({
  movieList,
  error,
  headingText,
}: MovieListCardDisplayProps) {
  return (
    <div>
      <SectionHeading>{headingText}</SectionHeading>
      <MovieSliderContainer>
        {!error &&
          movieList?.map((mov) => (
            <SimpleMovieCard movieData={mov} key={mov.id} />
          ))}
      </MovieSliderContainer>
      <p>{error?.message}</p>
    </div>
  );
}
