import React, { useEffect, useState } from "react";
import BrandNote from "../components/BrandNote";
import { brandNotesContent } from "../content/brandNotesContent";
import { wishlistItemData } from "../content/wishlistItemData";
import WishlistItem from "../components/WishlistItem";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Tag from "../components/Tag";

const Wishlist = () => {
  const tagCategories = [
    {
      text: 'fashion',
      tagColor: 'pink',
      selected: false
    },
    {
      text: 'beauty',
      tagColor: 'green',
      selected: false
    },
    {
      text: 'dog',
      tagColor: 'teal',
      selected: false
    }, 
    {
      text: 'electronics',
      tagColor: 'periwinkle',
      selected: false
    },
    {
      text: 'food',
      tagColor: 'yellow',
      selected: false
    },
    {
      text: 'luv having extra',
      tagColor: 'orange',
      selected: false
    },
    {
      text: 'misc',
      tagColor: 'grey',
      selected: false
    },
  ]

  const [selectedSortOption, setSelectedSortOption] = useState('priority')
  const [sortedWishlist, setSortedWishlist] = useState(wishlistItemData)
  const [selectedTags, setSelectedTags] = useState(tagCategories)

  useEffect(() => {
    setSortedWishlist(handleSort()) // eslint-disable-next-line
  }, [selectedSortOption])

  const onTagClick = (idx) => {
    const tagFilters = [...selectedTags];
    tagFilters[idx].selected = !tagFilters[idx].selected
    setSelectedTags(tagFilters)
    handleFilter()
  }

  const handleFilter = () => {
    const wlCopy = [...wishlistItemData];
    const filteredList = [];
    const selectedTagNames = selectedTags.filter((tag) => { return tag.selected }).map(({ text }) => text)
    if (selectedTagNames.length) {
      wlCopy.forEach((item) => {
        let tags = item.tags.map(({ text }) => text)
        if (tags.some(name => selectedTagNames.includes(name))) {
          filteredList.push(item)
        }
      })
      setSortedWishlist(handleSort(filteredList))
    } else {
      setSortedWishlist(handleSort(wishlistItemData))
    }
  };

  const resetFilter = () => {
    setSortedWishlist(handleSort(wishlistItemData))
    const tagFilters = [...selectedTags];
    tagFilters.forEach((tag) => {
       tag.selected = false
      })
  }

  const renderFilterTags = () => {
    return (selectedTags.map((tag, idx) => {
      return (
        <button className="button-tag" onClick={() => { onTagClick(idx) }}>
          <Tag
            text={tag.text}
            tagColor={tag.tagColor}
            size={'small'}
            type={'filter'}
            selected={tag.selected}
          />
        </button>
      )
    }))

  }

  const handleSort = (wl = sortedWishlist) => {
    const wlCopy = [...wl]
    wlCopy.sort((a, b) => {
      if (selectedSortOption === 'price: low to high') {
        return a.price - b.price;
      }
      else if (selectedSortOption === 'price: high to low') {
        return b.price - a.price;
      } else {
        return a.priority - b.priority;
      }
    });
    return wlCopy;
  };

  const onSortChange = (e) => {
    setSelectedSortOption(e.target.value)
  }

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
    return (sortedWishlist.map((wishlistItem, idx) => {
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
      {/* <FunHeader text={sharkFacts[Math.floor(Math.random()*3)]} /> */}
      <h1>capitalism</h1>

      <p className="intro-p">
        see it's a lil complicated bc if i really want or need something, i just buy it myself 
        so there's not really anything that i want that badly on this list oops.
        ig this list is like, all the stuff that i kinda want but not enough to get it instantly 
        or i'm just waiting for it to go on sale. some stuff i just list it so will can buy it
        so then i don't have to</p>

      <h1>guidelines n stuff</h1>
      
      <p>
        um actually i'm gonna go to japan later and buy a whole new wardrobe and with the currency conversion it's gonna be rly cheap so i don't even rly need clothes ngl
      </p>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      {renderBrandNotes()}
      </div>

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

      <div className="filter-sort-section">
        <div className="filter-section">
          <h4>filter by tags:</h4>
          <div className="tag-list">
          <button className="button-tag" onClick={resetFilter}>
          <Tag
            text={'reset all'}
            tagColor={'blue'}
            size={'small'}
            type={'filter'}
            selected={false}
          />
        </button>
            {renderFilterTags()}
          </div>
        </div>
        <div>
          <FormControl variant="standard" sx={{
            m: 1,
            minWidth: 150,
            "& .Mui-focused": {
              root: {
                color: '#FFFFFF',
                background: 'none',

              },
              color: '#FFFFFF',
              background: 'none',
            },
            "& .MuiInput-underline:before": {
              borderBottomColor: "#354A6A",
            },
            "& .MuiInput-underline": {
              borderBottomColor: "#354A6A",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "#354A6A",
            },
            "& label.Mui-focused": {
              color: "#FFFFFF",
              background: 'none'
            },
            "& label.Mui-hover": {
              color: "#FFFFFF",
            },
            "& .MuiInput-underline:hover:before": {
              borderBottomColor: "#354A6A"
            }
          }}>
            <InputLabel
              sx={{
                color: '#FFFFFF',

              }}
            >sort by</InputLabel>
            <Select
              labelId="sort"
              id="sort-wl"
              value={selectedSortOption}
              label="Sort"
              onChange={onSortChange}
              sx={{
                color: '#FFFFFF',
                background: 'none',
                "& .MuiSvgIcon-root": {
                  color: "white",
                },
                "& :focus": {
                  background: 'none',
                }
              }}

              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: '#354A6A',
                    color: '#FFFFFF',
                  },
                },
              }}
            >
              <MenuItem value={'priority'}>priority</MenuItem>
              <MenuItem value={'price: low to high'}>price: low to high</MenuItem>
              <MenuItem value={'price: high to low'}>price: high to low</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      {renderWishlistItems()}


    </section>
  )
};

export default Wishlist
