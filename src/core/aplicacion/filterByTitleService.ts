import { MovieType } from "../dominio/Movie";

export const searchMovieByTitle = (
  searchingText: string,
  movie: MovieType[]
) => {
  if (searchingText.trim() === "") return [];
  const filteredFilms = movie.filter((movies) =>
    movies.title.toLowerCase().includes(searchingText.toLowerCase())
  );
  return filteredFilms;
};
