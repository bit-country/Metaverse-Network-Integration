import dotenv from "dotenv";

import { ApiManager } from "@metaverse-network-sdk/api-nodejs";

dotenv.config();

export const getMetaverseNetworkApiProvider = async () => {
  const apiManager = await ApiManager.create({
    wsEndpoint: process.env.WS_NODE_ENDPOINT,
  });

  let api = apiManager.api;
  await api.isReady;

  return api;
};

export default getMetaverseNetworkApiProvider;
