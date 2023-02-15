import { useRef, useState, MutableRefObject } from 'react';
import { tokens, useMode } from '@/theme/theme';
import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import SubjectIcon from '@mui/icons-material/Subject';
import ImageIcon from '@mui/icons-material/Image';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import AttachFileIcon from '@mui/icons-material/AttachFile';

interface Props {
  name: string;
  channel: string;
  onChangeMessage: any;
}

interface CategoryData {
  text: string;
  textValue: string;
  disabled: boolean;
}

const categoryData: Array<CategoryData> = [
  { text: 'None', textValue: '', disabled: false },
  { text: 'Category 1', textValue: 'cat1', disabled: false },
  { text: 'Category 2', textValue: 'cat2', disabled: false },
  { text: 'Category 3', textValue: 'cat3', disabled: false },
];

interface LanguageData {
  text: string;
  textValue: string;
  disabled: boolean;
}

const languageData: Array<LanguageData> = [
  { text: 'None', textValue: '', disabled: false },
  { text: 'English', textValue: 'eng', disabled: false },
  { text: 'Bulgarian', textValue: 'bg', disabled: false },
  { text: 'Spanish', textValue: 'sp', disabled: false },
];

interface HeaderData {
  text: string;
  icon: any;
}

const headerData: Array<HeaderData> = [
  { text: 'Text', icon: <SubjectIcon sx={{ fontSize: '2rem' }} /> },
  { text: 'Image', icon: <ImageIcon sx={{ fontSize: '2rem' }} /> },
  { text: 'Video', icon: <SmartDisplayIcon sx={{ fontSize: '2rem' }} /> },
  { text: 'File', icon: <AttachFileIcon sx={{ fontSize: '2rem' }} /> },
];

export default function TemplateForm(props: Props) {
  const { name, channel, onChangeMessage } = props;
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  const [category, setCategory] = useState<string>('');
  const [language, setLanguage] = useState<string>('');
  const message: MutableRefObject<any> = useRef('');

  const handleCategoryChange = (event: any) => {
    setCategory(event.target.value);
  };

  const handleLanguageChange = (event: any) => {
    setLanguage(event.target.value);
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1350px',
        height: '800px',
      }}
    >
      {/* Title Name */}
      <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </Typography>

      {/* Form Content */}
      <Box p={2}>
        {/* Category */}
        <Box display='flex' gap='1rem' flexDirection='column' mb={4}>
          <Typography sx={{ fontSize: '1.2rem', fontWeight: '600' }}>
            Category:
          </Typography>
          <FormControl variant='standard' sx={{ minWidth: '100%' }}>
            <InputLabel sx={{ fontSize: '1rem', color: '#D3D3D3 !important' }}>
              Choose message template category
            </InputLabel>
            <Select value={category} onChange={handleCategoryChange}>
              {categoryData.map((item, i) => {
                return (
                  <MenuItem
                    key={i}
                    value={item.textValue}
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

        {/* Language */}
        <Box display='flex' gap='1rem' flexDirection='column' mb={4}>
          <Typography sx={{ fontSize: '1.2rem', fontWeight: '600' }}>
            Language:
          </Typography>
          <FormControl variant='standard' sx={{ minWidth: '100%' }}>
            <InputLabel sx={{ fontSize: '1rem', color: '#D3D3D3 !important' }}>
              Select language
            </InputLabel>
            <Select value={language} onChange={handleLanguageChange}>
              {languageData.map((item, i) => {
                return (
                  <MenuItem
                    key={i}
                    value={item.textValue}
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

        {/* Header */}
        <Box display='flex' gap='1rem' flexDirection='column' mb={4}>
          <Typography sx={{ fontSize: '1.2rem', fontWeight: '600' }}>
            Header:{' '}
            <Typography
              variant='caption'
              sx={{ fontSize: '1rem', color: '#D3D3D3' }}
            >
              (Optional)
            </Typography>
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '.5rem',
              flexWrap: 'wrap',
            }}
          >
            {headerData.map((item, i) => {
              return (
                <IconButton
                  key={i}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '1rem 2rem',
                  }}
                >
                  {item.icon}
                  <Typography sx={{ fontSize: '1.2rem' }}>
                    {item.text}
                  </Typography>
                </IconButton>
              );
            })}
          </Box>
        </Box>

        {/* Message */}
        <Box display='flex' gap='1rem' flexDirection='column' mb={4}>
          <Typography sx={{ fontSize: '1.2rem', fontWeight: '600' }}>
            Message:
          </Typography>

          <TextField
            id='outlined-multiline-flexible'
            placeholder="Hey, {{FirstName}}, thank you for joining in the club! You\'ve unlocked your 20% discount. Would you like to learn more?"
            multiline
            maxRows={4}
            inputRef={message}
            onChange={() => onChangeMessage(message.current.value)}
            sx={{ maxWidth: '500px' }}
          />
        </Box>

        {/* Buttons */}
        <Box>
          <Typography sx={{ fontSize: '1.2rem', fontWeight: '600' }}>
            Buttons:
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
