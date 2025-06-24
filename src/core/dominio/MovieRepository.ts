import { MovieType } from "./Movie";

export interface SearchMovieByTextRepository {
  searchMovieByTitle(searchingText: string): MovieType[];
}

export interface FindAllMoviesRepository {
  findAllMovies(): MovieType[];
}
