import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import Profile from './pages/Profile/profile';
import History from './pages/History/history';
import Daily from './pages/Daily/daily';

function App() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/history" element={<History />} />
      <Route path="/daily" element={<Daily />} />

      <Route path="/" element={<Navigate to="/profile" />} //profile is the start page
      /> 
    </Routes>
  );
}

export default App;
