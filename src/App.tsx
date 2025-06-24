import { useEffect, useState } from "react";
import "./App.css";
import { MovieType } from "./core/dominio/Movie";
import { Movie } from "./components/Movie";
import {
  AllMoviesRepository,
  MovieFromJsonRepository,
} from "./core/infrasestructura/searchMovieFromJson";
import { SearchMovieByTitleService } from "./core/aplicacion/filterByTitleService";
import { FindAllMoviesService } from "./core/aplicacion/findAllMoviesService";

export const App = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredFilm, setFilteredFilm] = useState<MovieType[]>([]);
  const [allMovies, setAllMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    const movies = new FindAllMoviesService(
      new AllMoviesRepository()
    ).findAllMovies();
    setAllMovies(movies);
  }, []);

  useEffect(() => {
    const SearchMovieInstance = new SearchMovieByTitleService(
      new MovieFromJsonRepository()
    );
    const filteredMovies = SearchMovieInstance.searchMovieByText(searchText);
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
            📊 <strong>Datos disponibles:</strong> {allMovies.length} películas
            en el archivo movies.json
          </p>
        </div>
      </main>
    </div>
  );
};
