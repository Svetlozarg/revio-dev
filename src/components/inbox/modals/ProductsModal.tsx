import * as React from 'react';
import { IconButton, Modal, Typography, Box, Button } from '@mui/material';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { tokens, useMode } from '@/theme/theme';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw',
  height: '80vh',
  boxShadow: 24,
  p: 4,
};

export default function ProductsModal() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* ProductsModal Button */}
      <IconButton onClick={handleOpen} sx={{ minWidth: 'auto' }}>
        <AddShoppingCartRoundedIcon
          onClick={handleOpen}
          sx={{ fontSize: '1.5rem' }}
        />
      </IconButton>

      {/* ProductsModal Content */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={style}
          style={{
            backgroundColor: colors.primary[400],
            border: '1px solid #000',
            borderColor: 'divider',
            borderRadius: '10px',
          }}
        >
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Text in a modal
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
