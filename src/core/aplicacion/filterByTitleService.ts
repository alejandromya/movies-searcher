import { MovieType } from "../dominio/Movie";
import { SearchMovieByTextRepository } from "../dominio/MovieRepository";

export class SearchMovieByTitleService {
  constructor(private movieRepository: SearchMovieByTextRepository) {}
  searchMovieByText = (searchingText: string): MovieType[] => {
    return this.movieRepository.searchMovieByTitle(searchingText);
  };
}
