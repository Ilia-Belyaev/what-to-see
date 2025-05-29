import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import HistoryRouter from './components/history-router/history-router';
import browserHistory from './browser-history';
import { ToastContainer } from 'react-toastify';
import { fetchFilmAction, fetchPromoFilmAction } from './store/slices/api-actions';
// import { getToken } from './services/token';

store.dispatch(fetchFilmAction());
store.dispatch(fetchPromoFilmAction());

// if (getToken()) {
//   // store.dispatch(getUserData());
// }

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ToastContainer />
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
