import React from "react";
import MotorcycleSpecs from "./components/MotorcycleSpecs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Motorcycle Specifications App</h1>
      </header>
      <main>
        <MotorcycleSpecs />
      </main>
      <footer className="App-footer">
        <p>Powered by React</p>
      </footer>
    </div>
  );
}

export default App;