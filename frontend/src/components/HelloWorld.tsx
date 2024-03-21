import React, { FC, useEffect, useState } from 'react';

import {
  helloworldContract,
  connectWallet,
  updateMessage,
  loadCurrentMessage,
  getCurrentConnectedWallet,
} from "@/utils/interactions.ts";

import logo from '@/assets/bro.png'

export const HelloWorld: FC = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("No connection to the network.");
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const loadMessage = async () => {
      const message = await loadCurrentMessage();
      setMessage(message);
    };
  
    loadMessage();
    addSmartContractListener();
  }, []);

  function addSmartContractListener() {
    helloworldContract.on('UpdateMessages', (data, event) => {
      setMessage(data.returnValues[1]);
      setNewMessage("");
      setStatus("Your message has been updated!");
    })
  }

  function addWalletListener() {
    return;
  }

  const connectWalletPressed = async () => {
  }

  const onUpdatePressed = async () => {}

  return (
    <div id='container' 
      className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[50vh] border-4 border-blue-900 shadow p-6'
    >
      <div className='flex justify-between items-center h-[10%] my-7'>
        <img id='logo' src={logo} className='w-18 h-16' />
        <button 
          id='walletButton'
          onClick={connectWalletPressed} 
          className='border-4 border-blue-600 text-blue-800 bg-white hover:bg-blue-200 hover:text-black rounded-none p-2 px-4 font-semibold'
        >
          {walletAddress.length > 0 ? (
            "Connected: " +
            String(walletAddress).substring(0, 6) +
            "..." +
            String(walletAddress).substring(38)
          ) : (
            <span>Connect Wallet</span>
          )}
        </button>
      </div>

      <h2 className='mt-10 py-2 text-xl font-bold'>Current Message:</h2>
      <p className='text-sm'>{message}</p>

      <h2 className='pt-10 pb-2 text-xl font-bold'>New Message:</h2>
      <div>
        <input
          type="text"
          placeholder="Update the message in your smart contract."
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
          className='w-[72%] py-2 mb-8 border-b border-gray-300'
        />
        <p id="status">{status}</p>

        <button 
          id="publish" 
          onClick={onUpdatePressed}
          className='border-4 border-blue-600 text-white bg-blue-800 hover:bg-blue-200 hover:text-black rounded-none p-1 mt-10 w-[30%] font-semibold'
        >
          Update
        </button>
      </div>
    </div>
  );
};
