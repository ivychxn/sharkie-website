import React from "react";
import "../styles/tags.css"

const Tag = ({ text, tagColor, size = '', type = 'price', selected = false }) => {

    return (
        <div className={`price-tag ${size} ${tagColor}-${type}-tag ${selected ? 'selected': ''}`}>
            <ul>
                <li>
                    {text}
                </li>
            </ul>
        </div>
    )
};
export default Tag