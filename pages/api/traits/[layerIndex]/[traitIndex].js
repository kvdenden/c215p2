// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as skulls from "../../../../web3/skulls";

export default async function handler(req, res) {
  const { layerIndex, traitIndex } = req.query;

  const { name, mimetype, hidden, data } = await skulls.getTrait(layerIndex, traitIndex);

  res.json({ name, mimetype, hidden, data });
}
