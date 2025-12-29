import { createSlice } from '@reduxjs/toolkit';

type FormState = {
  postcode?: string;
};
const initialState: FormState = {};

const formSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addPostcode: (state, { payload }) => {
      return { ...state, postcode: payload };
    }
  }
});

export const { addPostcode } = formSlice.actions;
export default formSlice.reducer;
