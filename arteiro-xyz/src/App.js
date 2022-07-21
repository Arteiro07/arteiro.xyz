import './App.css';
import {BrowserRouter as Router, Routes, Link, Route  } from 'react-router-dom';
import NavBarra from './components/navbar/Nav-Bar';
import Carrossel from './components/carrossel/Carrossel';
import Twentyfour from './components/twenty-four/Twenty-four';
import Padel from './components/padel/Padel';
import Musica_Auth from './components/musica/Musica_Auth';
import Musica_Authed from './components/musica/Musica_Authed';
import Tournament from './components/padel/Tournament';
import Stats from './components/padel/Stats';
import Single from './components/padel/Single';

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
              <Route path="/authed"  element={<Musica_Authed/>} />
              <Route path="/musica" element={<Musica_Auth/>} />
              <Route path='/padel/tournament' element={<Tournament/>}/>
              <Route path='/padel/single' element={<Single/>}/>
              <Route path='/padel/stats' element={<Stats/>}/>
              <Route path="/padel" element={<Padel/>} />
            </Routes>
          </div>
        </div>  
      </Router> 
  );
}

export default App;