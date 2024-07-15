import React, { useState, useEffect } from "react";
import { Grid, IconButton, Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { GridLayout } from "../theme";
import Grow from '@mui/material/Grow';
import { ItemList } from "../assets";
export const ShowCase: React.FunctionComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
   
  }, []);

  const moveToNextImg = () => {
    setFadeOut(true);
    setChecked(false); // Reset checked state to false
    setTimeout(() => {
      const nextIndex = (currentIndex + 1) % ItemList.length;
      setCurrentIndex(nextIndex);
      setFadeOut(false);
      setChecked(true); // Set checked state to true again
    }, 500);
  };

  const moveToBelowImg = () => {
    setFadeOut(true);
    setChecked(false); // Reset checked state to false
    const nextIndex = currentIndex === 0 ? ItemList.length - 1 : currentIndex - 1;
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setFadeOut(false);
      setChecked(true); // Set checked state to true again
    }, 500);
  };

  if (ItemList.length === 0) {
    return <div>Loading...</div>; 
  }

  return (
    <Grid container spacing={2} sx={{  justifyContent: 'center', alignItems: 'center',   minHeight: '100vh', }}>
      <GridLayout container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: "center" }}>
        <Box sx={{
          maxWidth: { xl: "100%", md: "100%", xs: "100%" },
          maxHeight: "100%",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mr: "20%",
          marginRight: { xs: "5px" },
          marginLeft: { xs: "5px" },
        }}>
          <IconButton onClick={moveToBelowImg}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <Box sx={{ maxWidth: "70%", maxHeight: "70%", ml: 3, mr: 3 }}>
            <img
              src={ItemList[currentIndex].imgpng}
              alt={`image ${currentIndex}`}
              style={{
                maxWidth: "70%",
                maxHeight: "70%",
                opacity: fadeOut ? 0 : 1,
                transition: "opacity  0.5s ease",
              }}
            />
          </Box>
          <IconButton onClick={moveToNextImg}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            width: { xl: "25%", md: "40%", xs: "100%", sm: "100%" },
            height: { xl: "40%", md: "30%", xs: "20%", sm: "20%" },
            ml: { xl: 20, md: 20, xs: 0, sm: 0 },
            marginTop: {xs:"-300px", md:"-100px"}
          }}
        >
          <Grow
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 1000 } : {})}
            onExit={() => setChecked(false)}
          >
            <Typography sx={{
              color: "white",
              fontFamily: "hebrewFont",
              fontSize: { xs: "10px", sm: "50px" },
              ml: 5,
              mr: 5,
              
            }}
            >
              {ItemList[currentIndex].name}
            </Typography>
          </Grow>
          <Grow
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 1000 } : {})}
            onExit={() => setChecked(false)}
          >
            <Typography sx={{
              color: "white",
              fontFamily: "hebrewFont",
              fontSize: { xs: "15px", sm: "30px" },
              ml: 5,
              mr: 5,
              direction: 'rtl'
            }}
            >
              {ItemList[currentIndex].details}
            </Typography>
          </Grow>
        </Box>
      </GridLayout>
    </Grid>
  );
};