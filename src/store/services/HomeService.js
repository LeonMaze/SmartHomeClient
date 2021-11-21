import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const homeApi = createApi({
    reducerPath: 'homeApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://localhost:5001'}),
    tagTypes: ['Homes'],
    endpoints: (build) => ({

        fetchHomes: build.query({
            query: () => ({
                url: `/api/Homes`
            }),
            providesTags: result => ['Homes']
        }),

        fetchHome: build.query({
            query: (id) => ({
                url: `/api/Homes/${id}`,
            }),
            providesTags: result => ['Homes']
        }),

        createHome: build.mutation({
            query: (home) => ({
                url: `/api/Homes`,
                method: 'POST',
                body: home
            }),
            invalidatesTags: ['Homes']
        }),

        updateHome: build.mutation({
            query: (home) => ({
                url: `/api/Homes/${home.id}`,
                method: 'PUT',
                body: home
            }),
            invalidatesTags: ['Homes']
        }),

        deleteHome: build.mutation({
            query: (id) => ({
                url: `/api/Homes?homeId=${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Homes']
        }),
    })
})

export const {
    useCreateHomeMutation, 
    useUpdateHomeMutation, 
    useFetchHomesQuery,
    useFetchHomeQuery,
    useDeleteHomeMutation
} = homeApi;