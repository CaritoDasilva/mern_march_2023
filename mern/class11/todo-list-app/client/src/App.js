import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import { Home } from './Views/Home';
import EditionView from './Views/EditionView';
import CreationView from './CreationView';
import { Register } from './Views/Register';
import { LoginTask } from './Components/LoginTask';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/editar-tarea/:id' element={<EditionView/>} />
        <Route path='/crear-tarea' element={<CreationView/>} />
        <Route path='/registro-usuario' element={<Register/>} />
        <Route path='/Login-usuario' element={<LoginTask/>} />
      </Routes>
    </div>
  );
}

export default App;
