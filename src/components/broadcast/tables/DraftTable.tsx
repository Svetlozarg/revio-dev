import { useState, useEffect } from 'react';
import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from '@mui/material';
import { tokens, useMode } from '@/theme/theme';

function createData(
  type: string,
  name: string,
  channel: string,
  lastEdit: string,
  status: string
) {
  return { type, name, channel, lastEdit, status };
}

export default function DraftTable() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  const [rows, setRows] = useState<Array<Object>>([]);

  const fetchTableData = () => {
    const broadCastArray: Array<Object> = JSON.parse(
      localStorage.getItem('broadcast') as string
    );

    const array: Array<Object> = [];
    broadCastArray.map((item: any) => {
      array.push(
        createData(
          item.type,
          item.broadCastName,
          item.channel,
          item.lastEdit,
          item.status
        )
      );
    });

    setRows(array);
  };

  useEffect(() => {
    fetchTableData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table
        aria-label='draft table'
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
              Type
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
              Channel
            </TableCell>
            <TableCell
              align='center'
              sx={{ fontSize: '1rem', fontWeight: 'bold' }}
            >
              Last Edit
            </TableCell>
            <TableCell
              align='center'
              sx={{ fontSize: '1rem', fontWeight: 'bold' }}
            >
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row' sx={{ fontSize: ' 1rem' }}>
                {row.type}
              </TableCell>
              <TableCell align='center' sx={{ fontSize: ' 1rem' }}>
                {row.name}
              </TableCell>
              <TableCell align='center' sx={{ fontSize: ' 1rem' }}>
                {row.channel}
              </TableCell>
              <TableCell align='center' sx={{ fontSize: ' 1rem' }}>
                {row.lastEdit}
              </TableCell>
              <TableCell align='center' sx={{ fontSize: ' 1rem' }}>
                {row.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
