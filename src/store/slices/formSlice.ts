import { createSlice } from '@reduxjs/toolkit';
import type { Address } from '@/src/types';

type FormState = {
  postcode: string;
  address: Address | null;
  details: {
    title: string;
    firstname: string;
    surname: string;
    dob: {
      day: number | null;
      month: number | null;
      year: number | null;
    };
  };
};

const initialState: FormState = {
  postcode: '',
  address: null,
  details: {
    title: '',
    firstname: '',
    surname: '',
    dob: {
      day: null,
      month: null,
      year: null
    }
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
    },
    addDetails: (state, { payload }) => {
      return { ...state, details: payload };
    }
  }
});

export const { addPostcode, addAddress, addDetails } = formSlice.actions;
export default formSlice.reducer;
