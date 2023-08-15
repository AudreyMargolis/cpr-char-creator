import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NpcCreate from './pages/NpcCreate';
import PcCreate from './pages/PcCreate';
import StreetRat from './components/StreetRat';
import CompletePackage from './components/CompletePackage';
import Edgerunner from './components/Edgerunner';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path = '/' exact Component={Home} />
        <Route path = '/npc-create' exact Component={NpcCreate} />
        <Route path = '/pc-create' exact Component={PcCreate} />
        <Route path = '/street-rat' exact Component={StreetRat} />
        <Route path = '/complete-package' exact Component={CompletePackage} />
        <Route path = '/edgerunner' exact Component={Edgerunner} />
      </Routes>
    </Router>
  );
}

export default App;
