import React, { useState } from "react";
import "../styles/wishlist-item.css"
import Tag from "../components/Tag";
import 'react-slideshow-image/dist/styles.css'

const WishlistItem = ({ itemName, price, images, indicatorSectionText, description, tags }) => {

    const [activeImgIdx, setActiveImgIdx] = useState(0);

    const renderTags = () => {
        return (tags.map((tag, idx) => {
            return (
                <Tag
                    text={tag.text}
                    tagColor={tag.tagColor}
                    size={'small'}
                />
            )
        }))
    }

    const renderImage = () => {
        // just in case we get out of bounds for whatever rare reason
        if (images.length < activeImgIdx + 1) {
            return ''
        }
        const { imagePath, imgAlt } = images[activeImgIdx]
        return (
            <div className="each-slide-effect">
                <img src={imagePath} alt={imgAlt} />
            </div>
        )
    }

    const renderIndicators = () => {
        return (images.map((image, idx) => {
            const indicatorText = image.indicatorText
            return (
                <>
                    {idx !== 0 ? (<div key={idx} className="indicator-divider">|</div>) : ''}
                    <button className={activeImgIdx === idx ? 'active' : ''} onClick={() => { setActiveImgIdx(idx) }}>{indicatorText}</button>
                </>
            )
        }))
    }

    const renderImgOptionSection = () => {
        if (images.length === 1) {
            return ''
        }
        return (
            <section style={{ paddingBottom: '20px' }}>
                <p style={{ margin: 0 }}>
                    {indicatorSectionText}
                </p>
                <div className="wl-img-indicators">
                    {renderIndicators()}
                </div>
            </section>
        )
    }

    return (
        <div className="wl-item-container">
            <article className="wl-item-content">
                {renderImage()}
                <div className="wl-item-header">
                    <h2>{itemName}</h2>
                    <Tag text={`$${price.toLocaleString()}`} tagColor={"blue"} />
                </div>

                <>
                    {description}
                </>

                {renderImgOptionSection()}

                <div className="wl-tags">
                    {renderTags()}
                </div>
            </article>
        </div>
    )
};
export default WishlistItem