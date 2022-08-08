import './App.css';
import {BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import NavBarra from './components/navbar/Nav-Bar';
import Carrossel from './components/carrossel/Carrossel';
import Twentyfour from './components/twenty-four/Twenty-four';
import MusicaAuth from './components/musica/MusicaAuth';
import MusicaAuthed from './components/musica/MusicaAuthed';

function App() {
  return (
      <Router>
        <div className='app'>
          <div className='app-nave'>
            <NavBarra />  
          </div>
          <div className='app-content'>
            <Routes>
              <Route path="/" element={<Carrossel/>} />
              <Route path="/twentyfour" element={<Twentyfour/>} />
              <Route path="/authed"  element={<MusicaAuthed/>} />
              <Route path="/musica" element={<MusicaAuth/>} />
            </Routes>
          </div>
        </div>  
      </Router> 
  );
}

export default App;