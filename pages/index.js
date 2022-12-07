import Head from "next/head";
import { useEffect, useState } from "react";
import Skull from "../components/Skull";
import { randomTraits } from "../util";

export default function Home() {
  const [traits, _setTraits] = useState(randomTraits());

  return (
    <div className="bg-dark">
      <Head>
        <title>1337 Skulls Browser</title>
        <meta name="description" content="1337 Skulls Browser - Create your perfect skull" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="d-flex align-items-center justify-content-center vh-100">
        <Skull traitIndices={traits} size={1200} />
      </main>
    </div>
  );
}
