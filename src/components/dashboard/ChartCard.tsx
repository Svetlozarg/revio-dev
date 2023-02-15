import { Typography, useTheme } from '@mui/material';
import { tokens } from '@/theme/theme';
import { Box } from '@mui/system';
import LineChart from '@/components/charts/LineChart';
import InsightsIcon from '@mui/icons-material/Insights';

export default function ChartCard() {
  const theme = useTheme();
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
      <Box
        mt='25px'
        p='0 30px'
        display='flex '
        justifyContent='space-between'
        alignItems='center'
      >
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '.5rem',
          }}
        >
          <InsightsIcon
            sx={{ color: colors.greenAccent[500], fontSize: '2rem' }}
          />
          <Typography
            variant='h2'
            fontWeight='bold'
            sx={{ fontSize: '1.2rem' }}
            color={colors.grey[100]}
          >
            Data Chart
          </Typography>
        </Box>
      </Box>

      {/* Chart */}
      <Box height='250px' m='-20px 0 0 0'>
        <LineChart isDashboard={true} />
      </Box>
    </Box>
  );
}
