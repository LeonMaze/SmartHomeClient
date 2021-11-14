import { configureStore } from '@reduxjs/toolkit'
import { deviceApi } from "../store/services/DeviceService";

export const store = configureStore({
  reducer: {
    [deviceApi.reducerPath]: deviceApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(deviceApi.middleware),
})