import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
  let store = useSelector(state => state);
  console.log(store);
    let dispatch = useDispatch();
  const increment = () => {
dispatch({type:'INC',payload:2});
  };
  const decrement = () => {
dispatch({type:'DEC'})
  };
    const reset = () => {
        dispatch({type:'reset'})
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
