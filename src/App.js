import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./routes/Home";
import Wishlist from "./routes/Wishlist";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Routes>

        <Link to="home">Home</Link><br></br>
        <Link to="wishlist">Wishlist</Link>

      </div>
    </Router>
  );
}