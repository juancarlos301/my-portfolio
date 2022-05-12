import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './pages/Header';
import Loader from "./components/Loader";

function App() {
  return (
    <Router>
      <Loader />
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </Router>
  );
}

export default App;
