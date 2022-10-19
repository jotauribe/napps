import { useEffect, useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";

import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios
        .get("http://localhost:3001/movies")
        .catch(() => setError("Error al obtener listado. Intente nuevamente"));
      setMovies(data);
    };

    fetchMovies();
  }, []);

  return (
    <Container className="App">
      <ul className="movies">
        {error ? (
          <Alert
            severity="error"
            action={
              <Button color="inherit" size="small" onClick={() => setError("")}>
                Aceptar
              </Button>
            }
          >
            This is a success alert — check it out!
          </Alert>
        ) : (
          movies.map((movie) => (
            <li>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  title={movie.name}
                  subheader={`${movie.type.toUpperCase()} - ${movie.year}`}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={movie.posterImageUrl}
                  alt="Poster"
                />
              </Card>
            </li>
          ))
        )}
      </ul>
    </Container>
  );
}

export default App;
