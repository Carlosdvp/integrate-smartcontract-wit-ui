// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.3;

/*
This is a super simple smart contract that stores a message upon creation 
and can be updated by calling the update function.
*/

contract HelloWorld {
  event UpdateMessages(string oldString, string newString);

  string public message;

  constructor(string memory initMessage) {
    message = initMessage;
  }

  function update(string memory newMessage) public {
    string memory oldMessage = message;
    message = newMessage;
    emit UpdateMessages(oldMessage, newMessage);
  }
}
