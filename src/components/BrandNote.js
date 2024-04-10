import React from "react";
import "../styles/brand-note.css"

const BrandNote = ({ imagePath, imgAlt, content }) => {
    return (
        <div className="brand-note">
            <img src={imagePath} alt={imgAlt} width={'300px'} />
            <p>
                {content}
            </p>
        </div>
    )
};
export default BrandNote