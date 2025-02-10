import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Spider Man", ratings: 3 },
    { id: 2, title: "Superman ", ratings: 4 },
    { id: 3, title: "Ant Man", ratings: 5 },
  ]);

  const handleClick = () => {
    setMovies(
      movies.map((movie) =>
        movie.id === 1 ? { ...movies, title: "John Wick 4" } : movie
      )
    );
  };

  return (
    <section>
      {movies.map((movie) => (
        <li key={movie.id}>
          {movie.title} - Rating {movie.ratings}
        </li>
      ))}

      <button onClick={handleClick}>Change name</button>
    </section>
  );
}

export default App;
