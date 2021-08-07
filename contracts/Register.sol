//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.7.6;

import "./IRegister.sol";

contract Register is IRegister{
    mapping(address => bool) private users;

    function save(address _user) external override {
        users[_user] = true;
    }
    
    function get(address _user) external  override view returns (bool){
        return  users[_user];
    }
    
}