import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'jsonSlice',
  initialState: {
    inputJson: " ",
    parsedJson: null,
    error: null,
  },
  reducers: {
    setInputJson: (state, action) => {
      state.inputJson = action.payload;
    },
    setParsedJson: (state, action) => {
      state.parsedJson = action.payload;
      state.error = null;  // Clear any error when parsing succeeds
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.parsedJson = null;
    },
  },
});

export const { setInputJson,setParsedJson, setError } = slice.actions;
export default slice.reducer;
