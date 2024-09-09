import React from "react";
// import FunHeader from "../components/FunHeader";
import "../styles/about.css"
// import { sharkFacts } from "../content/sharkFacts";


const About = () => {
  return (
    <>
      {/* <FunHeader text={sharkFacts[Math.floor(Math.random()*3)]} /> */}
      <h1>about</h1>
      <div className="me">
        <img src={require('../assets/nyc-me.png')} alt={'me in nyc'} className="me-left" />
        <p>hi, my name is ivy like the taylor swift song on evermore. welcome to my shark club - can you tell that i like sharks? </p>

        <p> 
          this is my blog / portfolio / sandbox / info dump / whatever u wanna call it. clearly i haven't coded finished coding
          this website so back off if ur gonna be mean about it.</p>
          <p>
          anyways let's talk some quick facts: i love jasmine milk tea less sweet, half ice. i don't like to capitalize when i type. my 
          favorite color is red. i have a shiba inu / korean jindo rescue mix and she's the cutest dog ever. my toxic trait is that if 
          i have to capitlize a letter, i will use caps lock instead of holding shift
          </p>
      </div>
      
      <h2>the shark club - some technical stuff</h2>
      <div className="me">
        <img src={require('../assets/ac-me.png')} alt={'me in animal crossing'} className="me-right"/>

        <p>
        i made this website as a lil fun project and doubling sorta like a blog. it's like a playground for me to code whatever
        seems interesting and to experiment. the dev process is simple: i have a bunch of stuff designed on figma bc i like dragging
        shapes and stuff to make things pretty and then i put off coding it until i feel like it. basically i work on this website
        whenever i get bored and have absolutely nothing else to do. </p>
        
        <p>why did i code this thing on here a certain way vs doing it a different way or using whatever library? the answer is prob something like
        "bc i wanted to" - sometimes i wanna make stuff from scratch just to see what i can do and then sometimes i install a new library 
        just to play with it lol
        </p>
        <p>
        for more info on how i create this site - this entire thing is just a react app tbh. i design pretty much everything 
        on <a href="https://www.figma.com/">figma </a> and i use <a href="https://www.remove.bg/">remove.bg</a> religiously for  
        most of the images to look good. i also told my sister to draw shark icons and images for me but she hasn't done it yet soooo
        </p>
      </div>

      <h2>academic era</h2>
      <div className="me">
      <img src={require('../assets/grad-me.png')} alt={'graduation me'} className="me-left smol"/>
      <p>  
      i attended the <b>university of california, san diego (ucsd)</b> where i majored in computer engineering and minored in business.
      at the end of my senior year in high school, i was accepted as an ACES scholar and enrolled in ucsd's sei program (summer engineering institute).
      </p>
        
      <p>
      during my time at ucsd, i was heavily involved in student organizations. i was involved in the themed entertainment association (tea) club at ucsd
      because i love theme parks and i have too many hours on rollercoaster tycoon.
      </p>

      <p>
      i also held officer positions for the association for computing machinery (acm) chapter of ucsd, which hella tested my patience.
      </p>
      </div>

      <h2>my tech journey - the tea !!</h2>
      <div className="me">
      <img src={require('../assets/grad-me.png')} alt={'graduation me'} className="me-right smol"/>
      <p>  
      when i was in high school i joined the FIRST robotics club (frc) there and it was probably one of the worst experiences of my life upon
      reflection as an adult. the lead mentor, who was probably in his late twenties/early thirties, abused his authority to be a bully. he
      was specifically mean to girls, yet would ironically preach about how we needed diversity in tech. he would heavily favor the boys in the
      club in many ways: taking them out for food runs, giving them more important project tasks, letting them off easier when they made mistakes.
      </p>
      <p>
      he had a justification for every action. the boys worked hard, so they need a break. as if the girls in the club weren't trying?
      this is a high paced project and we need to finish this part soon, so we'll have the guys to do it because they're more experienced.
      the guys were more experienced because the girls in the club were robbed of opportunities to learn. we were never given adequate chances
      to gain more experience because all the real tasks went to the guys who were favored. if we made a mistake, it only proved that we were
      inexperienced and shouldn't be trusted. meanwhile, if a guy made a mistake, he'd get some jokes thrown his way, but there was no impact
      on future opportunities
      </p>
      <p>
      i was 14/15 at the time and this experience nearly crushed every desire i had to pursue a tech career. like many people at 15, i still 
      struggled with my sense of self and i had a desire for others' approval, so i stuck around longer than i should have because i figured
      i could persevere. however, as an adult now, i cannot imagine treating any teenager the way i was treated. i wouldn't have agreed at the time,
      but the truth is that i was a child. there was no reason why a grown man should have treated children this way. 
      </p>
        
      <p>
      anyways all this yappin to say why i try to look out for others in tech
      </p>
      </div>


    </>
  )
};

export default About