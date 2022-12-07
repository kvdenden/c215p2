import Head from "next/head";
import { useState } from "react";
import Skull from "../components/Skull";
import TraitSelector from "../components/TraitSelector";

export default function Home() {
  const [traits, setTraits] = useState();

  return (
    <div className="bg-dark">
      <Head>
        <title>1337 Skulls Browser</title>
        <meta name="description" content="1337 Skulls Browser - Create your perfect skull" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="d-flex flex-column align-items-center justify-content-center min-vh-100 overflow-hidden p-2">
        <div className="d-flex flex-column align-items-stretch" style={{ width: "512px", maxWidth: "100%" }}>
          {traits ? <Skull traitIndices={traits} size={512} /> : ""}
          <TraitSelector onChange={setTraits} />
        </div>
      </main>
    </div>
  );
}
