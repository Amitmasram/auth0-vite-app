import React from 'react';
import AuthButton from './components/AuthButton';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-3xl font-bold mb-4">Welcome to Your App!</h1>
      <p className="mb-8 text-gray-200">Please log in to access your account.</p>
      <AuthButton />
    </div>
  );
};

export default App;
