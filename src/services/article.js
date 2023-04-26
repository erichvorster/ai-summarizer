import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/"}),
    prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', rapidApiKey);
        headers.set('X-RapidAPI-Host', 'host');

        return headers;
    },
    endpoints: (builder) => ({
    getSummary: builder.query({
      query: () => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});



//Redux makes this function available to us, useLazy allows us to call this function whenever we want to make a request to the API
export const { useLazyGetSummaryQuery } = articleApi;