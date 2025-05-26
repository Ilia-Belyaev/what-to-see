import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../../constants';
import { State } from '../../../types/state';
import { AuthStatus } from '../../../types/models';

const takeAuthStatus = (state: Pick<State, NameSpace.Authorization>) => state[NameSpace.Authorization].authStatus;

export const getAuthStatus = createSelector([takeAuthStatus], (auth: AuthStatus) => auth);
