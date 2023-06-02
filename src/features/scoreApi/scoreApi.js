import { apiSlice } from "../api/apiSlice";

export const scoreApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllScore: builder.query({
      query: () => ({
        url: "/shows?q=all",
        method: "GET",
      }),
    }),

    getSingleScore: builder.query({
      query: (id) => ({
        url: `/shows/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllScoreQuery, useGetSingleScoreQuery } = scoreApi;
