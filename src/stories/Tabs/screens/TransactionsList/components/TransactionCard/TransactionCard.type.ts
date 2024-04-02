import { TransactionType } from '@store';
import { Colors } from '@theme';

export type LeftBarColorObject = {
  [key in TransactionType]: Colors;
};
