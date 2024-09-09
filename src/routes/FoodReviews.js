import React from "react";
// import FunHeader from "../components/FunHeader";
// import { sharkFacts } from "../content/sharkFacts";

const FoodReviews = () => {
  return (
    <>
      {/* <FunHeader text={sharkFacts[Math.floor(Math.random()*3)]} /> */}
      <h1>just yappin about food</h1>
      <p style={{ margin: '0 50px', textAlign: 'center', paddingBottom: '50px' }}>
        obv there are good restaurants and bad restaurants and it's pretty easy to judge bad restaurants bc
        something there (usually the food) that just sucks reallllly baddd and you just never go again LOL 
        but when it comes to good restaurants, I feel like there's different kinds of <i>good</i> restaurants.
        so what do i look for to judge if a restaurant is good value? what makes me wanna go back?
        let's make one thing clear tho: at bare minimum, the food has to be decent. unless there's some event, 
        there is no way i'm going to a restaurant solely for ~vibes~ and then knowingly and willingly eat shit food.
      </p>
      <p style={{ margin: '0 50px', paddingBottom: '50px' }}>
        a good restaurant needs to be good in at least one of these qualities, and better ones will be good at multiple.
        the top tier restaurants will stand out bc they excel in every category. 
        <ul>
          <li><b>food. </b> bare minimum the food has to be decent but the better the food, 
          the better i think the restaurant is. duh right?
          </li>
          <li><b>portion size.</b> i want to eat at a place and leave not hungry if i order a decent amount. 
          i don't mind if there's a few tiny dishes in a 7 course meal, but it better not be a tiny dish 
          if i'm ordering a $40 entree.
          </li>
          <li><b>price.</b> some restaurants are good bc they have excellent price value. they might not have 
          the best tasting food or decor or whatever and it's totally fine bc i'm still feeling that i'm 
          getting more than my money's worth. like the ayce kbbq place for $20 per person? easy clap.
          </li>
          <li><b>service.</b> good food can be ruined by bad service. bare minimum shouldn't be too hard tho bc if 
          i'm at a sit down place, i just wanna be seated, get my order taken, and then have my food come out yk? 
          and i'm not saying it has to be super quick, but i've been to places where they'd straight up ignore the
          waitlist or where it's near impossible to get your order taken (and then they forget to put in your order) 
          so it must be said. 
          </li>
          <li><b>consistency.</b> a good restaurant will be consistent. i don't wanna go to a place where i need to
          hope that i get lucky or else the food will be bad. i also don't wanna go to a place where their posted 
          hours don't actually match up with when they're open. crazy huh?
          </li>
          <li><b>vibes.</b> does the overall vibe of the place seem good? can i recommend this place to other people and
          not have to preface it with just trust me bro? ofc there's different vibes needed for different occasions but
          at the end of the day, when i walk into the restaurant, do i get a good feeling about it?
          </li>
          
        </ul>
      </p>

    </>
  )
};

export default FoodReviews