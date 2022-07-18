import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import About from './screens/About';
import Projects from './screens/Projects';
import Questions from './screens/Questions';
import ReactDoc from './screens/ReactDoc';
import NavBarElements from './components/NavBarElements';

function App() {
  return (
    <Router>
      <NavBarElements/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Questions" element={<Questions/>}/>
        <Route path="/ReactDoc" element={<ReactDoc/>}/>
      </Routes>
    </Router>
  );
}

export default App;
