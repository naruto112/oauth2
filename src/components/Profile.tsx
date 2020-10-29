/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const components: React.FC = () => {
    const {user} = useAuth0();

    localStorage.setItem("AuthProver@user", JSON.stringify(user));

  return (
      <div>
          {JSON.stringify(user, null, 2)}
      </div>
  );
}

export default components;