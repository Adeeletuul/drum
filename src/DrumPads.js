import React from "react";
import DrumPad from "./DrumPad";
import data from "./data";

const DrumPads = ({ handleClick }) => {
  return (
    <div id="pads">
      {data.map((drumPad) => {
        return (
          <DrumPad
            key={drumPad.id}
            id={drumPad.id}
            keyCode={drumPad.keyCode}
            keyName={drumPad.keyName}
            url={drumPad.url}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
};

export default DrumPads;
