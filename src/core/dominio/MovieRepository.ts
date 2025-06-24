import { MovieType } from "./Movie";

export interface MovieRepository {
  searchMovieByTitle(searchingText: string, films: MovieType[]);
}
