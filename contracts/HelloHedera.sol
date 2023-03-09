//SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract HelloHedera is Pausable, Ownable {

    event SetMessage(string message);
    string private message;

    constructor() {
        message = "Hello, Hedera!";
    }

    function getMessage() public view returns (string memory) {
        return message;
    }

    function setMessage(string memory newMessage) public whenNotPaused onlyOwner {
        message = newMessage;

        emit SetMessage(message);
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

}
