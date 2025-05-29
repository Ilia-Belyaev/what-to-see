import {PayloadAction} from '@reduxjs/toolkit';
import {Middleware} from 'redux';
import { createRootReducer } from '..';
import browserHistory from '../../browser-history';

type Reducer = ReturnType<typeof createRootReducer>;

export const redirect: Middleware<unknown, Reducer> =
   () =>
     (next) =>
       (action: PayloadAction<string>) => {
         if (action.type === 'data/redirectToRoute') {
           browserHistory.push(action.payload);
         }

         return next(action);
       };
