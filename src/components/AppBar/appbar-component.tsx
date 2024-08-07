import React, { useState} from "react";
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Tabs, IconButton, TextField, Autocomplete } from "@mui/material";
import Drawer from '@mui/material/Drawer';
import { NavBar } from "../Navigation/navigationbar-component";
import { NavigationCart } from "../Navigation";
import { logoImg } from "../../assets";
import { TabStyle, LogoImg, IconMenuStyle, Title, Search} from "../../theme";
import { ItemList , ItemListInterface} from "../../assets";



export const MainAppBar: React.FunctionComponent = () => {
    const pages = ["יצירת קשר", "חנות"];
    const [openMenu, setOpenMenu] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const navigation = useNavigate();
    
  

    const labeltest = ItemList.map(item => ({ label: item.name, obj: item  }));
    const onClickToItem = (image: ItemListInterface) => {
        navigation('/item', { state: {  image } });
      };
      //@ts-ignore
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        if (newValue === 1 ) {
            navigation('/')
        }
        else if(newValue === 0) 
            navigation('/contant')

    }

    const handelLogoClick = () => {
            navigation('/')
    }
        

    const toggleDrawerMenu = (newOpen: boolean) => () => {
        setOpenMenu(newOpen);
    };

    const toggleDrawerCart = (newOpen: boolean) =>() => {
        setOpenCart(newOpen)
    }
    
    return (
        <AppBar position="static" sx={ {backgroundColor: 'rgba(25, 118, 210, 0.7)' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <IconButton sx={{ position: "absolute", left: 30, display: { xs: "flex", md: "none" } }} edge="start" color="inherit" aria-label="menu" onClick={toggleDrawerMenu(true)}>
                    <IconMenuStyle />
                </IconButton>
                <Drawer
                    anchor="left"
                    open={openMenu}
                    onClose={toggleDrawerMenu(false)}
                >
                    <NavBar />
                </Drawer>


                <Drawer
                    anchor="left"
                    open={openCart}
                    onClose={toggleDrawerCart(false)}
                >
                    <NavigationCart />
                </Drawer>
                <Box sx={{ marginRight: { sm: "50px", xs: "80px" } }}>
                    <Search>
                        <Autocomplete
                            options={labeltest}
                            sx={{
                                width: { xs: 150, sm: 200, md: 300, lg: 400, xl: 500 },
                                '& .MuiAutocomplete-input': {
                                    height: { xs: '0.5rem', sm: '1rem' },
                                    
                                },
                                direction: 'rtl',
                            }}
                            getOptionLabel={(option) => option.label}
                            //@ts-ignore
                            onChange={(event, value) => {
                                if (value) onClickToItem(value.obj);
                            }}
                            renderInput={(params: any) => (
                                <TextField
                                {...params}
                                label="חפש מוצר"
                                variant="filled"
                                InputLabelProps={{
                                    sx: { color: 'white', fontFamily: 'hebrewFont', fontSize: { xs: 10, sm: 15, md: 15, lg: 15, xl: 15 } },
                                }}
                                />
                            )}
                        />
                    </Search>
                </Box>

                <Box>
                    <Tabs sx={{ display: { xs: "none", md: "flex" } }}  onChange={handleChange}>
                        {pages.map((page, index) => (
                            <TabStyle
                                key={index}
                                label={page}
                            />
                        ))}
                    </Tabs>
                </Box>
                <Box sx={{ position: "absolute", right: 0, marginRight: 1, display: "flex", alignItems: "center" }}>
                    <IconButton onClick={handelLogoClick}>
                        <Title sx={{marginRight: 0.5}}>ARMOURY TECH</Title>
                        <LogoImg src={logoImg} />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

/*

                <IconButton sx={{ position: "absolute", left:{xs:"4rem" , sm:100 }  }} edge="start" color="inherit" aria-label="menu" onClick={toggleDrawerCart(true)}>
                    <IconCartStyle />
                </IconButton>
*/