import { MovieType } from "../dominio/Movie";
import { SearchMovieByTextRepository } from "../dominio/MovieRepository";
import { AllMoviesRepository } from "../infrasestructura/searchMovieFromJson";

export class FindAllMoviesService {
  constructor(private movieRepository: AllMoviesRepository) {}
  findAllMovies = (): MovieType[] => {
    return this.movieRepository.findAllMovies();
  };
}
