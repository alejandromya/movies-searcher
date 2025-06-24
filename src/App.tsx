import { useEffect, useState } from "react";
import "./App.css";
import movies from "./data/movies.json";
import { MovieType } from "./core/dominio/Movie";
import { Movie } from "./test/components/Movie";

export const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [allFilms, setAllFilms] = useState<MovieType[]>([]);
  const [filteredFilm, setFilteredFilm] = useState<MovieType[]>([]);

  useEffect(() => {
    const moviesFromJson = movies;
    setAllFilms(moviesFromJson);
  }, []);

  const searchFilmByTitle = (searchTerm: string) => {
    const filteredFilms = allFilms.filter((movies) =>
      movies.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredFilms;
  };

  useEffect(() => {
    setFilteredFilm(searchFilmByTitle(searchTerm));
  }, [searchTerm]);

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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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
