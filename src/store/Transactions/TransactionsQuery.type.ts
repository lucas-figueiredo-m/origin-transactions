export type TransactionsQuery = {
  Page: number;
  PageSize: number;
  TotalPages: number;
  TotalRecords: number;
  Transactions: Transaction[];
};

export type Transaction = {
  Amount: number;
  Category: string;
  Date: string;
  Id: number;
  Lat: number;
  Lon: number;
  ReceiptImage: string | null;
  Type: TransactionType;
  Vendor: string;
};

export type TransactionType = 'invoice' | 'deposit' | 'payment' | 'withdrawal';

export type TransactionChangeCoordinates = {
  id: number;
  Lat: number;
  Lon: number;
};
