import React from "react";
import "../styles/folder.css"
import { Link } from "react-router-dom";

const Folder = ({linkName, text, folderColor='#87A8C7'}) => {
  return (
    <div>
      <svg width="321" height="219" viewBox="0 0 321 219" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_42_5033)">
          <rect x="4.5" y="0.5" width="123" height="101" rx="20.5" fill={folderColor} stroke="black" />
          <rect x="5" y="30" width="312" height="181" rx="15" fill={folderColor} />
        </g>
        <defs>
          <filter id="filter0_d_42_5033" x="0" y="0" width="321" height="219" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_42_5033" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_42_5033" result="shape" />
          </filter>
        </defs>
      </svg>
      <div className="folder-container">
        <div className="folder-title">
          <Link to={linkName}>{text}</Link><br></br>
          </div>
      </div>
    </div>
  );
};

export default Folder