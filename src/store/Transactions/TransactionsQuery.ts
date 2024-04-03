import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import {
  Transaction,
  TransactionChangeCoordinates,
  TransactionsQuery,
} from '.';

export const transactionsApi = createApi({
  reducerPath: 'transactions',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://tque3jpn1e.execute-api.us-east-1.amazonaws.com/mobile-tha/transactions',
  }),
  tagTypes: ['Transactions', 'TransactionDetail'],
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

        if (incoming.length === 0) {
          return current;
        }

        return [...current, ...incoming];
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        return currentArg !== previousArg;
      },
    }),
    getTransactionDetails: builder.query<Transaction, number>({
      query: id => {
        return {
          url: `/${id}`,
        };
      },
      providesTags: (res, err, arg) => {
        return [
          { type: 'TransactionDetail', id: arg },
          { type: 'Transactions' },
        ];
      },
    }),
    changeTransactionCoordinates: builder.mutation<
      void,
      TransactionChangeCoordinates
    >({
      query: ({ id, Lat, Lon }) => {
        return {
          url: `/${id}/coordinates`,
          method: 'POST',
          body: { Lat, Lon },
        };
      },
      invalidatesTags: (req, res, arg) => [
        { type: 'TransactionDetail', id: arg.id },
      ],
    }),
  }),
});

export const {
  useGetTransactionsListQuery,
  useGetTransactionDetailsQuery,
  useChangeTransactionCoordinatesMutation,
} = transactionsApi;

export const transactionsSelector = (state: RootState) => state.transactions;
