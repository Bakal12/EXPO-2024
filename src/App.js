import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import M_home from './pages/M_home';
import Enconstruccion from './pages/Enconstruccion';
import Ds from './pages/Ds';

function App() {

  return (
    <div className={"app"}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/home" />}
          />
          <Route
            path='/home/ds/proyectorag'
            element={
              <Enconstruccion />
            }
          />
          <Route
            path='/home/ds/proyectoragcodigo'
            element={
              <Enconstruccion />
            }
          />
          <Route
            path="/home"
            element={
              <M_home />
            }
          />
          <Route
            path="/home/ds"
            element={
              <Ds />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
