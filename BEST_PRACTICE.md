## Best practice

1. Security analisys with Mythril

```sh
$ docker pull mythril/myth
```

```sh
$ docker run -v $(pwd)/contracts/:/tmp/ mythril/myth analyze /tmp/MyContract.sol --solv 0.7.6
```

2. use Solhint