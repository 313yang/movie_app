import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import SignIn from "./routes/SignIn";
import Home from "./routes/Home";
import GlobalStyle from "./styles/GlobalStyle";
import Detail from "./routes/Detail";

function App() {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/login" component={SignIn} />
        <Route path="/movie/:id" component={Detail} />
      </HashRouter>
    </>
  );
}
export default App;
