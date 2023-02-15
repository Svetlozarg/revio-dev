import { Box, Typography } from '@mui/material';
import BarChart from '@/components/charts/BarChart';
import AssessmentIcon from '@mui/icons-material/Assessment';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { tokens, useMode } from '@/theme/theme';

export default function ConversationsChart() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        gridColumn: {
          xs: 'span 12',
          sm: 'span 12',
          md: 'span 12',
          lg: 'span 8',
          xl: 'span 8',
        },
        gridRow: 'span 2',
        backgroundColor: colors.primary[400],
        borderRadius: '10px',
      }}
    >
      {/* Header */}
      <Box
        fontWeight='bold'
        sx={{
          padding: '20px 30px 0 30px',
          fontSize: '1.2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '.5rem',
          }}
        >
          <AssessmentIcon
            sx={{
              color: colors.greenAccent[500],
              fontSize: '2rem',
            }}
          />
          <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
            Conversations Chart
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Typography sx={{ fontSize: '1.4rem', fontWeight: 'bold' }}>
                675
              </Typography>
              <Typography sx={{ fontWeight: 'bold' }}>Opened</Typography>
            </Box>
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                color: colors.greenAccent[500],
              }}
            >
              + 15%
              <KeyboardArrowUpIcon sx={{ fontSize: '1rem' }} />
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Typography sx={{ fontSize: '1.4rem', fontWeight: 'bold' }}>
                652
              </Typography>
              <Typography sx={{ fontWeight: 'bold' }}>Closed</Typography>
            </Box>
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                color: 'red',
              }}
            >
              - 15%
              <KeyboardArrowUpIcon sx={{ fontSize: '1rem' }} />
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Bar Chart */}
      <Box height='250px' mt='-20px'>
        <BarChart isDashboard={true} />
      </Box>
    </Box>
  );
}
