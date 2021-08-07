//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.7.6;

interface Iregister{
    function get(address _user) external view returns (bool);
}


contract MyContract{

    function count(Iregister _register, address _user) public view returns (bool){
        return _register.get(_user);
    }
    
}