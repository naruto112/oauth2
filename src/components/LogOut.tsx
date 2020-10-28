/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback } from 'react';
import { useAuth0 } from "@auth0/auth0-react";


const LogOutButton: React.FC = () => {
    const { logout } = useAuth0();

    const handleLogout = useCallback(() => {
        logout();
        localStorage.clear();
    }, [logout])

  return (
      <button onClick={() => handleLogout()}>
          LogOut
      </button>
  );
}

export default LogOutButton;