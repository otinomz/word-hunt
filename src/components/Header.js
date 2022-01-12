import { createMuiTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core'
import React from 'react'
import "./Header.css"
import category from '../data/category'

const Header = () => {
    const darkTheme = createMuiTheme({
        palette: {
            primary: {
                main: "#fff,"
            },
            type: 'dark',
            },
        });

    return (
        <div className="header">
            <span className="title">Word Hunt</span>

            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField id="standard-basic" label="Search a word" variant="standard" />
                     <TextField
                        id="outlined-select-currency"
                        select
                        label="Select"
                        helperText="Please select your currency"
                        >
                        {category.map((option) => (
                            <MenuItem>
                                english
                            </MenuItem>
                        ))} 
                    </TextField>
                </ThemeProvider>
                </div>
        </div>
    )
}

export default Header
