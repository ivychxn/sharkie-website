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
          this website so back off if ur gonna be annoying about it.</p>
          <p>
          anyways let's talk some quick facts: i love jasmine milk tea less sweet, half ice. i don't like to capitalize when i type. my 
          favorite color is red. i have a shiba inu / korean jindo rescue mix and she's the cutest dog ever. my toxic trait is that if 
          i have to capitlize a letter, i will use caps lock instead of holding shift
          </p>
      </div>
      <h2>the shark club - some technical stuff</h2>
      <div className="me">
        <img src={require('../assets/ac-me.png')} alt={'me in nyc'} className="me-right"/>

        <p>
        i made this website as a lil fun project and doubling sorta like a blog. it's like a playground for me to code whatever
        seems interesting and to experiment. the dev process is simple: i have a bunch of stuff designed on figma bc i like dragging
        shapes and stuff to make things pretty and then i put off coding it until i feel like it. basically i work on this website
        whenever i get bored and have absolutely nothing else to do. </p>
        
        <p>for all my nerds who snoop on my code, you might ask: why did you
        code this thing on here a certain way vs doing it a different way or using whatever library? the answer is prob something like
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
      <p style={{ paddingBottom: '50px' }}>
        i hate school btw
      </p>

    </>
  )
};

export default About