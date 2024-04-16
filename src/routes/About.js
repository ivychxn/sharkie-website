import React from "react";
import FunHeader from "../components/FunHeader";
import "../styles/about.css"


const About = () => {
  const funFactText = "did you know the shortfin mako shark is the fastet shark alive? bro can go 43mph vrooooom vroooooooooom"

  return (
    <>
      <FunHeader text={funFactText} />
      <h1>about</h1>
      <div className="me">
        <img src={require('../assets/nyc-me.png')} alt={'me in nyc'} className="me-left" />
        <p>hi, my name is ivy like the taylor swift song on evermore. welcome to my shark club - can you tell that i like sharks? </p>

        <p> 
          let's talk some quick facts: i love jasmine milk tea less sweet, half ice. i don't like to capitalize when i text. my 
          favorite color is red.
          
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
        most of the images to look good. i also made my sister draw my shark icons and images for me bc 
        she's good at stuff like that
        </p>
        
      </div>

      <h2>software engineering era</h2>
      <p style={{ paddingBottom: '50px' }}>
        i've been full time in the tech industry since i graduated in june 2022, but my experience with coding goes way beyond that. i started coding in 6th grade so it's been. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      </p>


      <h1>things i want</h1>

    </>
  )
};

export default About