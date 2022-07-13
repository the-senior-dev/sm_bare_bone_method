export type ApiResponse = {
  results: Movie[];
  page: number;
  total_results: number;
  total_pages: number;
};

export type Movie = {
  original_title: string;
  poster_path: string;
  id: string;
  release_date: string;
  title: string;
  overview: string;
};

export type FullMovie = {
  backdrop_path: string;
  budget: 63000000;
  poster_path: string;
  genres: MovieGenre[];
  id: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
};

export type MovieGenre = {
  id: string;
  name: string;
};
