import getPolkadotApi from "../utils/getPolkadotApi";
import getSigner from "../utils/getSigner";
import getSystemParameters from "../utils/getSystemParameters";

const NETWORK_TOKEN_SYMBOL = "NUUM";

// transfer network token
const networkTokenTransfer = async () => {
  const api = await getPolkadotApi();
  const { symbolsDecimals } = await getSystemParameters();

  const signer = await getSigner();

  // transfer 1 NEER to `dest`
  const dest = "WWcErrHi2JHpPVVWe7uVq2a8Wrn6NMMTz31z9So5GWYhqWVRi";
  const amount = 1 * 10 ** symbolsDecimals[NETWORK_TOKEN_SYMBOL];
  const extrinsic = api.tx.balances.transfer(dest, amount.toString());

  const hash = await extrinsic.signAndSend(signer);

  console.log("Transfer hash:", hash.toHuman());
};

networkTokenTransfer()
  .catch((err) => {
    console.error("Error:", Object.entries(err as object), err);
  })
  .finally(() => {
    process.exit();
  });
