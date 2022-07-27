import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import movieReducer from "./features/movies"

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
})
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

