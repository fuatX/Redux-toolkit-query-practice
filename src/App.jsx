import { useState } from "react";
import Navbar from "./compenents/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Container from "./compenents/Container";
import Row from "./compenents/Row";
import FetchCategories from "./pages/fetch/FetchCategories";
import AxiosCategories from "./pages/axios/AxiosCategories";
import RTKQueryCategories from "./pages/rtk-query/RTKQueryCategories";

function App() {
  const [count, setCount] = useState(0);
  console.log("VITE_CAT_API_URL", VITE_CAT_API_URL);
  return (
    <>
      <Navbar />
      <Container className="mt-4 mb-4">
        <Row>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fetch-categories" element={<FetchCategories />} />
            <Route path="/axios-categories" element={<AxiosCategories />} />
            <Route path="/rtk-query" element={<RTKQueryCategories />} />
          </Routes>
        </Row>
      </Container>
    </>
  );
}

export default App;
