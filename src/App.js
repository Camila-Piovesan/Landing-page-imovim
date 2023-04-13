import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaBaixar from './pages/PaginaBaixar/index';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={<PaginaBaixar />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
