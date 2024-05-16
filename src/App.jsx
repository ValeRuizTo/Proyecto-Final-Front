import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Login, Signin, Other, Success, Tweets} from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/success" element={<Success />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Other />} />
      </Routes>
    </Router>
  );
}

export default App;