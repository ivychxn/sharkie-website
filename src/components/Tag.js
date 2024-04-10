import React from "react";
import "../styles/wishlist-item.css"

const Tag = ({ text, tagColor, size = '' }) => {

    const colors = {
        blue: '#87A8C7',
        blueBorder: '#4E6C88',
        green: '#B5EDC1',
        greenBorder: '#74AA8A',
        lilac: '#D1B2D2',
        lilacBorder: '#94739C',
        yellow: '#f4cb8d',
        yellowBorder: '#EDBC72',
        grey: '#A3A3A3',
        greyBorder: '#757575',
    }

    return (
        <div className={`price-tag ${size}`} style={{
            backgroundColor: colors[tagColor],
            borderRight: `1px solid ${colors[tagColor + 'Border']}`,
            borderBottom: `2px solid ${colors[tagColor + 'Border']}`
        }}>
            <ul>
                <li>
                    {text}
                </li>
            </ul>
        </div>
    )
};
export default Tag