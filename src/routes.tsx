
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Protect from './pages/Protect';
import Appliances from './pages/Appliances';
import Financial from './pages/Financial';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import ApplianceUpgrade from './pages/ApplianceUpgrade';
import ScoreImprovement from './pages/ScoreImprovement';
import Buy from './pages/Buy';
import Garage from './pages/Garage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/protect" element={<Protect />} />
      <Route path="/appliances" element={<Appliances />} />
      <Route path="/appliances/upgrade" element={<ApplianceUpgrade />} />
      <Route path="/financial" element={<Financial />} />
      <Route path="/score" element={<ScoreImprovement />} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/garage" element={<Garage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
