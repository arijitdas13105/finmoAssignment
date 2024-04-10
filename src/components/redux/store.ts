// store.ts

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import cartReducer from './Slice/cartSlice';
import userReducer from './Slice/userSlice';

// Define the root state type
export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'user'],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure and export the Redux store
export const store = configureStore({
  reducer: persistedReducer,
});

// Export the persistor
export const persistor = persistStore(store);
