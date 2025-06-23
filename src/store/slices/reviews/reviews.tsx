import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../../constants';
import { Reviews } from '../../../types/models';
import { getCurrentReviews } from '../api-actions';
import { addUserReview } from './actions';

export const reviews = createSlice({
  name: NameSpace.Reviews,
  initialState: {
    reviews: [] as Reviews,
    isReviewLoaded: false,
    hasError: false,
  },
  reducers:{},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentReviews.pending, (state) => {
        state.isReviewLoaded = true;
        state.hasError = false;
      })
      .addCase(getCurrentReviews.fulfilled, (state, action) => {
        state.isReviewLoaded = false;
        state.reviews = action.payload;
      })
      .addCase(getCurrentReviews.rejected, (state) => {
        state.hasError = true;
        state.isReviewLoaded = false;
      })
      .addCase(addUserReview, (state, action) => {
        state.reviews.push(action.payload);
      });
  }
});
