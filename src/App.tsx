import React from 'react';
import LoginButton from "./components/LoginButton";
import Profile from "./components/Profile";
import LogOut from "./components/LogOut";

const App: React.FC = () => {

  const user = localStorage.getItem("AuthProver@user");

  return (
    <>  
        {user === null ? <LoginButton /> : (
            <>
                <LogOut />
                <Profile />
            </>
        )}
    </>
  );
}

export default App;
