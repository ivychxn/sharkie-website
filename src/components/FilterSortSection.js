import React from "react";
import { InputLabel, MenuItem, FormControl, Select, ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';

const FilterSortSection = () => {

    const theme = createTheme({
        components: {
            MuiSelect: {
                styleOverrides: {
                    select: {
                        color: '#FFFFFF',
                        ":focus": {
                            color: '#FFFFFF',
                            background: 'none',
                            borderBottomColor: '#354A6A'
                        },
                    },
                    MuiSvgIcon: {
                        color: '#FFFFFF',
                    }
                },
            },
            MuiInput: {
                styleOverrides: {
                    label: {
                    ":focus": {
                        color: '#FFFFFF',
                    },
                },
                    underline: {
                        ":before": {
                            borderBottomColor: "#354A6A",
                        },
                        ":hover": {
                            borderBottomColor: "#354A6A",
                        },
                        ":hover:before": {
                            borderBottomColor: "#354A6A",
                        },
                        ":after": {
                            borderBottomColor: "#354A6A",
                        },
                        borderBottomColor: "#354A6A",

                    }
                }
            },
            MuiInputLabel: {
                styleOverrides: {
                    ":focus": {
                        color: '#FFFFFF',
                    },
                    color: '#FFFFFF'
                }
            },

        }
    });

    return (
        <ThemeProvider theme={theme}>
            <FormControl variant="standard" sx={{
                m: 1,
                minWidth: 150,
                "& .MuiInput-underline:hover:before": {
                  borderBottomColor: "#354A6A"
                }
            }}>
                <InputLabel>sort by</InputLabel>
                <Select
                    labelId="sort"
                    id="sort-wl"
                    value={'priority'}
                    label="Sort"
                    onChange={() => { }}
                // sx={{
                //     color: '#FFFFFF',
                //     backgroundColor: 'none',
                //     "& .MuiSvgIcon-root": {
                //         color: "white",
                //     }
                // }}

                // MenuProps={{
                //     PaperProps: {
                //         sx: {
                //             bgcolor: '#354A6A',
                //             color: '#FFFFFF',
                //         },
                //     },
                // }}
                >
                    <MenuItem value={'priority'}>priority</MenuItem>
                    <MenuItem value={'price: low to high'}>price: low to high</MenuItem>
                    <MenuItem value={'price: high to low'}>price: high to low</MenuItem>
                </Select>
            </FormControl>
        </ThemeProvider>
    )
};
export default FilterSortSection