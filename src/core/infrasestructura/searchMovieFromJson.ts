import { MovieType } from "../dominio/Movie";
import { MovieRepository } from "../dominio/MovieRepository";

export class MovieFromJsonRepository implements MovieRepository {
  searchMovieByTitle(searchingText: string, movie: MovieType[]) {
    if (searchingText.trim() === "") return [];
    const filteredFilms = movie.filter((movies) =>
      movies.title.toLowerCase().includes(searchingText.toLowerCase())
    );
    return filteredFilms;
  }
}
