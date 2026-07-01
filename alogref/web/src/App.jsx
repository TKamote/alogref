
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CvPage from './pages/CvPage.jsx';
import { Toaster } from '@/components/ui/sonner';

function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

  return (
    <Router basename={basename}>
      <CvPage />
      <Toaster />
    </Router>
  );
}

export default App;
