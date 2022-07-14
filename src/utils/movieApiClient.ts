import { ApiResponse, ApiResponseReviews, FullMovie, Movie, MovieReview } from "./types";

const apiKey = "affc0edf3f789f9357f1d525ba2cdd23"
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
  ) {
    const response = await fetch(
      `${apiUrl}/search/movie?query=star%20wars&api_key=${this.apiKey}`,
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
