import React from "react";
import FunHeader from "../components/FunHeader";
import BrandNote from "../components/BrandNote";

const Wishlist = () => {
  const funFactText = "did you know the shortfin mako shark is the fastet shark alive? bro can go 43mph vrooooom vroooooooooom"

  const brandNotes = [{
    imagePath: require('../assets/abercrombie.png'),
    imgAlt: 'abercrombie logo',
    content: (<>i am so into abercrombie right now bc good sales + stackable codes. everything i get is actually from the sale section tho so i actually don't know anything regular price<br /><br />tops: XS/S gamble, but usually i try S<br />bottoms: S/26/27 regular length</>)
  },
  {
    imagePath: require('../assets/lululemon.png'),
    imgAlt: 'lululemon logo',
    content: (<>luv almost anything lululemon i'm a basic bitch. general guideline is like, i'm a 26 waist but i find lululemon to be kinda tight so 27 is good<br /><br />tops: generally S/6 or whatever 32 band size is
      <br />bottoms: S/6 with 28" length if doing regular length fit
    </>)
  },
  {
    imagePath: require('../assets/uniqlo-aerie.png'),
    imgAlt: 'uniqlo and aerie logo',
    content: (<>putting these together bc sizing sizing can be a gamble but generally the same for both<br />

      <br />tops: XS/S
      <br />bottoms: XS might fit but prob more S/26.
      <br /> M Long for aerie flare bottoms tho</>)
  },
  {
    imagePath: require('../assets/patagonia.png'),
    imgAlt: 'patagonia logo',
    content: (<>i like patagonia jackets but im not really into vests tbh

      <br />i already have a casual sweater and i have kinda a puffer one that's supposed to be for colder weather but i still got test that out. patagonia versatile tho so i like that<br />
      <br />both womens S and kids XL fits me</>)
  },

  ]

  const renderBrandNotes = () => {
    return (brandNotes.map((brandNote, idx) => {
      return (
        <BrandNote
          imagePath={brandNote.imagePath}
          imgAlt={brandNote.imgAlt}
          content={brandNote.content}
        />
      )
    }))
  }

  return (
    <>
      <FunHeader text={funFactText} />
      <h1>capitalism</h1>
      <p style={{ margin: '0 50px', textAlign: 'center', paddingBottom: '50px' }}>
        there's a lot of things i want and there's also a lot of things i don't want so i made this as a checklist thing so it's easy to keep updated and avoid multiple items. if you get an item, you can just check off that you got it anonymous or not anon too.</p>

      <h1>guidelines n stuff</h1>
      <p style={{ margin: '0 50px', textAlign: 'center', paddingBottom: '50px' }}>
        if something is lower priority i will specify. i have specific items to scroll through but first i'm gonna put some info about stuff like sizing and general stores or brands that i like to go to</p>

      {renderBrandNotes()}


    </>
  )
};

export default Wishlist