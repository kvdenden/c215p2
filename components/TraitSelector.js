import { useEffect, useState } from "react";
import layers from "../data/layers.json";
import { randomTraits } from "../util";

const TraitSelector = ({ onChange }) => {
  const [traits, setTraits] = useState(
    Object.fromEntries(randomTraits().map((traitIndex, layerIndex) => [layerIndex, traitIndex]))
  );

  useEffect(() => {
    onChange(Object.values(traits));
  }, [traits, onChange]);

  const Selector = ({ layerIndex }) => {
    const layer = layers[layerIndex];

    const traitIndex = traits[layerIndex] || 0;
    const setTraitIndex = (traitIndex) => setTraits((traits) => ({ ...traits, [layerIndex]: traitIndex }));

    return (
      <>
        <div className="form-group row">
          <div className="col-sm-3 col-form-label">
            <label htmlFor={layer.name} className="form-label mb-0 fw-bold">
              {layer.name}
            </label>
          </div>
          <div className="col-sm-9">
            <select
              id={layer.name}
              className="form-select"
              value={traitIndex}
              onChange={(e) => setTraitIndex(e.target.value)}
              aria-label={layer.name}
            >
              {layer.traits.map((trait, index) => (
                <option key={index} value={index}>
                  {trait}
                </option>
              ))}
            </select>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="w-100">
        {layers.map((layer, index) => (
          <div key={layer.name} className="my-2">
            <Selector layerIndex={index} />
          </div>
        ))}
      </div>
    </>
  );
};

TraitSelector.defaultProps = {
  onChange: () => {},
};

export default TraitSelector;
