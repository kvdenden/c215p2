import { useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import Skull from "../components/Skull";
import { calculateTraits, randomHash } from "../util";

const generateSkulls = (length = 1) => Array.from({ length }, randomHash);

const Explore = () => {
  const [skulls, setSkulls] = useState(generateSkulls(24));

  const loadMoreSkulls = useCallback(() => {
    setSkulls((s) => [...s, ...generateSkulls(6)]);
  }, []);

  return (
    <InfiniteScroll hasMore loadMore={loadMoreSkulls}>
      <div className="d-flex flex-wrap">
        {skulls.map((skullHash) => (
          <div className="col-2" key={skullHash}>
            {/* TODO: generate off-chain to improve speed (and to save alchemy api credits) */}
            <Skull size={512} traitIndices={calculateTraits(skullHash)} />
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Explore;
