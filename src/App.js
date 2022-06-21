import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './pages/Header';
import Loader from "./components/Loader";
import Detail from './pages/Detail';
import ContextProvider from './context';

function App() {
  return (
    <Router>
      <Loader />
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </ContextProvider>
    </Router>
  );
}

export default App;
