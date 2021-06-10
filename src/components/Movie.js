import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MovieStyle } from "../styles/MovieStyle";

function Movie({ bg, id, year, poster, title, genres, summary }) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          year,
          title,
          summary,
          poster,
          genres,
          bg,
        },
      }}
    >
      <MovieStyle>
        <div>
          <img src={poster} alt={title} title={title} />
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
        </div>
      </MovieStyle>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  bg: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
