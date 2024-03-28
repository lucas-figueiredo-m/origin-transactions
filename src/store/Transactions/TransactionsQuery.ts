import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

export const transactionsApi = createApi({
  reducerPath: 'transactions',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://tque3jpn1e.execute-api.us-east-1.amazonaws.com/mobile-tha/transactions',
  }),
  endpoints: builder => ({
    getTransactionsList: builder.query({
      query: (page: number) => {
        return {
          url: '',
          params: { page, pageSize: 10 },
        };
      },
    }),
  }),
});

export const { useGetTransactionsListQuery } = transactionsApi;

export const transactionsSelector = (state: RootState) => state.transactions;
