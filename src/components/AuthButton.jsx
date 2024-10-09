import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AuthButton = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div className="flex justify-center mt-6">
      {isAuthenticated ? (
        <button
          className="bg-red-600 text-white font-bold py-2 px-4 rounded shadow-md hover:bg-red-700 transition duration-300"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Logout
        </button>
      ) : (
        <button
          className="bg-black text-white font-bold py-2 px-4 rounded shadow-md hover:bg-grey transition duration-300"
          onClick={loginWithRedirect}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default AuthButton;
