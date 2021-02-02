import logo from './logo.svg';
import './App.css';

const name = 'Valeria';
const age = 20;
let sum = 5 + 8;
let num;
if (sum==13) num = true;
let something = false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
          color: 'green'
        }}>
          Hello world!!!!!!
        </p>
        <p>
         значение переменной name: {name}
        </p>
        <p>
         число: {age} 
        </p>
        <p>
         результат арифметической операции: {sum}
        </p>
        <p>
         результат логической операции: {num && 'true'}
        </p>
        <p>
         тернарное условие: {something ? 'something is true' : 'something is false'}
        </p>
        <p>
        {undefined} {null} {false} {true} 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
