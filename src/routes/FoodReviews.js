import React from "react";
import FunHeader from "../components/FunHeader";
import { sharkFacts } from "../content/sharkFacts";

const FoodReviews = () => {
  return (
    <>
      <FunHeader text={sharkFacts[Math.floor(Math.random()*3)]} />
      <h1>food i like to eat</h1>
      <p style={{ margin: '0 50px', textAlign: 'center', paddingBottom: '50px' }}>
        I HAVE STRONG OPINIONS ON FOOD. ok clearly i haven't coded this part so byeeeeee
        </p>


    </>
  )
};

export default FoodReviews