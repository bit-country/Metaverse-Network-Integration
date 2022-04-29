import { SubmittableResult } from "@polkadot/api";
import getPolkadotApi from "../utils/getPolkadotApi";
import getSigner from "../utils/getSigner";
import getSystemParameters from "../utils/getSystemParameters";

const bitTransfer = async () => {
  const api = await getPolkadotApi();
  const { symbolsDecimals } = await getSystemParameters();

  const signer = await getSigner();

  // transfer 1 BIT to `dest`
  const dest = "WWcErrHi2JHpPVVWe7uVq2a8Wrn6NMMTz31z9So5GWYhqWVRi";
  const token = { MiningResource: 0 };
  const amount = 1 * 10 ** symbolsDecimals["BIT"];

  const extrinsic = api.tx.currencies.transfer(dest, token, amount.toString());

  const hash = await extrinsic.signAndSend(signer);

  console.log("transaction hash", hash.toHuman());
};

bitTransfer()
  .catch((err) => {
    console.error("Error:", Object.entries(err as object), err);
  })
  .finally(() => {
    process.exit();
  });
