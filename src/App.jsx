import { useState } from "react";
import Navbar from "./compenents/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Container from "./compenents/Container";
import Row from "./compenents/Row";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Container className="mt-4 mb-4">
        <Row>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Row>
      </Container>
    </>
  );
}

export default App;
