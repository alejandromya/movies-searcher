import { useEffect, useState } from "react";
import "./App.css";
import movies from "./data/movies.json";
import { MovieType } from "./core/dominio/Movie";
import { Movie } from "./test/components/Movie";
import { MovieFromJsonRepository } from "./core/infrasestructura/searchMovieFromJson";
import { SearchMovieByTitleService } from "./core/aplicacion/filterByTitleService";

export const App = () => {
  const [searchText, setSearchText] = useState("");
  const [allFilms, setAllFilms] = useState<MovieType[]>([]);
  const [filteredFilm, setFilteredFilm] = useState<MovieType[]>([]);

  useEffect(() => {
    const moviesFromJson = movies;
    setAllFilms(moviesFromJson);
  }, []);

  useEffect(() => {
    const SearchMovieInstance = new SearchMovieByTitleService(
      new MovieFromJsonRepository()
    );
    const filteredMovies = SearchMovieInstance.searchMovieByText(
      searchText,
      allFilms
    );
    setFilteredFilm(filteredMovies);
  }, [searchText]);

  return (
    <div className="App">
      <header className="app-header">
        <h1>🎬 Movie Search</h1>
        <p className="subtitle">Encuentra tu película favorita</p>
      </header>

      <main className="main-content">
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar películas por título..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="search-input"
          />
        </div>
        {filteredFilm &&
          filteredFilm.map((film) => {
            return <Movie key={film.id} title={film.title} year={film.year} />; // ← Ahora sí retorna
          })}

        <div className="placeholder">
          <p>
            📝 <strong>Tu tarea:</strong> Crear un buscador que permita filtrar
            películas por título
          </p>
          <p>
            📊 <strong>Datos disponibles:</strong> {movies.length} películas en
            el archivo movies.json
          </p>
        </div>
      </main>
    </div>
  );
};
