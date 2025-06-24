import { MovieType } from "../dominio/Movie";
import {
  FindAllMoviesRepository,
  SearchMovieByTextRepository,
} from "../dominio/MovieRepository";
import movies from "../../data/movies.json";
import { FindAllBy } from "@testing-library/react";

export class MovieFromJsonRepository implements SearchMovieByTextRepository {
  searchMovieByTitle(searchingText: string) {
    if (searchingText.trim() === "") return [];
    const filteredFilms = movies.filter((movies) =>
      movies.title.toLowerCase().includes(searchingText.toLowerCase())
    );
    return filteredFilms;
  }
}

export class AllMoviesRepository implements FindAllMoviesRepository {
  findAllMovies() {
    return movies;
  }
}
