import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const deviceApi = createApi({
    reducerPath: 'deviceApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://localhost:5001'}),
    tagTypes: ['Devices'],
    endpoints: (build) => ({

        fetchDevices: build.query({
            query: () => ({
                url: `/api/Devices`
            }),
            providesTags: result => ['Devices']
        }),

        fetchDevice: build.query({
            query: (id) => ({
                url: `/api/Devices/${id}`
            }),
            providesTags: result => ['Devices']
        }),

        fetchSignals: build.query({
            query: (identifier) => ({
                url: `/api/Devices/Signals/${identifier}`
            }),
            providesTags: result => ['Devices']
        }),

        fetchNewDevices: build.query({
            query: () => ({
                url: `/api/Devices/New`
            }),
            providesTags: result => ['Devices']
        }),

        updateDevice: build.mutation({
            query: (device) => ({
                url: `/devices/${device.id}`,
                method: 'PUT',
                body: device
            }),
            invalidatesTags: ['Devices']
        }),
    })
})

export const {
    useFetchNewDevicesQuery, 
    useFetchDevicesQuery,
    useFetchDeviceQuery,
    useFetchSignalsQuery
} = deviceApi;
