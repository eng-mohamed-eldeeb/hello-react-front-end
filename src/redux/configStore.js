import { configureStore } from '@reduxjs/toolkit';
import greetingsSlice from './greetings/Greeting';

const reduxLogger = require('redux-logger');

const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    greetings: greetingsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
