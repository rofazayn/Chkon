# Atakor

## Info / Setup

### Bootnode

enode://0a8bc8664787a9901d4870402c23d76a98bac980f1cac7f121d47ed00550bca8e3d3c34d92934b7e4312fba360260e71f8301be02d20c7d20355d81292961c9b@127.0.0.1:0?discport=30300

### Nodes

- node: 0xE1819F49213bed14254743AFA0B35Ed816b915dC secret123

### Setup up with genesis file

`geth init --datadir node atakor.json`

### Launch PoA private network

`geth --datadir node --networkid 12345 --bootnodes "enode://0a8bc8664787a9901d4870402c23d76a98bac980f1cac7f121d47ed00550bca8e3d3c34d92934b7e4312fba360260e71f8301be02d20c7d20355d81292961c9b@127.0.0.1:30300" --port 30301 --http --http.corsdomain "*" --http.port 8301 --allow-insecure-unlock --unlock 0xE1819F49213bed14254743AFA0B35Ed816b915dC --password "./node/password.txt" --miner.etherbase "0xE1819F49213bed14254743AFA0B35Ed816b915dC" --mine`

### Presentation registry

- Presentation registry address: `0x7AB413d3FB23558f8e7d1A949C7C094265F9e7DD`
- Presentation registry contract receives presentation id and signature and verifies if that signature is the same one stored on the registry.
