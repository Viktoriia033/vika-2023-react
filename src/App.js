import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Todos from "./components-hw4/todos/todos";

function App() {
  return (
    <div>
  <div>
    <h2>Menu</h2>
    <ul>
      <li>
        <Link to={'/'}>Todos</Link>
      </li>
    </ul>
    <div>
      <Routes>
        <Route path={'/'} element={<Todos/>}/>
      </Routes>
    </div>
  </div>
    </div>
  );
}

export default App;
