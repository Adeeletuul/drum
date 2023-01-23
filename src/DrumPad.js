import React from "react";

const DrumPad = ({ id, keyCode, keyName, url, handleClick }) => {
  return (
    <div
      className="drum-pad"
      id={id}
      keycode={keyCode}
      keyname={keyName}
      onClick={() => handleClick(keyName)}
    >
      <audio className="clip" id={keyName} src={url}>
        {/* <source src={url} type="audio/mp3"></source> */}
      </audio>{" "}
      {keyName}
    </div>
  );
};

export default DrumPad;
