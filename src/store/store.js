import { configureStore } from '@reduxjs/toolkit'
import { deviceApi } from "../store/services/DeviceService";
import { homeApi } from './services/HomeService';

export const store = configureStore({
  reducer: {
    [deviceApi.reducerPath]: deviceApi.reducer,
    [homeApi.reducerPath]: homeApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(deviceApi.middleware)
      .concat(homeApi.middleware)
})