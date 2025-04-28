import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Products from './pages/Products';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">CDW Clone</Link>
        <div className="space-x-4">
          <Link to="/products" className="hover:underline">Products</Link>
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/signup" className="hover:underline">Sign Up</Link>
        </div>
      </nav>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <footer className="bg-gray-200 text-center p-4 text-sm text-gray-600">
        &copy; 2025 CDW Clone. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
