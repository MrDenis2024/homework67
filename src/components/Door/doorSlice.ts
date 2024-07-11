import {createSlice} from '@reduxjs/toolkit';

export interface DoorState {
  symbol: string[],
}

const initialState: DoorState = {
  symbol: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '<', '0', 'E'],
};

export  const doorSlice = createSlice({
  name: "door",
  initialState,
  reducers: {

  },
});

export const doorReducer = doorSlice.reducer;