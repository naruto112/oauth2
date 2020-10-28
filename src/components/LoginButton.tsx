/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const components: React.FC = () => {
const {loginWithRedirect, user} = useAuth0();
const userCache = localStorage.getItem("AuthProver@user");

    useEffect(() => {
        loginWithRedirect();
        localStorage.setItem("AuthProver@user", JSON.stringify(user));
    }, [loginWithRedirect, user, userCache])

  return (
      <div></div>
  );
}

export default components;