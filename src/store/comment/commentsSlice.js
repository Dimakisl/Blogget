import {createSlice} from '@reduxjs/toolkit';
import {getCommentsRequestAsync} from './action';

const initialState = {
  loading: false,
  comments: [],
  error: '',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  // reducers: {
  //   commentRequest: (state) => {
  //     state.error = '';
  //     state.loading = true;
  //   },
  //   commentRequestSuccess: (state, action) => {
  //     state.loading = false,
  //     state.comments = action.payload.comments.data,
  //     state.error = '';
  //     state.loading = false;
  //   },
  //   commentRequestError: (state, action) => {
  //     state.loading = false;
  //     state.comments = [];
  //     state.error = action.error;
  //   },
  // },
  extraReducers: {
    [getCommentsRequestAsync.pending.type]: (state) => {
      state.error = '';
      state.loading = true;
      state.comments = [];
    },
    [getCommentsRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false,
      state.comments = action.payload.post,
      state.error = '';
      state.loading = false;
    },
    [getCommentsRequestAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.comments = [];
      state.error = action.error;
    },
  }
});


export default commentsSlice.reducer;