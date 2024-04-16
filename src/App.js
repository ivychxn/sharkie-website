import { useEffect, React, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./routes/Home";
import Wishlist from "./routes/Wishlist";
import FoodReviews from "./routes/FoodReviews";
import About from "./routes/About";
import useWindowDimensions from "./hooks/useWindowDimensions";
import MobileNav from "./components/MobileNav";

export default function App() {
  const { width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 750)

  useEffect(() => {
    setIsMobile(window.innerWidth < 750)
  }, [width]);

  return (
    <Router>
      <>
        {isMobile ? <MobileNav /> : <div className='wave' />}
        <main className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="about" element={<About />} />
            <Route path="test" Component={() => {
              window.location.replace('https://www.youtube.com/watch?v=xvFZjo5PgG0');
              return null;
            }} />
            <Route path="food-reviews" element={<FoodReviews />} />

            <Route path="test3" Component={() => {
              window.location.replace('https://docs.google.com/document/d/1s5O26UIqo9aC00q52eibniiEC5xYrRpdiDY8qhdsmRo/edit?usp=sharing');
              return null;
            }} />
          </Routes>
          {/* 
        <Link to="home">Home</Link><br></br>
        <Link to="wishlist">Wishlist</Link>
        <Link to="template">Template</Link> */}
        </main>
      </>
    </Router>
  );
}