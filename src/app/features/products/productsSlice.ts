import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApiSlice = createApi({
  reducerPath: "products",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: builder => ({
    getProductList: builder.query({
      query: () => {
        return {
          url: "/products",
        };
      },
      // ** TODO => {baseUrl}/products/{ID}
    }),
  }),
});

export const { useGetProductListQuery } = productsApiSlice;
