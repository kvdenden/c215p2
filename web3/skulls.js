import _ from "lodash";
import { ethers } from "ethers";
import { skulls } from "./contracts";
import layers from "../data/layers.json";

export const getTrait = async (layerIndex, traitIndex) => {
  if (layerIndex < 0 || layerIndex >= layers.length) throw "Invalid layer index";
  if (traitIndex < 0 || traitIndex >= layers[layerIndex].traits.length) throw "Invalid trait index";

  const [name, mimetype, hidden] = await skulls.traitDetails(layerIndex, traitIndex);
  const data = await skulls.traitData(layerIndex, traitIndex).then(ethers.utils.arrayify);

  return {
    name,
    mimetype,
    hidden,
    data,
  };
};

export const generateMetadata = async (hash) => {
  return skulls.hashToMetadata(hash);
};

export const generateSVG = async (hash) => {
  return skulls.hashToSVG(hash);
};

export const getTraits = async () => {
  return Promise.all(
    layers.map((layer, layerIndex) =>
      Promise.all(_.range(0, layer.traits.length).map((traitIndex) => skulls.traitDetails(layerIndex, traitIndex)))
    )
  );
};

export const getLinkedTraits = async () => {
  return Promise.all(
    layers.map((layer, layerIndex) =>
      Promise.all(_.range(0, layer.traits.length).map((traitIndex) => skulls.getLinkedTraits(layerIndex, traitIndex)))
    )
  );
};
