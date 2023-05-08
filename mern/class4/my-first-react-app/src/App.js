import logo from './logo.svg';
import './App.css';
import Home from './Views/Home';
import Button from './Components/Button';

function App() {
  const student = 'Sergio';
  return (
    <div className="App">
      <div>
        <Home />
        <Button text={"Volver al home"} />
      </div>
    </div>
  );
}

export default App;
