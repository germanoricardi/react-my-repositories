import { BrowserRouter, Routes, Route } from "react-router-dom";


import Main from './pages/Main';
import Repositorio from './pages/Repositorio';

export default function AppRoutes(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/repositorio/:repositorio" element={<Repositorio />} exact />
      </Routes>
    </BrowserRouter>
  );
}