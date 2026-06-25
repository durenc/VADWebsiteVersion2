
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import GetVeinyAndFormulaPage from './pages/GetVeinyAndFormulaPage';
import VeinyAhhDripPage from './pages/VeinyAhhDripPage';
import StoryFaqConnectPage from './pages/StoryFaqConnectPage';



// Scroll to anchor on route change for combined pages
function ScrollToHash() {
  const { hash, pathname } = useLocation();
  React.useEffect(() => {
    // If there's a hash, scroll to the anchor on the page
    if (hash) {
      const id = hash.replace('#', '');
      // small timeout to allow route content to render
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
      return;
    }

    // No hash — scroll to top of page on pathname change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [hash, pathname]);
  return null;
}



const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col selection:bg-blood-red selection:text-white font-['Inter'] overflow-x-hidden">
          <div className="fixed inset-0 z-[-1]" style={{ backgroundImage: `url('/images/VeinsBackground.png')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', filter: 'brightness(0.9)' }}></div>
          <Navbar />
          <ScrollToHash />
          <div style={{ paddingTop: '80px' }}>
            <Routes>
              {/* Home route disabled for now. Re-enable by restoring the HomePage route here. */}
              {/* <Route path="/" element={<HomePage />} /> */}
              <Route path="/" element={<GetVeinyAndFormulaPage />} />
              {/* Formula route */}
              <Route path="/formula" element={<GetVeinyAndFormulaPage />} />
              <Route path="/drip" element={<VeinyAhhDripPage />} />
              <Route path="/about" element={<StoryFaqConnectPage />} />
              <Route path="/get-veiny" element={<Navigate to="/formula" replace />} />
              <Route path="/veiny-drip" element={<Navigate to="/drip" replace />} />
              <Route path="/story-faqs" element={<Navigate to="/about" replace />} />
            </Routes>
          </div>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
