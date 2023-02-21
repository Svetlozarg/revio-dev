import { useRef, useState, MutableRefObject } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton, Input, TextField, useTheme } from '@mui/material';
import { tokens } from '@/theme/theme';
import CloseIcon from '@mui/icons-material/Close';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface GateWayData {
  text: string;
  itemValue: string;
  disabled: boolean;
}

const gateWayData: Array<GateWayData> = [
  { text: 'None', itemValue: '', disabled: false },
  { text: 'Visa', itemValue: 'visa', disabled: false },
  { text: 'MasterCard', itemValue: 'masterCard', disabled: false },
];

export default function DraftOrderModal() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [gateWay, setGateWay] = useState<string>('');
  let note: MutableRefObject<any> = useRef(null);

  const handleGateWayChange = (event: any) => {
    setGateWay(event.target.value);
  };

  const handleSave = () => {
    interface FormData {
      products?: Array<Object>;
      gateWay: string;
      note: MutableRefObject<any>;
    }
    const formData: FormData = {
      gateWay: gateWay,
      note: note.current.value
    }
    console.log(formData);
    
  }
  return (
    <div>
      <Button
        sx={{
          backgroundColor: colors.blueAccent[700],
          color: colors.grey[100],
          fontSize: '14px',
          fontWeight: 'bold',
          padding: '5px 20px',
          borderRadius: '10px',
          border: '2px solid transparent',
          textTransform: 'none',
          '&:hover': {
            borderColor: colors.blueAccent[700],
          },
        }}
        onClick={handleOpen}
      >
        Open modal
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={style}
            style={{
              backgroundColor: colors.primary[400],
              border: '1px solid #000',
              borderColor: 'divider',
              borderRadius: '10px',
            }}
          >
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
            {/* Form */}
            <Box sx={{ p: '1rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'column', width: '100%', height: '100%' }}>
              <Box sx={{width: '100%'}}>
                {/* Products */}
                <Box display='flex' gap='1rem' flexDirection='column' mb={4}>
                  <Typography sx={{ fontSize: '1.2rem', fontWeight: '600' }}>
                    Products:
                  </Typography>
                </Box>

                {/* GateWay */}
                <Box display='flex' gap='1rem' flexDirection='column' mb={4}>
                  <Typography sx={{ fontSize: '1.2rem', fontWeight: '600' }}>
                    GateWay:
                  </Typography>
                  <FormControl variant='standard' sx={{ minWidth: '100%' }}>
                    <InputLabel
                      sx={{ fontSize: '1rem', color: '#D3D3D3 !important' }}
                    >
                      Select Payment Provider
                    </InputLabel>
                    <Select value={gateWay} onChange={handleGateWayChange}>
                      {gateWayData.map((item, i) => {
                        return (
                          <MenuItem
                            key={i}
                            value={item.itemValue}
                            sx={{ m: 1, minWidth: '100%' }}
                            disabled={item.disabled}
                          >
                            <em>{item.text}</em>
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Box>

                {/* Note */}
                <Box display='flex' gap='1rem' flexDirection='column' mb={4}>
                  <Typography sx={{ fontSize: '1.2rem', fontWeight: '600' }}>
                    Note:
                  </Typography>
                  <FormControl fullWidth variant='standard'>
                    <InputLabel
                      sx={{ fontSize: '1rem', color: '#D3D3D3 !important' }}
                    >
                      Message...
                    </InputLabel>
                    <Input inputRef={note} sx={{ fontSize: '1rem' }} />
                  </FormControl>
                </Box>
              </Box>

              {/* Buttons */}
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                  gap: '1rem',
                  pb: '2rem',
                  width: '100%'
                }}

              >
                <Button
                  sx={{
                    width: '150px',
                    backgroundColor: colors.blueAccent[700],
                    color: colors.grey[100],
                    fontSize: '14px',
                    fontWeight: 'bold',
                    padding: '5px 20px',
                    borderRadius: '10px',
                    textTransform: 'none',
                  }}
                  onClick={handleSave}
                >
                  Send Now
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
