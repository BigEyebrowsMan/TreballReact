import logo from './logo.svg';
import './App.css';
import Test from './test/test.js';
import Formulari from './test/formulari.js';
import Fimg from './test/fimg.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Test/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Formulari/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React yay
        </a>
        <Fimg/>
      </header>
    </div>
  );
}



export default App;
/*
export default function MyApp(){
  return(
    <div>
      <h1>Welcome to my app</h1>
      <MyButton/>
    </div>
  )
}*/