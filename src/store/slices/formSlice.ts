import { createSlice } from '@reduxjs/toolkit';
import type { Address } from '../../types';

type FormState = {
  postcode: string;
  address: Address | null;
};

const initialState: FormState = {
  postcode: '',
  address: null
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addPostcode: (state, { payload }) => {
      return { ...state, postcode: payload };
    },
    addAddress: (state, { payload }) => {
      return { ...state, address: payload };
    }
  }
});

export const { addPostcode, addAddress } = formSlice.actions;
export default formSlice.reducer;
