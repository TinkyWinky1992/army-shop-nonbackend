import { Typography, Modal, Box } from "@mui/material";
import React, { useImperativeHandle, forwardRef } from "react";
import '../../fonts/font.css'

//@ts-ignore
export const AlertModal = forwardRef((props, ref) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    // Add media queries to adjust size for smaller screens
    '@media (max-width: 600px)': {
      width: 300,
      padding: 2,
    },
    '@media (max-width: 400px)': {
      width: 250,
      padding: 1,
    },
    '@media (max-width: 300px)': {
      width: 200,
      padding: 0.5,
    },
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useImperativeHandle(ref, () => ({
    open: handleOpen
  }));

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

       
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4"  fontFamily="hebrewFont"
            sx={{direction: "rtl", fontSize:{xs: 15, sm: 15, xl: 20}}}>
            בשביל להמשיך לבצע את הזמנתכם תצרו קשר איתנו בטלפון:
          </Typography>
          <Typography variant="h4" id="modal-modal-description" fontFamily="hebrewFont"  sx={{ fontSize:{xs: 15, sm: 15, xl: 20} ,mt: 3, direction: "rtl"}}>
            0523022354
          </Typography>
        </Box>
      </Modal>
    </div>
  );
});