
import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { BackGround, SecondBackGround } from "../../assets";
import { GridLayout, StyledGrid } from '../../theme';
import { ImageGallery } from "../Gallery/gallery-component";
import { ShowCase } from '../ShowCase';
import { Grid, Typography } from '@mui/material';

import '../../fonts/font.css';
export const AnimationLayout: React.FC = () => {


    return (
        <div>
            <GridLayout container >
                    <Parallax pages={2} style={{ backgroundColor: "black", height: '100vh', width: '100vw', scrollbarWidth: "none" }}>
                        
                        <ParallaxLayer offset={0} speed={0.5} >
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundImage: `url(${BackGround})`,
                                backgroundSize: 'cover',
                                filter: "blur(5px)",
                                opacity: 0.8,
                            }} />
                            <Grid item  style={{ 
                            
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                zIndex: 1, 
                            }}>
       

                                <ShowCase/>                   
                            </Grid>
                            
  
                        </ParallaxLayer>
                        
                        <ParallaxLayer offset={1} speed={0.05}>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundImage: `url(${SecondBackGround})`,
                                backgroundSize: 'cover',
                                filter: "blur(5px)",
                                opacity: 0.8,
                            }} />
                            <StyledGrid item  >
                                <Typography sx={{color:"white", fontFamily:"hebrewFont", fontSize:{xs:"20px", sm:"50px"}}} >גלרייה</Typography>
                                <ImageGallery />
                            </StyledGrid>
                        </ParallaxLayer>
                    </Parallax>
                
            </GridLayout> 
        </div>
    );
}
