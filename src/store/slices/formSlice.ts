import { createSlice } from '@reduxjs/toolkit';
import type { Address } from '../../types';

type FormState = {
  postcode: string;
  address?: Address | null;
  title?: string;
  firstname?: string;
  surname?: string;
  dob?: {
    day: number | null;
    month: number | null;
    year: number | null;
  };
};

const initialState: FormState = {
  postcode: '',
  address: null,
  title: '',
  firstname: '',
  surname: '',
  dob: {
    day: null,
    month: null,
    year: null
  }
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
