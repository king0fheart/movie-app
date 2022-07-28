import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import MovieDetail from './components/MovieDetail';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:imdbID" exact element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
