import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Greeting from './pages/Greeting';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Greeting />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
