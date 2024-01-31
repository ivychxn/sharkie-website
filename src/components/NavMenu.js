import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const NavMenu = ({props}) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const onMenuItemClick = () => {
        setIsExpanded(!isExpanded)
    }

    const renderSubItems = () => {
        if(isExpanded) {
            return (props.subItems.map((item, idx) => {
                return (<NavMenu props={item} key={idx}/>)
            }))
        } else {
            return ''
        }
    }

    const renderIcon = () => {
        return isExpanded ? (<ExpandLessIcon sx={{ height: '4vh', width: 'auto', color: '#9199B7', marginLeft: '10px'}}/>) :
        (<ExpandMoreIcon sx={{ height: '4vh', width: 'auto', color: '#9199B7', marginLeft: '10px'}}/>)
    }

    return (
        <div className="menu-item">
            <div className={props.subItems?.length ? 'menu-link' : ''} onClick={onMenuItemClick}>
            <Link to={props.link}>{props.name}</Link>
            {props.subItems?.length ? renderIcon() : ''}
            </div>
            {props.subItems?.length ? renderSubItems() : ''}
        </div>
    )
};

export default NavMenu