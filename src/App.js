
import {Link, Route, Routes} from "react-router-dom";
import Todos from "./components-hw4/todos/todos";
import Coments from "./components-hw4/coments/coments";
import Info from "./components-hw4/general-comonents/info";
import Albums from "./components-hw4/album/albums";
import ComentsDetails from "./components-hw4/coments/comentsDetails";

function App() {
  return (
    <div>
      <div>
              <Link to={'/info'}>Info</Link>
      </div>
      <div>
          <Routes>
              <Route path={'/info'} element={<Info/>}>
                  <Route path={'/info/todos'} element={<Todos/>}/>
                  <Route path={'/info/albums'} element={<Albums/>}/>
                  <Route path={'/info/coments'} element={<Coments/>}>
                      <Route path={':id'} element={<ComentsDetails/>}/>
                      </Route>
              </Route>
          </Routes>
      </div>
    </div>
  );
}

export default App;
