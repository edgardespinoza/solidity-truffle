//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.7.6;

interface IRegister{
    /**
     * save 
     */
    function save(address _user) external ;
    
    /**
     * get user
     */
    function get(address _user) external view returns (bool);
    
}