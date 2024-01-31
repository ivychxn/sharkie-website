import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import NavMenu from "./NavMenu";

const MobileNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const onMenuClick = () => {
        if (isMenuOpen) {
            collapseMenu()
        }
        else {
            expandMenu()
        }
        setIsMenuOpen(!isMenuOpen)
    }

    const collapseMenu = () => {
        document.documentElement.style.overflow = 'visible';
        document.body.scroll = "yes";
    }

    const expandMenu = () => {
        document.documentElement.style.overflow = 'hidden';
        document.body.scroll = "no";
    }

    const navLinks = [
        {
            name: 'home',
            subItems: [],
            link: '/'
        },
        {
            name: 'join',
            subItems: [],
            link: 'test'
        },
        {
            name: 'other stuff',
            subItems: [{
                name: 'wishlist',
                link: '/wishlist'
            }, {
                name: 'about',
                link: '/about'
            }],
        }
    ]

    const renderNavLinks = () => {
        return (navLinks.map((navLink, idx) => {
            return (<NavMenu props={navLink} key={idx}/>)
        }))
    }

    return (
        <>
            <div className="nav">
                <div className="nav-title">
                    <Link to="/">ivy shark club</Link>
                </div>
            </div>
            <div className="menu-icon" onClick={onMenuClick}>
                <MenuIcon sx={{ height: '6vh', width: 'auto', color: '#9199B7' }} />
            </div>
            <div className="overlay" style={{ visibility: isMenuOpen ? 'visible' : 'hidden' }} onClick={onMenuClick} />
            <div className="menu" style={{ visibility: isMenuOpen ? 'visible' : 'hidden' }}>
                <div className="menu-close-icon" onClick={onMenuClick} >
                    <CloseIcon sx={{ height: '6vh', width: 'auto', color: '#9199B7' }} />
                </div>
                {renderNavLinks()}
            </div>
        </>
    )
};
export default MobileNav