import logo from './imagens/logo.png';
import './App.css';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Pokemon/>
    </div>
  );
}

export default App;
