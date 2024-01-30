import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./routes/Home";
import Wishlist from "./routes/Wishlist";
import About from "./routes/About";

export default function App() {
  return (
    <Router>
      <>
        <div className='wave' />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="about" element={<About />} />
            <Route path="test" Component={() => {
              console.log('test')
              window.location.replace('https://www.youtube.com/watch?v=xvFZjo5PgG0');
              return null;
            }} />
            <Route path="test2" Component={() => {
              console.log('test')
              window.location.replace('https://www.youtube.com/watch?v=BbeeuzU5Qc8');
              return null;
            }} />
            
            <Route path="test3" Component={() => {
              console.log('test')
              window.location.replace('https://docs.google.com/document/d/1s5O26UIqo9aC00q52eibniiEC5xYrRpdiDY8qhdsmRo/edit?usp=sharing');
              return null;
            }} />
          </Routes>
          {/* 
        <Link to="home">Home</Link><br></br>
        <Link to="wishlist">Wishlist</Link>
        <Link to="template">Template</Link> */}
        </div>
      </>
    </Router>
  );
}