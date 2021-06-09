import PropTypes from "prop-types";
import { MovieStyle } from "../styles/MovieStyle";

function Movie({ year, poster, title, genres }) {
  return (
    <MovieStyle>
      <a href="/#/about">
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
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
