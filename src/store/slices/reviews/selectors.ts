import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../../constants';
import { State } from '../../../types/state';
import { Reviews } from '../../../types/models';

const takeReviews = (state: Pick<State, NameSpace.Reviews>) => state[NameSpace.Reviews].reviews;
const takeLoading = (state: Pick<State, NameSpace.Reviews>) => state[NameSpace.Reviews].isReviewLoaded;

export const getReviews = createSelector([takeReviews], (reviews: Reviews) => reviews);
export const getLoading = createSelector([takeLoading], (loading: boolean) => loading);
