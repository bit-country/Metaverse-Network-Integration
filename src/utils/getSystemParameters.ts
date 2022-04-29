import getPolkadotApi from "./getPolkadotApi";

export const getSystemParameters = async () => {
  const api = await getPolkadotApi();
  const params = await api.rpc.system.properties();
  const decimals =
    !params.tokenDecimals.isNone && params.tokenDecimals.value.toHuman();
  const symbols =
    !params.tokenSymbol.isNone &&
    (params.tokenSymbol.value.toHuman() as string[]);

  let symbolsDecimals /* Record<string, string> */ = symbols.reduce(
    (acc, symbol, index) => ({
      ...acc,
      [symbol]: +decimals[index],
    }),
    {}
  );

  symbolsDecimals["BIT"] = 18;

  return {
    decimals,
    symbols,
    symbolsDecimals,
  };
};

export const getAssetParameters = async () => {};

export default getSystemParameters;
