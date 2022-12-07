import layers from "../data/layers.json";

export const calculateHash = (traitIndices = []) => {
  return traitIndices.map((i) => String(i).padStart(3, "0")).join("");
};

export const randomTraits = () => {
  return layers.map((layer) => Math.floor(Math.random() * layer.traits.length));
};
