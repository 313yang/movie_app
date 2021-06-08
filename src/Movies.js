import PropTypes from "prop-types";
import { MovieStyle } from "./styles/MovieStyle";

function Movie({ year, poster, title }) {
  return (
    <MovieStyle>
      <a href="#top">
        <img src={poster} alt={title} title={title} />
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
      </a>
    </MovieStyle>
  );
}

Movie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  summary: PropTypes.string,
  poster: PropTypes.string,
  year: PropTypes.number,
  background: PropTypes.string,
};
export default Movie;
