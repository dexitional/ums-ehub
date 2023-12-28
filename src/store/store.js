import { configureStore } from '@reduxjs/toolkit'
import applicantSlice from './applicantSlice'
import helperSlice from './helperSlice'
import ssoSlice from './ssoSlice'
import stepSlice from './stepSlice'
import themeSlice from './themeSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const helperReducer = persistReducer(persistConfig, helperSlice)
const applicantReducer = persistReducer(persistConfig, applicantSlice)
const stepReducer = persistReducer(persistConfig, stepSlice)
const ssoReducer = persistReducer(persistConfig, ssoSlice)
const themeReducer = persistReducer(persistConfig, themeSlice)

const store = configureStore({
  reducer: { 
    helper : helperReducer,
    applicant : applicantReducer,
    step : stepReducer,
    sso : ssoReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export default store;
