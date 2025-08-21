import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import UserRegister from './pages/UserRegister';
import UserLogin from './pages/UserLogin';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/user-register"
          element={<UserRegister />}
        />
        <Route
          path="/user-login"
          element={<UserLogin />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route
          path="*"
          element={<ErrorPage />}
        />
      </Routes>
    </>
  );
}

export default App;
