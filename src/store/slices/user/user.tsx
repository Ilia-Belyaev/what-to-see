import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../../constants';
import { User } from '../../../types/models';
import { dropUserData, setUserData } from './actions';

export const user = createSlice({
  name: NameSpace.User,
  initialState: {
    user: {} as User,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setUserData, (state, action) => {
        state.user = action.payload;
      })
      .addCase(dropUserData, (state) => {
        state.user = {} as User;
      });
  }
});
