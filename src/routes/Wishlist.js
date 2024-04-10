import React from "react";
import FunHeader from "../components/FunHeader";
import BrandNote from "../components/BrandNote";
import { brandNotesContent } from "../content/brandNotesContent";
import { wishlistItemData } from "../content/wishlistItemData";
import WishlistItem from "../components/WishlistItem";


const Wishlist = () => {
  const funFactText = "did you know the shortfin mako shark is the fastet shark alive? bro can go 43mph vrooooom vroooooooooom "

  const renderBrandNotes = () => {
    return (brandNotesContent.map((brandNote, idx) => {
      return (
        <BrandNote
          key={idx}
          imagePath={brandNote.imagePath}
          imgAlt={brandNote.imgAlt}
          content={brandNote.content}
        />
      )
    }))
  }


  const renderWishlistItems = () => {
    return (wishlistItemData.map((wishlistItem, idx) => {
      const { itemName, price, images, indicatorSectionText, description, tags } = wishlistItem

      return (
        <WishlistItem
          itemName={itemName}
          price={price}
          images={images}
          indicatorSectionText={indicatorSectionText}
          description={description}
          tags={tags}
        />
      )
    }))
  }

  return (
    <section>
      <FunHeader text={funFactText} />
      <h1>capitalism</h1>

      <p className="intro-p">
        see it's kinda complicated bc i feel like if i really want or need something, i just buy it myself. so ig this list is like, all the stuff that i kinda want but don't actually wanna buy instantly??? idk maybe it's just stuff i'll eventually buy or stuff that i'm waiting to be on sale or just stuff i want will to buy so i don't have to buy it<br /><br />

        there's a lot of things i want and there's also a lot of things i don't want so i made this kinda checklist thing so it's easy to keep updated and avoid multiple items</p>

      <h1>guidelines n stuff</h1>
      <p className="intro-p">
        if something is lower priority i will specify. i have specific items to scroll through but first i'm gonna put some info about stuff like sizing and general stores or brands that i like to go to</p>

      {renderBrandNotes()}

      <p>ok tbh i bought a lot of clothes alr so i technically don't need more bc i also don't really go out that often since i wfh. 
        also there's like, hardly anything really do nowadays that doesn't require me to spend money and i love the idea of spending
        money but i don't actually like how it makes the numbers in my bank account lower</p>
        
      <p>more on clothes: i wear silver not gold and i don't like diamonds it's a dumb industry. in this era if you buy me socks
        ur dead to me i hate socks and i hate wearing real shoes i like wearing my lil flip flops and slides. i also don't like turtlenecks
        they're not comfy idk why ppl just lie about it all the time. i'm also trying to move away from 
        polyester and similar materials bc it's basically plastic and prob fast fashion type of unsustainable but also like, 
        if it's a really good deal and it looks cute then what am i gonna do lmaoooo</p>
      <p>oh but i draw the line at shein tho like i don't ever wanna own anything from them</p>

      <h1>things i want</h1>
      {renderWishlistItems()}


    </section>
  )
};

export default Wishlist