import { MovieType } from "../dominio/Movie";
import { FindAllMoviesRepository } from "../dominio/MovieRepository";

export const findAllMoviesService = (
  movieRepository: FindAllMoviesRepository
) => {
  return (): MovieType[] => {
    return movieRepository.findAllMovies();
  };
};
