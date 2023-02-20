import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { tokens, useMode } from '@/theme/theme';

// Table Columns
const columns: GridColDef[] = [
  { field: 'type', headerName: 'Type', flex: 1 },
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'channel', headerName: 'Channel', flex: 1 },
  { field: 'lastEdit', headerName: 'Last Edit', flex: 1 },
  { field: 'status', headerName: 'Status', flex: 1 },
];

export default function DataTable() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  const { data } = useSelector((state: RootState) => state.broadcast);
  const getRowId = (data: any) => data.name.toLowerCase().replace(/\s+/g, '-');

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={getRowId}
        pageSize={6}
        rowsPerPageOptions={[5]}
        sx={{ bgcolor: colors.primary[400], fontSize: '1rem' }}
        autoHeight
      />
    </div>
  );
}
