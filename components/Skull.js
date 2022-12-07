import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { calculateHash } from "../util";
import layers from "../data/layers.json";

const Skull = ({ traitIndices, size }) => {
  const [imageData, setImageData] = useState();

  const hash = calculateHash(traitIndices);

  useEffect(() => {
    axios.get(`/api/skulls/${hash}`).then((res) => setImageData(res.data));
  }, [hash]);

  if (imageData) {
    return <Image unoptimized src={imageData} alt={hash} width={size} height={size} />;
  }

  return null;
};

Skull.defaultProps = {
  traitIndices: Array(layers.length).fill(0),
  size: 1200,
};

export default Skull;
