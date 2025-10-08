import React from 'react';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainStructure from './components/MainStructure';
import Dashboard from './pages/Dashboard';
import Announcement from './pages/Announcement';
import Courses from './pages/Courses';
import Gradebook from './pages/Gradebook';
import Performance from './pages/Performance';
import Schedule from './pages/Schedule';

function App() {
  let [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    console.log(isLogged);
  }, [isLogged]);

  interface RequireAuthProps {
    children: React.ReactNode;
  }
  function RequireAuth({ children }: RequireAuthProps) {
    return isLogged ? (
      <MainStructure>{children}</MainStructure>
    ) : (
      <Home setLog={setIsLogged} />
    );
  }
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home setLog={setIsLogged} />} />
        <Route
          path='/dashboard'
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route
          path='/announcement'
          element={
            <RequireAuth>
              <Announcement />
            </RequireAuth>
          }
        />
        <Route
          path='/courses'
          element={
            <RequireAuth>
              <Courses />
            </RequireAuth>
          }
        />
        <Route
          path='/schedule'
          element={
            <RequireAuth>
              <Schedule />
            </RequireAuth>
          }
        />
        <Route
          path='/performance'
          element={
            <RequireAuth>
              <Performance />
            </RequireAuth>
          }
        />
        <Route
          path='/gradebook'
          element={
            <RequireAuth>
              <Gradebook />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
