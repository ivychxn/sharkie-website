import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import { AppBar, Box, Drawer, IconButton, ThemeProvider, Toolbar } from "@mui/material";
import { createTheme } from '@mui/material/styles';

const MobileNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const theme = createTheme({
        palette: {
            primary: {
                main: '#28374E',
                contrastText: '#9199B7'
            },
        },
        components: {
            MuiDrawer: {
                styleOverrides: {
                    paper: {
                        backgroundColor: "#28374E",
                        color: "#9199B7",
                    }
                }
            }
        }
    });

    const toggleDrawer = (newOpen) => () => {
        setIsMenuOpen(newOpen);
    };

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
            return (<NavMenu navLink={navLink} toggleDrawer={toggleDrawer} isSubItem={false} />)
        }))
    }

    const navList = (
        <Box theme={theme} sx={{ width: 250 }} role="presentation">
            {renderNavLinks()}
        </Box>
    );

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="fixed" style={{ textAlign: 'center' }}>
                <Toolbar>
                    <IconButton
                        size="medium"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, marginRight: '0', paddingTop: '2px', paddingBottom: '2px', position: 'absolute' }}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon sx={{ maxHeight: '6vh', minHeight: '40px', width: 'auto' }} />
                    </IconButton>
                    <div style={{ width: "100%", boxSizing: 'border-box' }}><Link to="/">ivy shark club</Link></div>
                </Toolbar>
            </AppBar>
            <Drawer
                open={isMenuOpen}
                onClose={toggleDrawer(false)}
            >
                {navList}
            </Drawer>
        </ThemeProvider>
    )
};
export default MobileNav