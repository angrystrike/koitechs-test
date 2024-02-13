import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">Find GitHub Resume</h1>
        <div className="flex items-center justify-center mb-4">
          <input
            type="text"
            className="px-4 py-2 mr-2 w-64 border rounded-lg outline-none"
            placeholder="Enter GitHub username"
          />
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Generate</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
