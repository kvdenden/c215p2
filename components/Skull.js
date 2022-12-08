import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { calculateHash } from "../util";
import layers from "../data/layers.json";
import { useDebounce } from "use-debounce";

const Skull = ({ traitIndices, size }) => {
  const [imageData, setImageData] = useState();
  const [hash, setHash] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    setHash(calculateHash(traitIndices));
  }, [traitIndices]);

  const [debouncedHash] = useDebounce(hash, 250);

  useEffect(() => {
    let ignore;
    if (debouncedHash) {
      setLoading(true);
      axios
        .get(`/api/skulls/${debouncedHash}`)
        .then((res) => {
          if (!ignore) setImageData(res.data);
        })
        .finally(() => {
          if (!ignore) setLoading(false);
        });
    }
    return () => {
      ignore = true;
    };
  }, [debouncedHash]);

  return (
    <div className="ratio ratio-1x1 w-100">
      {imageData ? <Image unoptimized src={imageData} alt={hash} width={size} height={size} /> : ""}
      {loading ? (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

Skull.defaultProps = {
  traitIndices: Array(layers.length).fill(0),
  size: 1200,
};

export default Skull;
