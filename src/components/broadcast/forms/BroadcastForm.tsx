import { useRef, useState, MutableRefObject } from 'react';
import {
  Box,
  FormControl,
  FormControlLabel,
  Input,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Button,
  Select,
  InputLabel,
  MenuItem,
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { tokens, useMode } from '@/theme/theme';
import { useDispatch } from 'react-redux';
import {
  addTableData,
  updateTableData,
} from '@/store/slices/broadcast/broadcastSlice';

interface Props {
  handleClose: any;
}

interface ChannelData {
  text: string;
  itemValue: string;
  disabled: boolean;
}

const channelData: Array<ChannelData> = [
  { text: 'None', itemValue: '', disabled: false },
  { text: 'WhatsApp', itemValue: 'whatsapp', disabled: false },
  { text: 'Instagram', itemValue: 'instagram', disabled: true },
  { text: 'Messenger', itemValue: 'messenger', disabled: true },
  { text: 'Viber', itemValue: 'viber', disabled: true },
  { text: 'Telegram', itemValue: 'telegram', disabled: true },
];

interface AudienceData {
  text: string;
  itemValue: string;
  disabled: boolean;
}

const audienceData: Array<AudienceData> = [
  { text: 'None', itemValue: '', disabled: false },
  { text: 'Audience 1', itemValue: 'audience1', disabled: false },
  { text: 'Audience 2', itemValue: 'audience2', disabled: false },
];

interface TemplateData {
  text: string;
  itemValue: string;
  disabled: boolean;
}

const templateData: Array<TemplateData> = [
  { text: 'None', itemValue: '', disabled: false },
  { text: 'Template 1', itemValue: 'template1', disabled: false },
  { text: 'Template 2', itemValue: 'template2', disabled: false },
];

interface FormData {
  channel: string;
  name: string;
  targetAudience: string;
  start: string;
  date: Dayjs | null;
  template: string;
  lastEdit: string;
  status: string;
  type: string;
}

export default function BroadcastForm(props: Props) {
  const { handleClose } = props;
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const [channel, setChannel] = useState<string>('');
  let broadcastName: MutableRefObject<any> = useRef(null);
  const [audience, setAudience] = useState<string>('');
  const [start, setStart] = useState<string>('');
  const [date, setDate] = useState<Dayjs | null>(dayjs('2022-02-18T12:00:00'));
  const [template, setTemplate] = useState<string>('');

  const handleChannelChange = (event: any) => {
    setChannel(event.target.value);
  };

  const handleAudienceChange = (event: any) => {
    setAudience(event.target.value);
  };

  const handleTemplateChange = (event: any) => {
    setTemplate(event.target.value);
  };

  const handleDateChange = (newValue: Dayjs | null) => {
    setDate(newValue);
  };

  const handleSave = () => {
    const today: Date = new Date();
    const lastEdit: string =
      (today.getMonth() + 1).toString().padStart(2, '0') +
      '.' +
      today.getDate().toString().padStart(2, '0') +
      '.' +
      today.getFullYear();

    const formData: FormData = {
      type: 'Broadcast',
      name: broadcastName.current.value,
      channel: channel,
      lastEdit: lastEdit,
      status: 'Draft',
      targetAudience: audience,
      start: start,
      date: date,
      template: template,
    };

    dispatch(addTableData(formData));

    handleClose();
  };

  return (
    <Box sx={{ p: '1rem' }}>
      {/* Channel */}
      <Box display='flex' gap='1rem' flexDirection='column' mb={4}>
        <Typography sx={{ fontSize: '1.2rem', fontWeight: '600' }}>
          Channel:
        </Typography>
        <FormControl variant='standard' sx={{ minWidth: '100%' }}>
          <InputLabel sx={{ fontSize: '1rem', color: '#D3D3D3 !important' }}>
            Channel
          </InputLabel>
          <Select value={channel} onChange={handleChannelChange}>
            {channelData.map((item, i) => {
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

      {/* Broadcast Name */}
      <Box display='flex' gap='1rem' flexDirection='column' mb={4}>
        <Typography sx={{ fontSize: '1.2rem', fontWeight: '600' }}>
          Broadcast Name:
        </Typography>
        <FormControl fullWidth variant='standard'>
          <InputLabel sx={{ fontSize: '1rem', color: '#D3D3D3 !important' }}>
            Name
          </InputLabel>
          <Input inputRef={broadcastName} sx={{ fontSize: '1rem' }} />
        </FormControl>
      </Box>

      {/* Target Audience */}
      <Box display='flex' gap='1rem' flexDirection='column' mb={4}>
        <Typography sx={{ fontSize: '1.2rem', fontWeight: '600' }}>
          Target Audience:
        </Typography>
        <FormControl variant='standard' sx={{ minWidth: '100%' }}>
          <InputLabel sx={{ fontSize: '1rem', color: '#D3D3D3 !important' }}>
            Select Audience
          </InputLabel>
          <Select value={audience} onChange={handleAudienceChange}>
            {audienceData.map((item, i) => {
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

      {/* When To Start */}
      <Box display='flex' gap='1rem' flexDirection='column' mb={4}>
        <Typography sx={{ fontSize: '1.2rem', fontWeight: '600' }}>
          When To Start:
        </Typography>
        <FormControl>
          <RadioGroup>
            <FormControlLabel
              value='Send Now'
              control={<Radio />}
              label={
                <Typography sx={{ fontSize: '1rem' }}>Send Now</Typography>
              }
              onClick={() => setStart('Send Now')}
            />
            <FormControlLabel
              value='Schedule for later'
              control={<Radio />}
              label={
                <Typography sx={{ fontSize: '1rem' }}>
                  Schedule for later
                </Typography>
              }
              onClick={() => setStart('Schedule for later')}
            />
          </RadioGroup>
        </FormControl>
      </Box>

      {/* Date */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          value={date}
          onChange={handleDateChange}
          renderInput={(params: any) => (
            <TextField {...params} sx={{ width: '100%' }} />
          )}
        />
      </LocalizationProvider>

      {/* Choose Template */}
      <Box display='flex' gap='1rem' flexDirection='column' mb={4} mt={4}>
        <Typography sx={{ fontSize: '1.2rem', fontWeight: '600' }}>
          Choose Template:
        </Typography>
        <FormControl variant='standard' sx={{ minWidth: '100%' }}>
          <InputLabel sx={{ fontSize: '1rem', color: '#D3D3D3 !important' }}>
            Select Template
          </InputLabel>
          <Select value={template} onChange={handleTemplateChange}>
            {templateData.map((item, i) => {
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

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '1rem',
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
          Save
        </Button>

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
        >
          Send Now
        </Button>
      </Box>
    </Box>
  );
}
