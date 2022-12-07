import * as skulls from "../../web3/skulls";

export default async function handler(req, res) {
  const traits = await skulls.getTraits();

  return res.json(traits);
}
