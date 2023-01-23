import DrumPads from "./DrumPads";
import SoundName from "./SoundName";
import data from "./data";
import { useEffect, useState } from "react";

function App() {
  const [sound, setSound] = useState("");

  const playAudio = (key) => {
    const drumPad = data.find((elem) => elem.keyName === key);
    if (drumPad) {
      const audio = document.getElementById(key);
      audio.pause();
      audio.currentTime = 0;
      audio.play();
      setSound(drumPad.id);
    }
  };

  const handleClick = (keyName) => {
    playAudio(keyName);
  };

  const handleKeyPress = (event) => {
    playAudio(event.key.toUpperCase());
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress, false);
    return () => window.removeEventListener("keydown", handleKeyPress, false);
  }, []);

  return (
    <main id="drum-machine">
      <SoundName name={sound} />
      <DrumPads handleClick={handleClick} />
    </main>
  );
}

export default App;
