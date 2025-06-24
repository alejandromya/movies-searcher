import { MovieType } from "../dominio/Movie";

export const searchMovieByTitle = (searchTerm: string, movie: MovieType[]) => {
  const filteredFilms = movie.filter((movies) =>
    movies.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return filteredFilms;
};
