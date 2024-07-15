import React ,{useRef} from 'react';
import { useLocation } from 'react-router-dom';
import { GridLayout, TitleRsponsive } from '../../theme';
import { Box, Typography, Button, Grid } from '@mui/material';

import "../../fonts/font.css";
import { itembg } from '../../assets';
import { AlertModal } from '../Alert';

export const ItemShowCase: React.FC = () => {
    const { state } = useLocation();
    const alertRef = useRef<{ open: () => void }>(null);
    
    const handleOpenModel = () => {
        alertRef.current?.open();
      
    }
    return (
        <GridLayout container sx={{  justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${itembg})`,   minHeight: '100vh', }}>
        <Box sx={{
          maxWidth: { xl:"20%",md:'30%', xs:"60%" }, 
          maxHeight: { md:'15%'  }, 
          border: 1, 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 4,
          borderRadius: 8, 
          boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)', 
          mr:"20%",
          marginRight: {xs:"5px"},
          marginLeft: {xs:"5px"},
        }}>
          <img
            src={state.image.img}
            alt={`Image ${state.image.name}`}
            style={{
              width: '100%', 
              height: '60%',
              objectFit: 'contain',
              borderRadius: 8,
            }}
            loading="lazy"
          />
        </Box>
        <Box sx={{
            width: { xl: "25%", md: "40%", xs: "70%", sm: "100%" },
            height: { xl: "40%", md: "30%", xs: "10%", sm: "20%" },
            ml: { xl: 20, md: 20, xs: 0, sm: 0 },
            marginBottom: { xl: 0, md: 0, xs: 10, sm: 10},
          }}>
            <TitleRsponsive  sx={{fontFamily:"hebrewFont", direction: "rtl", color:"black"}} >{state.image.name}</TitleRsponsive>
            <Typography variant="h6" sx={{fontFamily:"hebrewFont", direction: "rtl", color:"black", fontSize:{xl:"20px", md:"15px",sm:"15px", xs:"10px"}}} >{state.image.details}</Typography>
            
            <Grid item sx={{ border: 1, borderRadius: 4}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h4" sx={{ ml:{xs:1,sm:1} , color:"black", fontSize:{xl:"40px", md:"30px", xs:"15px"}}}>
                    {state.image.price}
                    </Typography>
                    <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                    mt: 1,
                    }}>

                    <Button variant="contained" onClick={handleOpenModel} sx={{ marginBlockEnd: 5, backgroundColor: "#dc3545", color: "white", fontFamily: "hebrewFont" }}>
                        קנייה מהירה
                    </Button>
                    </Box>

                </Box>
            </Grid>

        </Box>
        <AlertModal  ref={alertRef} />
      </GridLayout>
      
    );

};



/**
 * 
 *                     <Button variant="contained" onClick={handleAddToCart} sx={{ marginBlockEnd: 5, backgroundColor: "#007bff", color: "white", fontFamily: "hebrewFont" }}>
                        הוספה לעגלה
                    </Button>
                   <NumberInput value={quantity} onChange={(event, value:number | undefined) => setQuantity(value?? 0)}/>


                       const handleAddToCart = () => {
      console.log(quantity);
      store.dispatch(addItemToCart(state.image, quantity));
    };
 */