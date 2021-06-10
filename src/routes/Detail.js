import { Component } from "react";
import MovieDetail from "../styles/MovieDetale";

class Detail extends Component {
  componentDidMount() {
    const { location, history } = this.props;
    console.log(location);
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const {
      location: { state },
    } = this.props;
    if (state) {
      return (
        <MovieDetail>
          <div>
            <img src={state.bg} alt={state.title} />
          </div>
          <div>
            <img src={state.poster} alt={state.title} title={state.title} />
            <h1>{state.title}</h1>
            <h3>{state.year}</h3>
            <ul>
              {state.genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
            <p>{state.summary}</p>
          </div>
        </MovieDetail>
      );
    } else {
      return null;
    }
  }
}
export default Detail;
