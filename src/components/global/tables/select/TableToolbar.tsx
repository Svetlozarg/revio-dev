import { tokens, useMode } from '@/theme/theme';
import {
  alpha,
  Box,
  Button,
  FormControl,
  IconButton,
  OutlinedInput,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

interface EnhancedTableToolbarProps {
  numSelected: number;
}

export default function TableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
        borderBottom: '3px solid',
        borderColor: 'divider',
      }}
    >
      {/* Search and filter */}
      <Box sx={{ flex: '1 1 100%' }} id='tableTitle' component='div'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          {/* Search */}
          <FormControl
            sx={{
              m: 1,
              width: '100%',
              maxWidth: '300px',
              '& .MuiInputBase-input': {
                padding: '10px',
              },
            }}
            variant='outlined'
          >
            <OutlinedInput
              id='outlined-adornment-weight'
              aria-describedby='outlined-weight-helper-text'
              endAdornment={<SearchIcon sx={{ position: 'end' }}></SearchIcon>}
            />
          </FormControl>

          {/* Filter */}
          <IconButton>
            <FilterAltIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
        </Box>
      </Box>

      {/* Selected count and export button */}
      {numSelected > 0 ? (
        <Box
          sx={{
            width: '190px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            gap: '.5rem',
          }}
        >
          <Typography
            color='inherit'
            variant='subtitle1'
            component='div'
            sx={{ fontSize: '1rem' }}
          >
            {numSelected} selected
          </Typography>
          <Tooltip title='Export'>
            <Button
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: '14px',
                fontWeight: 'bold',
                padding: '8px 15px',
              }}
            >
              Export
            </Button>
          </Tooltip>
        </Box>
      ) : (
        <Box
          sx={{
            width: '190px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            gap: '.5rem',
          }}
        >
          <Typography
            color='inherit'
            variant='subtitle1'
            component='div'
            sx={{ fontSize: '1rem' }}
          >
            {numSelected} selected
          </Typography>
          <Tooltip title='Export Disabled'>
            <Button
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: '14px',
                fontWeight: 'bold',
                padding: '8px 15px',
              }}
              disabled
            >
              Export
            </Button>
          </Tooltip>
        </Box>
      )}
    </Toolbar>
  );
}
