import { createAction } from '@reduxjs/toolkit';
import { Review } from '../../../types/models';

export const addUserReview = createAction<Review>('reviews/addUserReview');
