import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./routes/Home";
import Wishlist from "./routes/Wishlist";
import Template from "./routes/Template";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="template" element={<Template />} />
        </Routes>
{/* 
        <Link to="home">Home</Link><br></br>
        <Link to="wishlist">Wishlist</Link>
        <Link to="template">Template</Link> */}

      </div>
    </Router>
  );
}