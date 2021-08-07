const MyContract = artifacts.require("MyContract.sol");

module.exports = function (deployer) {
  deployer.deploy(MyContract, '0xB1aA41c465c57DcfCC2a38f921d8B12Ee2e810c8');
};
