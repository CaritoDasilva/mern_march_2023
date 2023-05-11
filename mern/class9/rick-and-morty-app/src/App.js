import logo from './logo.svg';
import './App.css';
import Home from './Views/Home';
import { Route, Routes } from 'react-router-dom';
import DetailCharacter from './Components/DetailCharacter';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/personaje/:id' element={<DetailCharacter/>} />
      </Routes>
    </div>
  );
}

export default App;
