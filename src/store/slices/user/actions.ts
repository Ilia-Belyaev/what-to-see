import { createAction } from '@reduxjs/toolkit';
import { User } from '../../../types/models';

export const setUserData = createAction<User>('user/setData');
export const dropUserData = createAction('user/dropData');
