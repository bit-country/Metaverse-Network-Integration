# Token Transfers & Subscription to Transfer Events

Two modules allow transferring tokens in Metaverse.Network Pionner network:
`currencies` and `balances`.

All tokens supported by Metaverse.Network runtime are native tokens and can be transferred using `currencies` module. NEER is a network token and it supports transfers using `balances` module.

### Transferring Network token (NEER)

```typescript
const dest = "<DESTINATION_ADDRESSS>";
const amount = 1 * 10 ** symbolsDecimals[NETWORK_TOKEN_SYMBOL];
const extrinsic = api.tx.balances.transfer(dest, amount);
```

**Full code snippet:**

To run:

```bash
npx ts-node src/transfer-examples/network-token-transfer.ts
```
