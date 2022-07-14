import { ApiResponse, ApiResponseReviews, FullMovie, Movie, MovieReview } from "./types";

const apiKey = "affc0edf3f789f9357f1d525ba2cdd23"
const apiToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmZjMGVkZjNmNzg5ZjkzNTdmMWQ1MjViYTJjZGQyMyIsInN1YiI6IjYyY2U4N2NmYjk3NDQyMDNiYTZiMTUzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yRkUq57xsBtbaBUyle1V3X9HpLLfaoI93AYxMX_a6yw";
const apiUrl = "https://api.themoviedb.org/3";
class ApiClient {
  private apiKey: string;
  public apiUrl: string;
  private imageUrl = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
  constructor(apiKey: string, apiUrl: string) {
    this.apiKey = apiKey;
    this.apiUrl = apiUrl;
  }

  buildMoviePosterUrl(relativeUrl:string):string{
    if(!relativeUrl) return "/movie-placeholder.png"
    return `${this.imageUrl}${relativeUrl}`
  }

  async getMovieDetail(movieId: string):Promise<FullMovie>{
    const response = await fetch(
      `${apiUrl}/movie/${movieId}?api_key=${this.apiKey}`,
      {
        headers: {
          'Content-type': 'application/json'
        },
      }
    );
    const data: FullMovie = await response.json();
    return data;
  }

  async getMovieList(
    searchText: string = "Star Wars",
    currentPage: number = 1
  ) {
    const response = await fetch(
      `${apiUrl}/search/movie?query=${searchText}&page=${currentPage}&api_key=${this.apiKey}`,
      {
        headers: {
          'Content-type': 'application/json'
        },
      }
    );
    const data: ApiResponse = await response.json();
    return data;
  }

  async getMovieReview(movieId: string):Promise<MovieReview[]>{
    const response = await fetch(
      `${apiUrl}/movie/${movieId}/reviews?api_key=${this.apiKey}`,
      {
        headers: {
          'Content-type': 'application/json'
        },
      }
    );
    const data:ApiResponseReviews = await response.json();
    return data.results;
  }
  

  async getMovieListNowPlaying():Promise<Movie[]>{
    const response = await fetch(
      `${apiUrl}/movie/now_playing?api_key=${this.apiKey}`,
      {
        headers: {
          'Content-type': 'application/json'
        },
      }
    );
    const data:ApiResponse = await response.json();
    return data.results;
  }

  
}

// The Singleton Pattern (Api Client, Db Client)
export default new ApiClient(apiKey, apiUrl);
