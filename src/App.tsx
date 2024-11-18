import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AttendanceMarking from './components/AttendanceMarking';
import Reports from './components/Reports';
import Onboarding from './components/Onboarding';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/attendance" element={<AttendanceMarking />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/onboarding" element={<Onboarding />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;