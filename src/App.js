import logo from './logo.svg';
import './App.css';

function App() {
    let classNameItem = 'card';
  return (
    <div className="App">
      <div className={classNameItem}>
          <h2>Homer</h2>
          <img src="https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png" />
      </div>
        <div className={classNameItem}>
            <h2>Marg</h2>
            <img src="https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png" />
        </div>
        <div className={classNameItem}>
            <h2>Bart</h2>
            <img src="https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png" />
        </div>
        <div className={classNameItem}>
            <h2>Lisa</h2>
            <img src="https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png" />
        </div>
          </div>
  );
}

export default App;
