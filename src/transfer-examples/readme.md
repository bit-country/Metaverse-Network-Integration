# Token Transfers & Subscription to Transfer Events

There are two modules that allow transferring tokens in Metaverse.Network Continuum (or Pioneer) network:
`currencies` and `balances`.

For NUUM( or our canary network NEER), since it is a network token and it supports transfers using either `balances` module or `currencies` module.
And all other tokens supported by Metaverse.Network runtime are native tokens and can only be transferred using `currencies` module. 

### Transferring Network token NUUM (or NEER)

```typescript
const dest = "<DESTINATION_ADDRESSS>";
const amount = 1 * 10 ** symbolsDecimals[NETWORK_TOKEN_SYMBOL];
const extrinsic = api.tx.balances.transfer(dest, amount);
```

**Full code snippet:**

To run:

```bash
npx ts-node src/transfer-examples/native-token-transfer.ts
```
