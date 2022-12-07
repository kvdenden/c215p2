import * as skulls from "../../../web3/skulls";

export default async function handler(req, res) {
  const layers = await skulls.getLayers();

  return res.json(layers);
}
