// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as skulls from "../../../web3/skulls";

export default async function handler(req, res) {
  const { hash } = req.query;

  const svg = await skulls.generateSVG(hash);

  // const buffer = Buffer.from(svg.replace("data:image/svg+xml;base64,", ""), "base64");

  // return res.send(buffer, { headers: "Content-Type: image/svg+xml" });

  return res.send(svg);
}
