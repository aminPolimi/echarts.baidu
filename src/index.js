import React from "react";
import ReactDOM from "react-dom";
import { Plot } from "./plot";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Plot />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
