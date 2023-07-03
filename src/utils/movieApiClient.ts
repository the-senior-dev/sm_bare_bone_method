import placeHolder from "../assets/movie-placeholder.png";

const apiUrl = "https://api.themoviedb.org/3";

class ApiClient {
  public apiKey: string;
  public apiUrl: string;
  public imageUrl = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
  constructor(apiUrl: string) {
    // TODO: SOLID - Dependency Inversion for apiKey
    this.apiKey = process.env.API_KEY || "";
    this.apiUrl = apiUrl;
  }

  buildMoviePosterUrl(relativeUrl: string): string {
    if (!relativeUrl) return placeHolder;
    return `${this.imageUrl}${relativeUrl}`;
  }

  async getMovieDetail(movieId: string): Promise<FullMovieResponse | ApiError> {
    try {
      const response = await fetch(
        `${apiUrl}/movie/${movieId}?api_key=${this.apiKey}`,
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data: FullMovieResponse = await response.json();
      return data;
    } catch (err) {
      console.error(err);
      return {
        message: "An error has ocurred while fetching data",
      } as ApiError;
    }
  }

  async getMovieList(): Promise<ApiResponse<Movie> | ApiError> {
    try {
      const response = await fetch(
        `${apiUrl}/search/movie?query=star%20wars&api_key=${this.apiKey}`,
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data: ApiResponse<Movie> = await response.json();

      return data;
    } catch (err) {
      console.error(err);
      return {
        message: "An error has ocurred while fetching data",
      } as ApiError;
    }
  }

  async getMovieReviewList(
    movieId: string
  ): Promise<ApiResponse<MovieReview> | ApiError> {
    try {
      const response = await fetch(
        `${apiUrl}/movie/${movieId}/reviews?api_key=${this.apiKey}`,
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data: ApiResponse<MovieReview> = await response.json();
      return data;
    } catch (err) {
      console.error(err);
      return {
        message: "An error has ocurred while fetching data",
      } as ApiError;
    }
  }

  async getMovieListNowPlaying(): Promise<ApiResponse<Movie> | ApiError> {
    try {
      const response = await fetch(
        `${apiUrl}/movie/now_playing?api_key=${this.apiKey}`,
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data: ApiResponse<Movie> = await response.json();
      return data;
    } catch (err) {
      console.error(err);
      return {
        message: "An error has ocurred while fetching data",
      } as ApiError;
    }
  }

  async getMovieListUpcoming(): Promise<ApiResponse<Movie> | ApiError> {
    try {
      const response = await fetch(
        `${apiUrl}/movie/upcoming?api_key=${this.apiKey}`,
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data: ApiResponse<Movie> = await response.json();
      return data;
    } catch (err) {
      console.error(err);
      return {
        message: "An error has ocurred while fetching data",
      } as ApiError;
    }
  }
}

// The Singleton Pattern (Api Client, Db Client)
export default new ApiClient(apiUrl);
