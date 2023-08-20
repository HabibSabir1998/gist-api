import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allGists: [],
};

export const gistSlice = createSlice({
  name: 'gist',
  initialState,
  reducers: {
    addAllGists: (state, action) => {
      state.allGists = action.payload;
    },
  },
});

// distruct actions from gistSlice
export const { addAllGists } = gistSlice.actions;

// get all from the action creators
export const getAllGist = (state) => state.gist.allGists;


export default gistSlice.reducer;
