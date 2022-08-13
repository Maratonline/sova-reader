import React, { FC } from "react";
import logo from "./logo.svg";
import "./App.css";
import WordCounter from "./form/WordCounter";

interface NewCompProp {
  compId: number;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WordCounter />
      </header>
    </div>
  );
}

export default App;
