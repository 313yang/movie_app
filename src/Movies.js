import PropTypes from "prop-types";

function Movie({ id, year, summary, poster, title }) {
  return <h2>{title}</h2>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};
export default Movie;
