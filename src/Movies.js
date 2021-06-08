import PropTypes from "prop-types";
import { MovieStyle } from "./styles/MovieStyle";

function Movie({ year, poster, title }) {
  return (
    <MovieStyle>
      <a href="#">
        <img src={poster} alt={title} title={title} />
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
      </a>
    </MovieStyle>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};
export default Movie;
