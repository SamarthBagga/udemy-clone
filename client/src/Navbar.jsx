import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-100 px-4 py-2 shadow">
      <div className="flex items-center">
        <img src="logo.png" alt="Logo" className="h-8 mr-4" />
        <a href="/categories" className="text-gray-700 font-medium">Categories</a>
      </div>
      <div className="flex items-center flex-grow">
        <input type="text" placeholder="Search" className="py-2 px-5 ml-2 rounded-full bg-gray-200 text-gray-700 flex-grow mr-4" />
        <button className="text-red-600 py-1 px-3 text-md rounded-md bg-red-200"><a href='/login'>Sign in</a></button>
        <button className="text-black py-1 px-3 text-md rounded-md bg-gray-300 ml-4"><a href='/signup'>Sign up</a></button>
      </div>
    </nav>
  );
};

export default Navbar;
