import React, { FC, useEffect, useState } from 'react';

import {
  helloworldContract,
  connectWallet,
  updateMessage,
  loadCurrentMessage,
  getCurrentConnectedWallet,
} from "@/utils/interactions.ts";

export const HelloWorld: FC = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("No connection to the network.");
  const [newMessage, setNewMessage] = useState("");

  // useEffect(async () => {
    
  // }, []);
  function addSmartContractListener() {

  }

  function addWalletListener() {}

  const connectWalletPressed = async () => {
  }

  const onUpdatePressed = async () => {}

  return (
    <div id="container">
      {/* <img id="logo" src={alchemylogo}></img> */}
      <button id="walletButton" onClick={connectWalletPressed}>
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>

      <h2 className='pt-2'>Current Message:</h2>
      <p>{message}</p>

      <h2 className='pt-6'>New Message:</h2>

      <div>
        <input
          type="text"
          placeholder="Update the message in your smart contract."
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <p id="status">{status}</p>

        <button id="publish" onClick={onUpdatePressed}>
          Update
        </button>
      </div>
    </div>
  );
};
