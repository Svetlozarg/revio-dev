import { useState } from 'react';
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Stack,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import { ColorModeContext, useMode, tokens } from '@/theme/theme';
import { Sidebar } from '@/components/navigation/Sidebar';
import { Header } from '@/components/global/Header';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Dashboard from '@/container/Dashboard';

export default function Home() {
  const [theme, colorMode] = useMode();
  const [filerTimeFrame, setfilerTimeFrame] = useState(30);
  const colors = tokens(theme.palette.mode);

  const handleChange = (event: any) => {
    setfilerTimeFrame(event.target.value);
  };

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
              {/* Page Header */}
              <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
              >
                {/* Header Box */}
                <Header
                  title={
                    <>
                      <HomeIcon sx={{ fontSize: '2rem' }} /> Dashboard
                    </>
                  }
                  subtitle='Welcome to your dashboard'
                />
                {/* Time Period Filter */}
                <Stack
                  direction='row'
                  justifyContent='center'
                  alignItems='center'
                >
                  {/* Calendar Icon*/}
                  <CalendarMonthIcon sx={{ fontSize: '2rem' }} />

                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                      value={filerTimeFrame}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                    >
                      <MenuItem value={30}>Last 30 days</MenuItem>
                      <MenuItem value={90}>Last 3 months</MenuItem>
                      <MenuItem value={360}>Last year</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Box>

              {/* Dashboard */}
              <Dashboard />
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}
