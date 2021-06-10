import { Link } from "react-router-dom";
import { Navigator, NavTitle } from "../styles/Navigator";

function Navigation() {
  return (
    <Navigator>
      <Link to="/">
        <NavTitle>NETFLEX</NavTitle>
      </Link>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </Navigator>
  );
}
export default Navigation;
