/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback } from 'react';
import cryptoRandomString from "crypto-random-string";
import crypto from "crypto";
import base64url from "base64url";

const LoginButton: React.FC = () => {

  const codeVerifier = useCallback(() => {
    return cryptoRandomString({length: 80, type: "base64"}) + "-_.~"; 
  }, [])


  const codeChallange = useCallback(() => {
      const codeVerf = codeVerifier();
      const codeChall = crypto.createHash('sha256').update(codeVerf).digest();
      const baseCodeChall = base64url.encode(codeChall);
      console.log(baseCodeChall);
  }, [codeVerifier])

  return (
      <div>
          <button onClick={() => codeChallange()}>Login</button>
      </div>
  );
}

export default LoginButton;


// randomstring.generate(48)
// return base64.encode(rand) + "-_.~"