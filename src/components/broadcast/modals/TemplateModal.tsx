import { MutableRefObject, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { tokens, useMode } from '@/theme/theme';
import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Alert,
  IconButton,
} from '@mui/material';
import TemplateFormModal from './TemplateFormModal';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: '500px',
  border: '1px solid #000',
  borderColor: 'divider',
  boxShadow: 24,
  borderRadius: '10px',
  p: 2,
};

const styleTemplateForm = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: '90vw',
  height: '100%',
  maxHeight: '900px',
  border: '1px solid #000',
  borderColor: 'divider',
  boxShadow: 24,
  borderRadius: '10px',
  p: 2,
  overflow: 'auto',
};

interface channelObject {
  text: string;
  itemValue: string;
  disabled: boolean;
}

// Channel DropDown Data
const channelDropDownData: Array<channelObject> = [
  { text: 'None', itemValue: '', disabled: false },
  { text: 'WhatsApp', itemValue: 'whatsapp', disabled: false },
  { text: 'Instagram', itemValue: 'instagram', disabled: true },
  { text: 'Messenger', itemValue: 'messenger', disabled: true },
  { text: 'Viber', itemValue: 'viber', disabled: true },
  { text: 'Telegram', itemValue: 'telegram', disabled: true },
];

export default function TemplateModal() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState<boolean>(false);
  const [openTemplateForm, setOpenTemplateForm] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [channel, setChannel] = useState<string>('');
  const nameInput: MutableRefObject<any> = useRef(null);

  const handleOpen = () => {
    setOpen(true);
    setError('');
  };
  const handleClose = () => setOpen(false);
  const handleOpenForm = () => setOpenTemplateForm(true);
  const handleCloseForm = () => setOpenTemplateForm(false);

  const handleChannelChange = (event: any) => {
    setChannel(event.target.value);
  };

  const handleNext = () => {
    if (channel === '') return setError('Please select a channel');
    if (nameInput.current.value === '')
      return setError('Please specify a name of the template');

    handleClose();
    handleOpenForm();
  };

  return (
    <div>
      {/* Modal Button */}
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
        + New Template
      </Button>

      {/* PreTemplate Form For Channel/Name Select */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={style}
          style={{
            backgroundColor: colors.primary[400],
            height: error ? '390px' : '310px',
          }}
        >
          {/* Title */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: '1.4rem',
                fontWeight: 'bold',
                textAlign: 'center',
                margin: '0 auto',
                pl: '3rem',
              }}
            >
              Create New Template
            </Typography>

            <IconButton onClick={() => handleClose()}>
              <CloseIcon sx={{ fontSize: '2rem' }} />
            </IconButton>
          </Box>

          {/* Error */}
          {error && (
            <Alert severity='error' sx={{ fontSize: '1rem', margin: '1rem 0' }}>
              {error}
            </Alert>
          )}

          {/* Channel Select */}
          <FormControl
            variant='standard'
            sx={{ minWidth: '100%', margin: '1rem 0 2rem 0' }}
          >
            <InputLabel sx={{ fontSize: '1rem', color: '#D3D3D3 !important' }}>
              Select Channel
            </InputLabel>
            <Select value={channel} onChange={handleChannelChange}>
              {channelDropDownData.map((menuItem, i) => {
                return (
                  <MenuItem
                    key={i}
                    value={menuItem.itemValue}
                    sx={{ m: 1, minWidth: '100%' }}
                    disabled={menuItem.disabled}
                  >
                    <em>{menuItem.text}</em>
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          {/* Name */}
          <FormControl fullWidth variant='standard'>
            <InputLabel sx={{ fontSize: '1rem', color: '#D3D3D3 !important' }}>
              Template Name
            </InputLabel>
            <Input inputRef={nameInput} sx={{ fontSize: '1rem' }} />
          </FormControl>

          {/* Next Button */}
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: '14px',
                fontWeight: 'bold',
                padding: '5px 20px',
                borderRadius: '10px',
                textTransform: 'nonew',
                marginTop: '3rem',
              }}
              onClick={handleNext}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Template Form */}
      {openTemplateForm && (
        <Modal open={openTemplateForm} onClose={handleCloseForm}>
          <Box
            sx={styleTemplateForm}
            style={{ backgroundColor: colors.primary[400] }}
          >
            <TemplateFormModal
              name={nameInput?.current?.value}
              channel={channel}
              handleCloseForm={handleCloseForm}
            />
          </Box>
        </Modal>
      )}
    </div>
  );
}
