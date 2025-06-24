import React, { useState } from "react";
import "./App.css";
import movies from "./data/movies.json";

export const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

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

        {/* Tu código aquí */}

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
