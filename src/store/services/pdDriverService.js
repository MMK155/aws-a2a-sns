import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// const API_URL = "http://localhost:5000/api";
export const pdDriverApi = createApi({
  reducerPath: "pdDriverApi",
  tagTypes: ["parameters"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://775zu4ej72.execute-api.ap-northeast-2.amazonaws.com/dev",
  }),
  endpoints: (builder) => ({
    createPdDriver: builder.mutation({
      query: (parameter) => ({
        url: "/pd-driver",
        method: "POST",
        body: parameter,
      }),
      invalidatesTags: ["Drivers"],
    }),
    getAllDrivers: builder.query({
      query: () => ({
        url: `/pd-driver`,
        method: "GET",
      }),
      providesTags: ["Drivers"],
    }),
    // getParameterById: builder.query({
    //   query: (id) => `/parameter/${id}`,
    //   providesTags: ["Drivers"],
    // }),
    // updateParameter: builder.mutation({
    //   query: ({ id, ...parameter }) => ({
    //     url: `/parameter/${id}`,
    //     method: "PUT",
    //     body: parameter,
    //   }),
    //   invalidatesTags: ["Drivers"],
    // }),
    // deleteParameter: builder.mutation({
    //   query: (id) => ({
    //     url: `/parameter/${id}`,
    //     method: "DELETE",
    //     params: { id },
    //   }),
    //   invalidatesTags: ["parameters"],
    // }),
  }),
});

export const { useCreatePdDriverMutation, useGetAllDriversQuery } = pdDriverApi;
