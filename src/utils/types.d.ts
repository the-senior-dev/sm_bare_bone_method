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

export type MovieReview = {
  id: string;
  author: string;
  author_details: ReviewAuthorDetails
  content: string;
  created_at: string;
};

export type ReviewAuthorDetails = {
  id: string;
  name: string;
  rating: number;
  avatar_path: string;
  username: string
};

export type ApiResponseReviews = {
  results: MovieReview[];
  page: number;
  total_results: number;
  total_pages: number;
};
