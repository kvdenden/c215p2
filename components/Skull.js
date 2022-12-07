import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { calculateHash } from "../util";
import layers from "../data/layers.json";
import { useDebounce } from "use-debounce";

const Skull = ({ traitIndices, size }) => {
  const [imageData, setImageData] = useState();
  const [hash, setHash] = useState();

  useEffect(() => {
    setHash(calculateHash(traitIndices));
  }, [traitIndices]);

  const [debouncedHash] = useDebounce(hash, 250);

  useEffect(() => {
    let ignore;
    if (debouncedHash) {
      axios.get(`/api/skulls/${debouncedHash}`).then((res) => {
        if (!ignore) setImageData(res.data);
      });
    }
    return () => {
      ignore = true;
    };
  }, [debouncedHash]);

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
