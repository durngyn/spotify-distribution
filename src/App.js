import { Route, Routes } from 'react-router-dom';
import './App.css';
import GraphPage from './components/GraphPage';
import Navigation from './components/Navigation';
import NullPage from './components/NullPage';
import PrivacyPage from './components/PrivacyPage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="content-container">
        <Routes>
          <Route path="/graphify" element={<GraphPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/*" element={<GraphPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
