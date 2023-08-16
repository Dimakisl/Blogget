import {createSlice} from '@reduxjs/toolkit';
import {postBestRequestAfterAsync, postBestRequestAsync} from './action';


const initialState = {
  loading: false,
  posts: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
  test: 'test'
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: {
    [postBestRequestAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
      state.posts = [];
      state.page = '';
    },
    [postBestRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.posts = action.payload?.data?.children;
      state.error = '';
      state.after = action.payload?.data?.after;
      state.isLast = !action.payload?.data?.after;
      state.page = action.payload?.newPage;
    },
    [postBestRequestAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.posts = [];
    },

    [postBestRequestAfterAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
      // state.posts = [];
      // state.page = '';
    },
    [postBestRequestAfterAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      // state.posts = [...state.posts, ...action.payload?.data?.children];
      state.posts = [...state.posts].concat(action.payload?.data?.children);
      state.error = '';
      // state.after = action.payload?.data?.after;
      // state.isLast = !action.payload?.data?.after;
      // state.page = action.payload?.newPage;
    },
    [postBestRequestAfterAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
      // state.posts = [];
    },

  }
});

export default postsSlice.reducer;