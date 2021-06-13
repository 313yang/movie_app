import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import { Container, Movies } from "../styles/MovieSection";
import Loading from "../styles/Loading";

function Home() {
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=like_count"
    );
    return setMovies(movies, setLoading(false));
  };
  useEffect(getMovies);
  return (
    <Container>
      {isLoading ? (
        <Loading>
          <div>Loading...</div>
        </Loading>
      ) : (
        <Movies>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
              bg={movie.background_image_original}
            />
          ))}
        </Movies>
      )}
    </Container>
  );
}

export default Home;
