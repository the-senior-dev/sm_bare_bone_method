import { ApiResponse } from "./types";

const apiKey = "91545615"

class ApiClient{
    private apiKey: string;
    constructor(apiKey: string){
        this.apiKey = apiKey;
    }

    async getMovieList(
        searchText: string = "Star Wars",
        currentPage: number = 1
      ) {
        const response = await fetch(
          `https://www.omdbapi.com/?s=${searchText}&apikey=${this.apiKey}&page=${currentPage}`
        );
        const data: ApiResponse = await response.json();
        const pageTotal = Math.ceil(parseInt(data.totalResults) / 10);
        return {
          data,
          pageTotal,
          currentPage,
        };
      }

}

// The Singleton Pattern (Api Client, Db Client)
export default new ApiClient(apiKey)
