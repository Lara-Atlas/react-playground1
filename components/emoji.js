import React from "react";

import { useState } from "react";

function Emoji(props) {
  const emojis = ["😭", "😢", "😐", "🙂", "😄", "🥳"];

  const [index, setIndex] = useState(2);

  function update(mood) {
    if ((mood == "besser") & (index < 5)) {
      setIndex(index + 1);
    } else if ((mood == "schlechter") & (index > 0)) {
      setIndex(index - 1);
    }
  }

  return (
    <div>
      <h2>Mood-Meter</h2>
      <p>{props.frage}</p>
      <p>{emojis[index]}</p>
      <button onClick={() => update("besser")}>Besser</button>
      <button onClick={() => update("schlechter")}>Schlechter</button>
    </div>
  );
}

export default Emoji;
