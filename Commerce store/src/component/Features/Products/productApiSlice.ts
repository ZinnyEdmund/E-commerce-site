
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// exporting the featurepost

export interface Product {
  id: number;
  thumbnail: string;
}

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    getProducts: builder.query<{ products: Product[] }, void>({
      query: () => '/products',
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
