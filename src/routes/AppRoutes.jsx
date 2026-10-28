import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Services from "../pages/Services";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "40px", textAlign: "center" }}>
              <h1>404 - Page Not Found</h1>
              <a href="/">Return to SB Interiors</a>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
