import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import React, { useState } from "react";
import { Login } from "../components/login";
import { useSDK } from "@thirdweb-dev/react";

const Home: NextPage = () => {
  const [isOpen, setisOpen] = useState(false);
  const sdk = useSDK();
  console.log(sdk?.getProvider());
  console.log(sdk?.getSigner());
  return (
    <div>
      {!isOpen && (
        <div>
          <p>Login Using Email</p>
          <button onClick={() => setisOpen(true)}> Login </button>
        </div>
      )}
      <Login isOpen={isOpen} onClose={() => setisOpen(false)} />
    </div>
  );
};

export default Home;
