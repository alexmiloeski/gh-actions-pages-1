import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <nav>This is the app!</nav>
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/help">Help</Link>
      </div>
    </>
  );
}

export default App;
