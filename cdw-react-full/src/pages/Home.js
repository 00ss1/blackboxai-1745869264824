import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Top navigation buttons for Login and Signup */}
      <div className="flex justify-end space-x-4 mb-6">
        <Link
          to="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Sign Up
        </Link>
      </div>

      {/* Categories Section */}
      <section className="mb-12">
        <div className="flex flex-wrap justify-center gap-6 text-lg font-semibold text-gray-700">
          <a href="#" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition cursor-pointer">
            Hardware
          </a>
          <a href="#" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition cursor-pointer">
            Software
          </a>
          <a href="#" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition cursor-pointer">
            Services
          </a>
          <a href="#" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition cursor-pointer">
            IT Solutions
          </a>
          <a href="#" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition cursor-pointer">
            Brands
          </a>
          <a href="#" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition cursor-pointer">
            Research Hub
          </a>
        </div>
      </section>

      {/* Existing content */}
      <h1 className="text-4xl font-bold mb-6">Welcome to CDW Clone</h1>
      <p className="mb-4">
        This is the homepage. You can browse products, login, or sign up using the navigation above.
      </p>
      <p>
        This React app is a clone of the CDW website homepage with login, signup, and product pages.
      </p>
    </div>
  );
};

export default Home;
