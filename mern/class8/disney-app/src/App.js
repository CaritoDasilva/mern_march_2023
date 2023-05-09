import './App.css';
import DetailCharacter from './Views/DetailCharacter';
import Home from './Views/Home';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/personaje/:id" element={<DetailCharacter/>} />
      </Routes>
    </div>
  );
}

export default App;
