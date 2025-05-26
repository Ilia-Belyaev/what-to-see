import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../../../constants';
import { AuthSlice } from '../../../types/models';

const initialState: AuthSlice = {
  authStatus: AuthorizationStatus.Unknown,
};

export const login = createSlice({
  name: NameSpace.Authorization,
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder
  //     .addCase()
  // },
});
