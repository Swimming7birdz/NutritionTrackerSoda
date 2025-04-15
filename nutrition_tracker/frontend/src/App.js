import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import Profile from './pages/Profile/profile';
import History from './pages/History/history';
import Create_Daily from "./pages/Create_Daily/create_daily";
import View_Daily from "./pages/View_Daily/view_daily";

function App() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/history" element={<History />} />
      <Route path="/create_daily" element={<Create_Daily />} />
      <Route path="/view_daily" element={<View_Daily />} />

      <Route path="/" element={<Navigate to="/profile" />} //profile is the start page
      /> 
    </Routes>
  );
}

export default App;
