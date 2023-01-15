import Head from "next/head";
import { useState } from "react";
import Skull from "../components/Skull";
import TraitSelector from "../components/TraitSelector";
import { randomTraits } from "../util";

export default function Home() {
  const [traits, setTraits] = useState(randomTraits());

  return (
    <div className="bg-dark">
      <Head>
        <title>c215p2 148</title>
        <meta name="description" content="c215p2 148 - Design your 1337 skull" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="d-flex flex-column align-items-center justify-content-center min-vh-100 overflow-hidden p-2 terminal">
        <h1>c215p2 148</h1>
        <div className="d-flex flex-column align-items-stretch" style={{ width: "512px", maxWidth: "100%" }}>
          {traits ? (
            <>
              <Skull traitIndices={traits} size={512} />
              <TraitSelector traits={traits} onChange={setTraits} />
            </>
          ) : (
            ""
          )}
        </div>
      </main>
    </div>
  );
}
