import React, { useState } from "react";

type MovieProps = {
  title: string;
  year: number;
};

export const Movie = ({ title, year }: MovieProps) => {
  return (
    <div className="movie-card">
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-year">{year}</p>
      </div>
    </div>
  );
};
