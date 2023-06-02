import { apiSlice } from "../api/apiSlice";

export const scoreApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllShow: builder.query({
      query: () => ({
        url: "/search/shows?q=all",
        method: "GET",
      }),
    }),

    getAShow: builder.query({
      query: (id) => ({
        url: `/shows/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllShowQuery, useGetAShowQuery } = scoreApi;
