import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaBaixar from './pages/PaginaBaixar/index';
import PaginaTermos from './pages/PaginaTermos/index';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={<PaginaBaixar />} />
        <Route path = '/TermosdeUso' element={<PaginaTermos />} />
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
