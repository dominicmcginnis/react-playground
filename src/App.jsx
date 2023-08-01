import './App.scss';
import Nav from './components/Nav';
import ToDo from './components/ToDo';
import AppRoutes from './components/AppRoutes';
import { Outlet } from "react-router-dom";
import { useEffect, useState, createContext } from 'react';

function App() {
  return (
    <>
      <main className="container">
        <div className="grid">
          <AppRoutes />
          <aside>
            <Nav />
          </aside>
          <Outlet />
        </div>      
      </main>
    </>
  )
}

export default App
