import React from "react";
import "../styles/brand-note.css"

const BrandNote = ({imagePath, imgAlt, content}) => {
    return (
        <div className="brand-note">
            <div className="brand-image">
                <img src={imagePath} alt={imgAlt} width={'300px'} />
            </div>
            <p>
                {content}
            </p>
        </div>
    )
};
export default BrandNote