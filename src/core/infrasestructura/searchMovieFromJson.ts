import { MovieType } from "../dominio/Movie";
import { MovieRepository } from "../dominio/MovieRepository";

export class MovieFromJsonRepository implements MovieRepository {
  searchMovieByTitle(searchingText: string, movie: MovieType[]) {
    const filteredFilms = movie.filter((movies) =>
      movies.title.toLowerCase().includes(searchingText.toLowerCase())
    );
    return filteredFilms;
  }
}
