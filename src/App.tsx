import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DailyPoints from './pages/DailyPoints';
import DailyCode from './pages/DailyCode';
import DailyMission from './pages/DailyMission';
import Battle from './pages/Battle';
import Bet from './pages/Bet';
import Quiz from './pages/Quiz';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dailypoints" element={<DailyPoints />} />
        <Route path="/dailycode" element={<DailyCode />} />
        <Route path="/dailymission" element={<DailyMission />} />
        <Route path="/battle" element={<Battle />} />
        <Route path="/bet" element={<Bet />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
