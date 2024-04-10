import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { List, ListItem } from "@mui/material";

const NavMenu = ({ navLink, toggleDrawer, isSubItem }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const hasSubItems = navLink.subItems?.length > 0

    const onMenuItemClick = () => {
        setIsExpanded(!isExpanded)
    }

    const renderSubItems = () => {
        if (isExpanded) {
            return (navLink.subItems.map((item, idx) => {
                return (<NavMenu navLink={item} key={idx} toggleDrawer={toggleDrawer} isSubItem={true} />)
            }))
        } else {
            return ''
        }
    }

    const renderIcon = () => {
        return isExpanded ? (<ExpandLessIcon sx={{ height: '4vh', width: 'auto', color: '#9199B7', marginLeft: '10px' }} />) :
            (<ExpandMoreIcon sx={{ height: '4vh', width: 'auto', color: '#9199B7', marginLeft: '10px' }} />)
    }

    return (
        <List sx={{
            padding: `5px 0px 5px ${isSubItem ? '20px' : '5px'}`,
            }}>
            <ListItem onClick={hasSubItems? onMenuItemClick : toggleDrawer(false)}>
                <Link to={navLink.link}>{navLink.name}</Link>
                {hasSubItems ? renderIcon() : ''}
            </ListItem>
            {hasSubItems ? renderSubItems() : ''}
        </List>
    )
};

export default NavMenu