import _ from "lodash";
import layers from "../data/layers.json";

export const calculateHash = (traitIndices = []) => {
  return traitIndices.map((i) => String(i).padStart(3, "0")).join("");
};

export const randomTraits = () => {
  return layers.map((layer) => {
    const total = _.sumBy(layer.traits, "rarity");
    let r = Math.floor(Math.random() * total);
    for (let i = 0; i < layer.traits.length; i++) {
      const { rarity } = layer.traits[i];
      r -= rarity;
      if (r < 0) return i;
    }
  });
};

export const calculateTraits = (hash) => {
  return _.words(hash, /\d{3}/g).map((s) => parseInt(s));
};

export const randomHash = () => calculateHash(randomTraits());
