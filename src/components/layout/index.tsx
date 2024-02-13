import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default Layout;