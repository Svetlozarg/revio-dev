import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dayjs } from 'dayjs';

export interface BroadcastTableData {
  // Required
  type: string;
  name: string;
  channel: string;
  lastEdit: string;
  status: string;

  // Optional
  category?: string;
  language?: string;
  message?: string;
  targetAudience?: string;
  start?: string;
  date?: Dayjs | null;
  template?: string;
}

export interface BroadcastState {
  data: BroadcastTableData[];
}

const getInitialStateFromLocalStorage = (): BroadcastState => {
  if (typeof window !== 'undefined') {
    const storedData = localStorage.getItem('broadcast');
    if (storedData) {
      const parsedStoredData = JSON.parse(storedData);
      return { data: parsedStoredData };
    } else {
      return { data: [] };
    }
  } else {
    return { data: [] };
  }
};

const broadcastSlice = createSlice({
  name: 'broadcast',
  initialState: getInitialStateFromLocalStorage(),
  reducers: {
    addTableData(state, action: PayloadAction<BroadcastTableData>) {
      state.data.push(action.payload);
      localStorage.setItem('broadcast', JSON.stringify(state.data));
    },
    removeTableData(state, action: PayloadAction<string>) {
      state.data = state.data.filter((data) => data.name !== action.payload);
    },
    updateTableData(state, action: PayloadAction<BroadcastTableData>) {
      const index = state.data.findIndex(
        (data) => data.name === action.payload.name
      );
      state.data[index] = action.payload;
    },
  },
});

export const { addTableData, removeTableData, updateTableData } =
  broadcastSlice.actions;
export default broadcastSlice.reducer;
