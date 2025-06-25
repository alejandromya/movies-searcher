import { MovieType } from "../dominio/Movie";
import { SearchMovieByTextRepository } from "../dominio/MovieRepository";
import movies from "../../data/movies.json";

export const movieFromJsonRepository: SearchMovieByTextRepository = {
  searchMovieByTitle(searchingText: string): MovieType[] {
    if (searchingText.trim() === "") return [];
    const filteredFilms = movies.filter((movies) =>
      movies.title.toLowerCase().includes(searchingText.toLowerCase())
    );
    return filteredFilms;
  },
};
