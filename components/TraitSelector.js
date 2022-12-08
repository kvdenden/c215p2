import layers from "../data/layers.json";
import { randomTraits } from "../util";

const TraitSelector = ({ traits, onChange }) => {
  const Selector = ({ layerIndex, onChange }) => {
    const layer = layers[layerIndex];

    const traitIndex = traits[layerIndex] || 0;
    return (
      <>
        <div className="form-group row">
          <div className="col-sm-3 col-form-label">
            <label htmlFor={layer.name} className="form-label mb-0 fw-bold text-uppercase">
              {layer.name}
            </label>
          </div>
          <div className="col-sm-9">
            <select
              id={layer.name}
              className="form-select text-uppercase"
              value={traitIndex}
              onChange={(e) => onChange(e.target.value)}
              aria-label={layer.name}
            >
              {layer.traits.map((trait, index) => (
                <option key={index} value={index}>
                  {trait.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </>
    );
  };

  const changeTrait = (layerIndex, traitIndex) => onChange(traits.map((t, i) => (i === layerIndex ? traitIndex : t)));

  return (
    <>
      <div className="w-100">
        {layers.map((layer, index) => (
          <div key={layer.name} className="my-2">
            <Selector layerIndex={index} onChange={(traitIndex) => changeTrait(index, traitIndex)} />
          </div>
        ))}
      </div>
      <div>
        <button className="btn btn-primary w-100 fw-bold text-uppercase" onClick={() => onChange(randomTraits())}>
          24nd0m1z3
        </button>
      </div>
    </>
  );
};

TraitSelector.defaultProps = {
  onChange: () => {},
};

export default TraitSelector;
