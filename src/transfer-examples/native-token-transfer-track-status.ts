import getPolkadotApi from "../utils/getPolkadotApi";
import getSigner from "../utils/getSigner";
import getSystemParameters from "../utils/getSystemParameters";

const NETWORK_TOKEN_SYMBOL = "NUUM";

// transfer network token
const networkTokenTransferWithStatus = async () => {
  const api = await getPolkadotApi();
  const { symbolsDecimals } = await getSystemParameters();

  const signer = await getSigner();

  // transfer 1 NEER to `dest`
  const dest = "WWcErrHi2JHpPVVWe7uVq2a8Wrn6NMMTz31z9So5GWYhqWVRi";
  const amount = 1 * 10 ** symbolsDecimals[NETWORK_TOKEN_SYMBOL];

  // Do the transfer and track the actual status
  api.tx.balances
    .transfer(dest, amount.toString())
    .signAndSend(signer, {}, ({ events = [], status }) => {
      console.log("Transaction status:", status.type);

      if (status.isInBlock) {
        console.log("Included at block hash", status.asInBlock.toHex());
        console.log("Events:");

        events.forEach(({ event: { data, method, section }, phase }) => {
          console.log(
            "\t",
            phase.toString(),
            `: ${section}.${method}`,
            data.toString()
          );
        });
      } else if (status.isFinalized) {
        console.log("Finalized block hash", status.asFinalized.toHex());

        process.exit(0);
      }
    });
};

networkTokenTransferWithStatus().catch((err) => {
  console.error("Error:", Object.entries(err as object), err);
});
