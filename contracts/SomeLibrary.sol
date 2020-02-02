pragma solidity ^0.5.0;

contract SomeLibrary {
    uint public version = 1;

    function setVersion(uint newVersion) public {
        version = newVersion;
    }

    function getMsgSender() public view returns(address){
        return msg.sender;
    }
}