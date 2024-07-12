import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface DoorState {
  symbol: string[],
  password: string;
  bgColor: string;
  message: string;
}

const initialState: DoorState = {
  symbol: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '<', '0', 'E'],
  password: '',
  bgColor: '',
  message: '',
};

const correctPass = '1337';

export  const doorSlice = createSlice({
  name: "door",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      if(state.password.length < 4 && state.message === '') {
        state.password += action.payload;
      }
    },
    del: (state) => {
      if(state.message === '') {
        state.password = state.password.slice(0, -1);
      }
    },
    entry: (state) => {
      if(state.password === correctPass) {
        state.bgColor = 'green';
        state.message = 'Access Granted';
      } else {
        state.bgColor = 'red';
        state.message = 'Access Denied';
      }
    },
    reset: (state) => {
      state.password = '';
      state.bgColor = '';
      state.message = '';
    },
  },
});

export const doorReducer = doorSlice.reducer;
export const {add, del, entry, reset} = doorSlice.actions;