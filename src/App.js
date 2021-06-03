import PropTypes from "prop-types";

function Hobby({ fav, img }) {
  return (
    <div>
      <h2>I love {fav}</h2>
      <h6>img = {img}</h6>
    </div>
  );
}
Hobby.propTypes = {
  fav: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
const favList = [
  {
    id: 1,
    name: "movie",
    img: "dfdf",
  },
  {
    id: 2,
    name: "youtube",
    img: "uou",
  },
  {
    id: 3,
    name: "twich",
    img: "wiwi",
  },
];
function App() {
  return (
    <div>
      {favList.map((fav) => (
        <Hobby key={fav.id} fav={fav.name} img={fav.img} />
      ))}
    </div>
  );
}

export default App;
