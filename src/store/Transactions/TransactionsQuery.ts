import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { Transaction, TransactionsQuery } from '.';

export const transactionsApi = createApi({
  reducerPath: 'transactions',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://tque3jpn1e.execute-api.us-east-1.amazonaws.com/mobile-tha/transactions',
  }),
  tagTypes: ['Transactions'],
  endpoints: builder => ({
    getTransactionsList: builder.query<Transaction[], number>({
      providesTags: ['Transactions'],
      query: page => {
        return {
          url: '',
          params: { page, pageSize: 10 },
        };
      },
      serializeQueryArgs: ({ endpointName }) => endpointName,
      transformResponse: (response: TransactionsQuery) => {
        return response.Transactions;
      },
      merge: (current, incoming, arg) => {
        if (arg.arg === 1) {
          return incoming;
        }
        return [...current, ...incoming];
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useGetTransactionsListQuery } = transactionsApi;

export const transactionsSelector = (state: RootState) => state.transactions;
