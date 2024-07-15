import React, { useEffect, useState } from 'react';
import { GridLayout } from '../../theme';
import { BackGround } from "../../assets";
import { Grow, Typography, Grid, Box } from '@mui/material';
import { LinkMap } from './maplink-component';
export const Contnant: React.FC = () => {
  const [checked, setChecked] = useState(false);;

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <GridLayout container sx={{  
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh', 
    }}>
        <Grid item sx={{
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          backgroundImage: `url(${BackGround})`, 
          backgroundSize: 'cover', 
          filter: "blur(5px)", 
          zIndex: -1, 
        }} />
          <Box sx={{
                border: 1, 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 4,
                borderRadius: 8, 
                boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)', 
                marginRight: {xs:"5px"},
                marginLeft: {xs:"5px"},
              }}>
                
              <LinkMap/>
          </Box>

            <Grid item sx={{
              position: 'elative', 
              zIndex: 1, 
            }}>
              <Grow
                  in={checked}
                  style={{ transformOrigin: '0 0 0' }}
                  {...(checked? { timeout: 1000 } : {})}
                  >
                    <Typography variant="h6" sx={{
                      color: "white",
                      fontFamily: "hebrewFont",
                      fontSize: { xs: "20px", sm: "50px" },
                      ml: 5,
                      mr: 5,
                    }}>
                      :ליצירת קשר
                    </Typography>
                </Grow>
                    
                    
                <Grow
                  in={checked}
                  style={{ transformOrigin: '0 0 0' }}
                  {...(checked? { timeout: 1000 } : {})}
                  >
                    <Typography variant="subtitle1"sx={{
                      color: "white",
                      fontFamily: "monospace",
                      fontSize: { xs: "20px", sm: "40px" },
                      ml: 5,
                      mr: 5,
                      direction:"rtl"
                    }}>
                        טלפון: 0523022354
                    </Typography>
                </Grow>

                <Grow
                  in={checked}
                  style={{ transformOrigin: '0 0 0' }}
                  {...(checked? { timeout: 1000 } : {})}
                  >
                    <Typography variant="subtitle1"sx={{
                      color: "white",
                      fontFamily: "hebrewFont",
                      fontSize: { xs: "20px", sm: "40px" },
                      ml: 5,
                      mr: 5,
                      direction:"rtl"
                    }}>
                      כתובת: משה דיין 26 יהוד
                    </Typography>
                </Grow>



          </Grid>
        </GridLayout>
  );
};