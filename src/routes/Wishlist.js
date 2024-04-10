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

      <h1>things i want</h1>
      {renderWishlistItems()}


    </section>
  )
};

export default Wishlist