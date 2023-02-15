import { useState } from 'react';
import { Box, Button, Typography, Modal, IconButton } from '@mui/material';
import { tokens, useMode } from '@/theme/theme';
import CloseIcon from '@mui/icons-material/Close';
import BroadcastForm from '../forms/BroadcastForm';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: '800px',
  height: '890px',
  border: '1px solid #000',
  borderColor: 'divider',
  boxShadow: 24,
  borderRadius: '10px',
  p: 2,
  overflow: 'auto',
};

export default function BroadcastModal() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* BroadcastModal Button */}
      <Button
        sx={{
          backgroundColor: colors.blueAccent[700],
          color: colors.grey[100],
          fontSize: '14px',
          fontWeight: 'bold',
          padding: '5px 20px',
          borderRadius: '10px',
          textTransform: 'none',
        }}
        onClick={handleOpen}
      >
        + New Broadcast
      </Button>

      {/* BroadcastModal Content */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={style} style={{ backgroundColor: colors.primary[400] }}>
          {/* Header */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography
              variant='h4'
              sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}
            >
              New Broadcast
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon sx={{ fontSize: '2rem', cursor: 'pointer' }} />
            </IconButton>
          </Box>

          {/* Broadcast Form */}
          <BroadcastForm handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}
