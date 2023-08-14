import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Testing Continuous Integration and Continous Deployment</h2>
      <p>Using GitHub Actions and GitHub Pages</p>
    </>
  );
}

export default App;
