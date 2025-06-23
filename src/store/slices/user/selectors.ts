import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../../../constants';
import { State } from '../../../types/state';
import { User } from '../../../types/models';

const takeUserData = (state: Pick<State, NameSpace.User>) => state[NameSpace.User].user;

export const getUserData = createSelector([takeUserData], (user: User) => user);
