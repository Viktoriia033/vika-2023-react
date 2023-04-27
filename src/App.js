import logo from './logo.svg';
import './App.css';
import {Users} from "./components/users";
import {useState} from "react";
import {Comments} from "./hw-5/components-coment/comments";
import {Posts} from "./hw-5/components-post/posts";

function App() {
    const [flag,setFlag] = useState(true);
  return (
    <div className="App">
        {/*{flag&&<Comments/>}*/}
        {/*<button onClick={() => setFlag(prevState => !prevState)}>hideComment</button>*/}
        {flag&&<Posts/>}
        {<button onClick={()=> setFlag(prevState => !prevState)}>HidePosts</button>}




    </div>
  );
}

export default App;
