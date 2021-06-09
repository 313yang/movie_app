import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Login from "./routes/Login";
import Home from "./routes/Home";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/login" component={Login} />
      </HashRouter>
    </>
  );
}
export default App;
