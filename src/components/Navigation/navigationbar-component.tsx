
//@ts-ignore
import React, { useState } from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import MailIcon from '@mui/icons-material/Mail';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "../../fonts/font.css" 

const drawerItems = [
    { text: 'חנות', icon: <ShoppingCartIcon /> },
    { text: 'יצירת קשר', icon: <MailIcon /> },
];

export const NavBar:React.FC = () => {
    const navigation = useNavigate();
    //@ts-ignore
    const [open, setOpen] = useState(false);

    const handleChange = ( newValue: number) => {
        if (newValue === 0 ) 
            navigation('/');

        else if(newValue === 1) 
        {
            console.log(newValue);
            navigation('/contant');
        }
           
    }
    
    const toggleDrawer = (newOpen: boolean) => () => {
        console.log("hi");
        setOpen(newOpen);
    };
    return (
        <Grid container sx={{ backgroundColor: 'rgba(25, 118, 210, 1)', minHeight: '100vh' }}>
            <Box 
                sx={{ width: 250 }}
            
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
                >
                <List sx={{padding: 2}}>
                    <Typography variant="h6" sx={{ color: "white", fontFamily: "hebrewFont", fontWeight: 700 }}>תפריט</Typography>
                </List>  
                <Divider />
                <List>
                    {drawerItems.map((item) => (
                        <ListItem key={item.text} disablePadding >
                            <ListItemButton onClick={() => handleChange(drawerItems.indexOf(item))}>
                                <ListItemIcon sx={{color: 'white'}}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText  primary={item.text} sx={{ color: 'white', fontFamily: 'hebrewFont' }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />

            </Box>
        </Grid>
    );
}