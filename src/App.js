import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './componets/header/header';
import Home from './pages/home/home';
import Destination from './pages/destination/destination';
import Crew from './pages/crew/crew'; 
import Technology from './pages/technology/technology';
 
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='' element={ <Home /> } />
        <Route path='destination' element={ <Destination /> } />
        <Route path='crew' element={ <Crew /> } />
        <Route path='technology' element={ <Technology /> } />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// support Routes help site - https://ru.hexlet.io/blog/posts/react-router-v6