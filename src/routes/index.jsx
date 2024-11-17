// src/routes/index.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';

const AppRoutes = () => {
  const isAuthenticated = !!localStorage.getItem('token');
  
  return (
    <Routes>
      <Route 
        path="/login" 
        element={!isAuthenticated ? <Login /> : <Navigate to="/" />} 
      />
      <Route 
        path="/register" 
        element={!isAuthenticated ? <Register /> : <Navigate to="/" />} 
      />
      <Route 
        path="/" 
        element={isAuthenticated ? <Home /> : <Navigate to="/login" />} 
      />
    </Routes>
  );
};

export default AppRoutes;