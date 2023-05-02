import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {DEC, RES,INC} from "./redux/action";

function App() {
  let store = useSelector(state => state);
  console.log(store);
    let dispatch = useDispatch();
  const increment = () => {
dispatch(increment());
  };
  const decrement = () => {
dispatch(decrement());
  };
    const reset = () => {
        dispatch({type:RES})
    };

    return (
    <div className="App">
        <h1>{store}</h1>
      <button  onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
    </div>
  );
}

export default App;
