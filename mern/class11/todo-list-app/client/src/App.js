import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import { Home } from './Views/Home';
import EditionView from './Views/EditionView';
import CreationView from './CreationView';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/editar-tarea/:id' element={<EditionView/>} />
        <Route path='/crear-tarea' element={<CreationView/>} />
      </Routes>
    </div>
  );
}

export default App;
