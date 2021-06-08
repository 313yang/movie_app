import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movies";
import GlobalStyle from "./styles/GlobalStyle";
import { Container, Movies } from "./styles/MovieSection";
import { Navigator, NavTitle } from "./styles/Navigator";

class App extends Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=like_count"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <>
        <GlobalStyle />
        <Navigator>
          <NavTitle>
            <h3>Netflex</h3>
          </NavTitle>
          <div>
            <p>Login</p>
          </div>
        </Navigator>
        <Container>
          {isLoading ? (
            <div>
              <span className="loader__text">Loading...</span>
            </div>
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
                />
              ))}
            </Movies>
          )}
        </Container>
      </>
    );
  }
}

export default App;
