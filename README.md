# Install Truffle
___
install [nodejs](https://nodejs.org/en/)
___
After install [truffle](https://www.trufflesuite.com/docs/truffle/quickstart)

1. install global 
    
    ```
    $ npm install -g solc
    ```

    ```
    $ npm install -g truffle
    ```
    
2. see the version
    ```sh
    $ truffle version
    ```
___
## create project

1. create directory
    ```sh
    $ mkdir firstContract
    $ cd firstContract
    ```
2. create project truffle
    ```sh
    $ npm init
    ```
## compile project
    ```sh
    $ truffle compile
    ```
## deploy contract  
   before run
   
    ```sh
    $ truffle develop
    ```

    ```sh
    $ truffle migrate
    ```

    if you need reset 
    ```sh
    $ truffle migrate --reset
    ```

##  test
    ```sh
    $ truffle test
    ```

---
# testnet with Binance
1. get tokens faucet [Binance BNB](https://testnet.binance.org/faucet-smart)

2. validate tokens in [testnet Binance](https://testnet.bscscan.com/)

3. install hdwallet
```
$ npm install @truffle/hdwallet-provider
```

4. In the file `truffle-config.js` add

```js
bscTestnet: {
      provider: () => new HDWalletProvider(privateKeys, 
      `https://data-seed-prebsc-1-s1.binance.org:8545/`),
      network_id: 97,       
      skipDryRun: true
    }
```

4. run 
```
$ truffle migrate --reset --network bscTestnet
```
---

