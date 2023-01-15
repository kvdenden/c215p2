// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { calculateHash, randomTraits } from "../../../util";
export default async function handler(req, res) {
  const hash = calculateHash(randomTraits());

  res.redirect(`/api/skulls/${hash}`);
}
