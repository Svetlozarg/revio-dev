import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { tokens, useMode } from '@/theme/theme';

function createData(
  channel: string,
  name: string,
  start: string,
  send: number,
  delivered: number,
  read: number,
  clicked: number
) {
  return { channel, name, start, send, delivered, read, clicked };
}

const rows = [
  createData(
    'whatsapp',
    'Pre-order campaign 1',
    '10.22.2023',
    130,
    100,
    99,
    88
  ),
  createData(
    'whatsapp',
    'Pre-order campaign 2',
    '09.22.2023',
    450,
    100,
    99,
    95
  ),
  createData(
    'whatsapp',
    'Pre-order campaign 3',
    '08.22.2023',
    98,
    100,
    100,
    96
  ),
];

export default function HistoryTable() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);

  return (
    <TableContainer component={Paper}>
      <Table
        aria-label='history table'
        sx={{
          minWidth: 650,
          bgcolor: colors.primary[400],
          border: '1px solid #000',
          borderColor: 'divider',
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
              Channel
            </TableCell>
            <TableCell
              align='center'
              sx={{ fontSize: '1rem', fontWeight: 'bold' }}
            >
              Name
            </TableCell>
            <TableCell
              align='center'
              sx={{ fontSize: '1rem', fontWeight: 'bold' }}
            >
              Start
            </TableCell>
            <TableCell
              align='center'
              sx={{ fontSize: '1rem', fontWeight: 'bold' }}
            >
              Send
            </TableCell>
            <TableCell
              align='center'
              sx={{ fontSize: '1rem', fontWeight: 'bold' }}
            >
              Delivered (%)
            </TableCell>
            <TableCell
              align='center'
              sx={{ fontSize: '1rem', fontWeight: 'bold' }}
            >
              Read (%)
            </TableCell>
            <TableCell
              align='center'
              sx={{ fontSize: '1rem', fontWeight: 'bold' }}
            >
              Clicked (%)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row' sx={{ fontSize: '1rem' }}>
                {row.channel}
              </TableCell>
              <TableCell align='center' sx={{ fontSize: '1rem' }}>
                {row.name}
              </TableCell>
              <TableCell align='center' sx={{ fontSize: '1rem' }}>
                {row.start}
              </TableCell>
              <TableCell align='center' sx={{ fontSize: '1rem' }}>
                {row.send}
              </TableCell>
              <TableCell align='center' sx={{ fontSize: '1rem' }}>
                {row.delivered}%
              </TableCell>
              <TableCell align='center' sx={{ fontSize: '1rem' }}>
                {row.read}%
              </TableCell>
              <TableCell align='center' sx={{ fontSize: '1rem' }}>
                {row.clicked}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
