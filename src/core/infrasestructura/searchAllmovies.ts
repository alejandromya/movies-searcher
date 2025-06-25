import { MovieType } from "../dominio/Movie";
import { FindAllMoviesRepository } from "../dominio/MovieRepository";
import movies from "../../data/movies.json";

export const allMoviesRepository: FindAllMoviesRepository = {
  findAllMovies: (): MovieType[] => {
    return movies;
  },
};
