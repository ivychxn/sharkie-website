import React from "react";
import Folder from "./Folder";
import "../styles/fun-header.css"

const FunHeader = ({text}) => {
    return (
        <div className="fun-header">
            <div className="homelink">
                <Folder
                    linkName="home"
                    text="home"
                    folderColor="#87A8C7"
                    height="125" />
            </div>
            <div className="fun-fact">
                {text}
            </div>
        </div>
    )
};
export default FunHeader