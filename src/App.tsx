import React from "react";
import { Grid } from "./components/Grid";
import "./App.css";
import { Controls } from "./components/Controls";

function App() {
  return (
    <div className="app">
      <Controls />
      <Grid />
    </div>
  );
}

export default App;
