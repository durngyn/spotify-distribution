import { Route, Routes } from 'react-router-dom';
import './App.css';
import CallbackPage from './components/CallbackPage';
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
          <Route path="/" element={<GraphPage />} />
          <Route path="spotify-distribution/privacy-policy" element={<PrivacyPage />} />
          <Route path="spotify-distribution/callback" element={<CallbackPage />} />
          <Route path="/*" element={<NullPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
