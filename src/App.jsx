import { useState } from "react";
import Navbar from "./compenents/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <h1>App</h1>
    </>
  );
}

export default App;
