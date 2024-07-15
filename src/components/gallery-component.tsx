import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { ButtonResponsive } from '../theme';
import { GridLayout, ImgResponsive } from '../theme';
import { Typography } from '@mui/material';
import { ItemList , ItemListInterface} from "../assets";

export const ImageGallery: React.FC = () => {
  const navigate = useNavigate();


  const onClick = (image: ItemListInterface) => {
    navigate('/item', { state: { image } });
  };


  return (
    <GridLayout sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <ImageList sx={{ 
          width: { xl:700, xs: 300 }, 
          height: { xl:700, xs: 500 },
          margin: '0 auto', 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
           scrollbarWidth: "none"
          }} variant="woven"  cols={3} gap={20}>
        {ItemList.map((image: ItemListInterface) => (
          <ButtonResponsive variant="contained" sx={{ width:{xs:200, sm:300}, height:{xs:200, sm: 300},backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: { xs: 0, sm: 1 }, margin: 2 }} onClick={() => onClick(image)}>
            <ImageListItem key={image.name} sx={{ width: {xs:300, sm:300}, height: {xs:300, sm: 300} }}>
              <ImgResponsive  sx={{marginTop: {xs:10, sm:5}}}src={image.img} alt={image.name} loading="lazy" 
                style={{
                  maxWidth: "50%",
                  maxHeight: "50%",
                  borderRadius: "10px",
                }} 
              />
              <ImageListItemBar
                title={
                  <Typography sx={{fontSize:{xs:15, sm:20}} }noWrap variant="body2" color="inherit">
                    {image.name}
                  </Typography>
                }
                subtitle={
                  <Typography sx={{fontSize:{xs:15, sm:20}}} noWrap variant="body2" color="inherit">
                    {image.price}
                  </Typography>
                }
                position="below"
              />
            </ImageListItem>
          </ButtonResponsive>
        ))}
      </ImageList>
    </GridLayout>
  );
};