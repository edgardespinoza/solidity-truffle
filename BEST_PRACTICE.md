## Best practice

1. Security analisys with Mythril

```sh
$ docker pull mythril/myth
```

```sh
$ docker run -v $(pwd)/contracts/:/tmp/ mythril/myth analyze /tmp/MyContract.sol --solv 0.7.6
```

2. use Solhint
3. Turn on Solidity optimization
```js
    solc: {
      version: "0.7.6",    // Fetch exact version from solc-bin (default: truffle's version)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: false,
          runs: 200
        },
       
      }
    }
```