import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NpcCreate from './pages/NpcCreate';
import PcCreate from './pages/PcCreate';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path = '/' exact Component={Home} />
        <Route path = '/npc-create' exact Component={NpcCreate} />
        <Route path = '/pc-create' exact Component={PcCreate} />
      </Routes>
    </Router>
  );
}

export default App;
