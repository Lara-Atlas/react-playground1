import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Emoji from "/components/emoji";

export default function App() {
  const fragen = ["Wie geht es dir?", "Wie ging es dir gestern?"];

  return (
    <div className="App">
      {fragen.map((frage, index) => (
        <Emoji key={index} frage={frage} />
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
