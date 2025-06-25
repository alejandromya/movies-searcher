import { MovieType } from "../dominio/Movie";
import { SearchMovieByTextRepository } from "../dominio/MovieRepository";

export const searchMovieByTitleService = (
  movieRepository: SearchMovieByTextRepository
) => {
  return (searchingText: string): MovieType[] => {
    return movieRepository.searchMovieByTitle(searchingText);
  };
};
