function Food({ fav }) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello~~!</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="This is masic" />
      <Food fav="React power" />
    </div>
  );
}

export default App;
