import { MovieType } from "../dominio/Movie";
import { MovieRepository } from "../dominio/MovieRepository";

export class SearchMovieByTitleService {
  constructor(private movieRepository: MovieRepository) {}
  searchMovieByText = (searchingText: string, movies: MovieType[]) => {
    return this.movieRepository.searchMovieByTitle(searchingText, movies);
  };
}
