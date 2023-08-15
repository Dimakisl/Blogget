import {createSlice} from '@reduxjs/toolkit';
import {postBestRequestAsync} from './action';


const initialState = {
  loading: false,
  posts: [],
  error: '',
  after: '',
  isLast: false,
  page: ''
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: {
    [postBestRequestAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
      state.posts = [];
    },
    [postBestRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.posts = action.payload.data.children;
      state.error = '';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
    },
    [postBestRequestAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.posts = [];
    }
  }
});

export default postsSlice.reducer;