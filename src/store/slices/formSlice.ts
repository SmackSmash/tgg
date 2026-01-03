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
  contact: {
    phone: string | null;
    email: string | null;
  };
  signature: string | null;
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
  },
  contact: {
    phone: null,
    email: null
  },
  signature: null
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
    },
    addContact: (state, { payload }) => {
      return { ...state, contact: payload };
    },
    addSignature: (state, { payload }) => {
      return { ...state, signature: payload };
    }
  }
});

export const { addPostcode, addAddress, addDetails, addContact, addSignature } = formSlice.actions;
export default formSlice.reducer;
