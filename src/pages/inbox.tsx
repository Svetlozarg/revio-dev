import {
  Box,
  CssBaseline,
  FormControl,
  OutlinedInput,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { ColorModeContext, useMode, tokens } from '@/theme/theme';
import { Sidebar } from '@/components/navigation/Sidebar';
import { Header } from '@/components/global/Header';
import InboxIcon from '@mui/icons-material/Inbox';
import InboxLayout from '@/container/Inbox';
import SearchIcon from '@mui/icons-material/Search';

export default function Inbox() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div style={{ display: 'flex' }}>
            <Sidebar />
            <main
              className='content'
              style={{ overflow: 'hidden', padding: '1rem' }}
            >
              {/* Header */}
              <Header
                title={
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'flex-between',
                      alignItems: 'flex-start',
                    }}
                  >
                    <Typography
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-between',
                        alignItems: 'center',
                        fontSize: '2rem',
                        gap: '.5rem',
                        fontWeight: 'bold',
                      }}
                    >
                      <InboxIcon sx={{ fontSize: '2rem' }} /> Inbox
                    </Typography>
                    <Box
                      sx={{
                        flex: '1',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <FormControl
                        sx={{
                          m: 1,
                          width: '100%',
                          maxWidth: '500px',
                        }}
                        variant='outlined'
                      >
                        <OutlinedInput
                          id='outlined-adornment-weight'
                          aria-describedby='outlined-weight-helper-text'
                          sx={{ height: '40px' }}
                          endAdornment={
                            <SearchIcon position='end'></SearchIcon>
                          }
                        />
                      </FormControl>
                    </Box>
                  </Box>
                }
              />

              {/* Inbox */}
              <InboxLayout />
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}
